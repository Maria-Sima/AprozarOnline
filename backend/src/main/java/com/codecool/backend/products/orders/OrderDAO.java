package com.codecool.backend.products.orders;

import java.util.List;

public interface OrderDAO {
    List<OrderDTO> getAllOrdersByUser(Long userId);

    Order findByPaypalId(Long paypalId);

    OrderDTO addOrder(Order order);

    OrderDTO findOrderById(Long orderID);
}
