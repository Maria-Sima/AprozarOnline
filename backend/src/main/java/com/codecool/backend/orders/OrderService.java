package com.codecool.backend.orders;

import com.codecool.backend.exception.ResourceNotFoundException;
import com.codecool.backend.products.Product;
import com.codecool.backend.products.ProductDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@Service
public class OrderService implements OrderDAO {
    private final OrderRepository orderRepository;
    private final OrderDTOMapper orderDTOMapper;
    private final ProductDAO productDAO;

    @Autowired
    public OrderService(OrderRepository orderRepository, OrderDTOMapper orderDTOMapper, ProductDAO productDAO) {
        this.orderRepository = orderRepository;
        this.orderDTOMapper = orderDTOMapper;
        this.productDAO = productDAO;
    }

    @Override
    public List<OrderDTO> getAllOrdersByUser(Long id) {
        return orderRepository.findAllByUserId(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("user with id [%s] hasn't placed any orders ".formatted(id)))
                .stream().map(orderDTOMapper)
                .collect(Collectors.toList());
    }

    @Override
    public OrderRequest findByPaypalId(Long paypalId) {
        return orderRepository.findByPaypalOrderId(paypalId).orElseThrow(() ->
                new ResourceNotFoundException("user with id [%s] hasn't placed any orders ".formatted(id)));
    }


    private void TakeProductsOutOfStock(List<CartItem> items) {
        for (CartItem item :
                items) {
            Product product = productDAO.findProductById(item.getProduct().getId())
                    .orElseThrow(() ->
                            new ResourceNotFoundException("product with id [%s] not found "
                                    .formatted(item.getProduct().getId())));
            product.setQuantity(product.getQuantity() - item.getQuantity());
            if (product.getQuantity() <= 0) {
                productDAO.deleteProductById(product.getId());
            }

        }
    }

    @Override
    public OrderDTO addOrder(OrderRequest order) {
        orderRepository.save(order);
        TakeProductsOutOfStock(order.getCartItems());
        return orderDTOMapper.apply(order);
    }

    @Override
    public OrderDTO findOrderById(Long orderID) {
        return orderRepository.findById(orderID).map(orderDTOMapper)
                .orElseThrow(() -> new ResourceNotFoundException("order with id [%s] not found".formatted(orderID)));
    }
}
