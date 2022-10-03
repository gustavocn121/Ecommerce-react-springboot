package dev.gustavonogueira.ecommerce.model;

import javax.persistence.*;

@Entity
@Table(name="users")
public class User {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
}
