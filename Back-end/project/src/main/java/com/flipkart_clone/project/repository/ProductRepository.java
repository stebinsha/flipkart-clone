package com.flipkart_clone.project.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import com.flipkart_clone.project.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

	@Query(
		    value = "SELECT * FROM products " +
		            "WHERE LOWER(subCategory) LIKE LOWER(CONCAT('%', :query, '%')) " +
		            "OR LOWER(articleType) LIKE LOWER(CONCAT('%', :query, '%')) " +
		            "ORDER BY RAND() LIMIT 30",
		    nativeQuery = true
		)

    List<Product> searchRandom30(@Param("query") String query);
}
