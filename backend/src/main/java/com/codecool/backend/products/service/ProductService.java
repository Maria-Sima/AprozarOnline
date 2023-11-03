package com.codecool.backend.products.service;

import com.codecool.backend.exception.ResourceNotFoundException;
import com.codecool.backend.fileStorage.ImageService;
import com.codecool.backend.products.model.Product;
import com.codecool.backend.products.model.dto.ProductDTO;
import com.codecool.backend.products.model.dto.ProductDTOMapper;
import com.codecool.backend.products.model.types.ProductCategory;
import com.codecool.backend.products.model.types.ProductForm;
import com.codecool.backend.products.repository.ProductDAO;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Objects;

@Service
@AllArgsConstructor
public class ProductService {

    private final ImageService imageService;
    private ProductDAO productDAO;
    private ProductDTOMapper productDTOMapper;


    public Page<ProductDTO> getAllProducts(Pageable pageable) {
        return productDAO.getAllProducts(pageable).map(productDTOMapper);
    }

    public void addProduct(ProductForm productform) {

        try {
            String url = imageService.upload(productform.file());
            Product product = Product.builder()
                    .userId(productform.sellerId())
                    .productDescription(productform.productDescription())
                    .productCategory(productform.category())
                    .name(productform.productName())
                    .productKey(url)
                    .price(productform.price())
                    .quantity(productform.quantity())
                    .build();
            product.setProductKey(url);
            productDAO.addProduct(product);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }


    }

    public void deleteProduct(Long productId) {
        checkIfProductExists(productId);
        productDAO.deleteProductById(productId);

    }

    public Page<ProductDTO> getAllProductsBySeller(Long sellerId, Pageable pageable) {
        return productDAO.getAllProductsBySeller(sellerId, pageable).map(productDTOMapper);
    }

    private void checkIfProductExists(Long productId) {
        if (!productDAO.existProductById(productId)) {
            throw new ResourceNotFoundException("product with id [%s] not found".formatted(productId));
        }
    }

    public void uploadProductImage(Long productId, MultipartFile file) {

        try {
            Product product = productDAO.findProductById(productId).orElseThrow(() -> new ResourceNotFoundException(
                    "product with id [%s] not found".formatted(productId)
            ));
            String photoUrl = imageService.upload(file);
            product.setProductKey(photoUrl);
            productDAO.addProduct(product);
        } catch (IOException e) {
            throw new RuntimeException("failed to upload profile image", e);
        }


    }

    public ProductDTO getProductById(Long productId) {
        return productDAO.findProductById(productId).map(productDTOMapper).orElseThrow(() -> new ResourceNotFoundException(
                "product with id [%s] not found".formatted(productId)
        ));
    }

    public void updateProduct(Long productId, ProductForm productForm) {
        Product product = productDAO.findProductById(productId).orElseThrow(() -> new ResourceNotFoundException(
                "product with id [%s] not found".formatted(productId)));
        boolean isModified = false;
        if (!Objects.equals(productForm.productName(), product.getName())) {
            product.setName(productForm.productName());
            isModified = true;
        }

        if (!Objects.equals(productForm.price(), product.getPrice())) {
            product.setPrice(productForm.price());
            isModified = true;
        }

        if (productForm.category() != null && productForm.category() != product.getProductCategory()) {
            product.setProductCategory(productForm.category());
            isModified = true;
        }

        if (!Objects.equals(productForm.productDescription(), product.getProductDescription())) {
            product.setProductDescription(productForm.productDescription());
            isModified = true;
        }

        if (isModified) {
            productDAO.updateProduct(product);
        }
    }

    public Page<ProductDTO> getAllProductsByCategory(ProductCategory type, Pageable pageable) {
        return productDAO.getProductsByCategory(type, pageable).map(productDTOMapper);
    }
}

