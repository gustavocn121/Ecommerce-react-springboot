package dev.gustavonogueira.ecommerce.form;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Basic;
import javax.validation.constraints.NotNull;
@Setter
@Getter
@AllArgsConstructor
public class ProductForm {
    @NotNull(message = "Product name is required.")
    @Basic(optional = false)
    private String name;
    private Double price;
    private String imageUrl="";
    private String description="";



}
