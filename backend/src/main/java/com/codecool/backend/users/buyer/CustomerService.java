package com.codecool.backend.users.buyer;

import com.codecool.backend.fileStorage.ImageService;
import com.codecool.backend.orders.OrderDAO;
import com.codecool.backend.orders.OrderDTO;
import com.codecool.backend.orders.payments.PaymentService;
import com.codecool.backend.users.model.dto.AppUserDTOMapper;
import com.codecool.backend.users.repository.AppUserDao;
import com.codecool.backend.users.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("customer")
public class CustomerService extends AppUserService {

    private final OrderDAO orderDAO;
    private final PaymentService paymentService;

    @Autowired
    public CustomerService( AppUserDao appUserDao,
                           AppUserDTOMapper userDTOMapper,
                           PasswordEncoder passwordEncoder,
                           ImageService imageService,
                           OrderDAO orderDAO, PaymentService paymentService) {
        super(appUserDao, userDTOMapper, passwordEncoder, imageService);
        this.orderDAO = orderDAO;
        this.paymentService = paymentService;
    }



    public List<OrderDTO> getOrdersForThisCustomer(Long userId){
        return orderDAO.getAllOrdersByUser(userId);
    }

}
