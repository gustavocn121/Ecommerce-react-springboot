package dev.gustavonogueira.ecommerce.model;

import dev.gustavonogueira.ecommerce.form.ProductForm;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Getter
@Entity
@Table(name = "products")
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Product name is required.")
    @Basic(optional = false)
    private String name;
    @NotNull(message = "Product price is required.")
    @Basic(optional = false)
    private Double price;
    private String imageUrl;
    private String description;

    public Product(ProductForm form) {
        this.name = form.getName();
        this.price = form.getPrice();
        this.imageUrl = form.getImageUrl();
        this.description = form.getDescription();
    }

}
