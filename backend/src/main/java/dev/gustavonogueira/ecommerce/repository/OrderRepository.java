package dev.gustavonogueira.ecommerce.repository;

import dev.gustavonogueira.ecommerce.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
