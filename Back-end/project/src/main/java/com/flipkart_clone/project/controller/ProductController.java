package com.flipkart_clone.project.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.flipkart_clone.project.model.Product;
import com.flipkart_clone.project.service.ProductService;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    @Autowired
    private ProductService productService;


    @GetMapping("/search")
    public List<Product> searchProducts(@RequestParam String query) {
        return productService.searchRandom30(query);
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable int id) {
        return productService.getProductById(id);
    }
}
