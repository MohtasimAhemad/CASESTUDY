package com.shopping.productservice.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.shopping.productservice.model.Products;

@Repository
public interface ProductRepository extends MongoRepository<Products,String> {
	
	public List<Products> findProductByCategory(String category);
//	public void addProduct(Products product);
//	public List<Products> getAllProducts();
//	public void deleteProduct(String id);public List<Products> findProductsByCategory(String category);
//	public Optional<Products> getProductById(String id);
//	public void updateProduct(Products product);


}
