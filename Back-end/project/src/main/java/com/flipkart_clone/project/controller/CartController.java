package com.flipkart_clone.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.flipkart_clone.project.model.Product;
import com.flipkart_clone.project.service.ProductService;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins="http://localhost:5173")
public class CartController {
	@Autowired
	private ProductService productservice;
	@GetMapping("/{id}")
	public Product getCartProduct(@PathVariable int id) {
        return productservice.getProductById(id);
    }
	

}
