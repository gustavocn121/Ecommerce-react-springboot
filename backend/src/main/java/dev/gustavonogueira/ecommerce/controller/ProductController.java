package dev.gustavonogueira.ecommerce.controller;

import dev.gustavonogueira.ecommerce.dto.ProductDto;
import dev.gustavonogueira.ecommerce.form.ProductForm;
import dev.gustavonogueira.ecommerce.model.Product;
import dev.gustavonogueira.ecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    ProductRepository productRepo;

    @GetMapping
    public List<ProductDto> listAll(){
        return productRepo.findAll().stream().map(ProductDto::new).toList();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable Long id){
        Optional<Product> p = productRepo.findById(id);
        if (p.isPresent()) {
            return new ResponseEntity(new ProductDto(p.get()),HttpStatus.FOUND);
        }
        return new ResponseEntity(HttpStatus.BAD_REQUEST);
    }

    @PostMapping
    public ResponseEntity<ProductDto> create(@RequestBody ProductForm form){
        Product p = new Product(form);
        p = productRepo.save(p);
        return new ResponseEntity(p, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        Optional<Product> p = productRepo.findById(id);
        if (p.isPresent()){
            productRepo.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductDto> update(@PathVariable Long id,@RequestBody ProductForm form){
        Optional<Product> p = productRepo.findById(id);
        if(p.isPresent()){
            Product product = p.get();

            return new ResponseEntity(p, HttpStatus.OK);
        }
        return ResponseEntity.notFound().build();
    }

}
