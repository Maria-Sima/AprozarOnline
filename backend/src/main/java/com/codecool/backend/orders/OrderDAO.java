package com.codecool.backend.orders;

import java.util.List;

public interface OrderDAO {
    List<OrderDTO> getAllOrdersByUser(Long userId);


    OrderDTO addOrder(OrderRequest order);

    OrderDTO findOrderById(Long orderID);
}
