package com.flipkart_clone.project.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.flipkart_clone.project.model.Product;
import com.flipkart_clone.project.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> searchRandom30(String query) {
        return productRepository.searchRandom30(query);
    }


    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(int id) {
        return productRepository.findById(id).orElse(null);
    }
}
