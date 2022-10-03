package dev.gustavonogueira.ecommerce.dto;

import dev.gustavonogueira.ecommerce.model.Product;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Basic;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
public class ProductDto {

    private String name;
    private Double price;
    private String imageUrl;
    private String description;

    public ProductDto(Product p){
        this.setName(p.getName());
        this.setPrice(p.getPrice());
        this.setImageUrl(p.getImageUrl());
        this.setDescription(p.getDescription());
    }

}
