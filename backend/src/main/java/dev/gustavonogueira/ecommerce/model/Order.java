package dev.gustavonogueira.ecommerce.model;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime createdAt=LocalDateTime.now();
    private LocalDateTime lastModified=LocalDateTime.now();
    private String status;
    @ManyToMany
    private List<OrderItem> items;
}
