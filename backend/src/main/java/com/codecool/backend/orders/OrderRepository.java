package com.codecool.backend.orders;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface OrderRepository extends JpaRepository<OrderRequest,Long> {
    Optional<List<OrderRequest>> findAllByUserId(Long aLong);
}
