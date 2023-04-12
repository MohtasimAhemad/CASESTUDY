package com.shopping.productservice.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.shopping.productservice.model.Products;
import com.shopping.productservice.service.ProductServiceImpl;

import io.swagger.annotations.ApiParam;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "*")
public class ProductsController {
	
	@Autowired
	private ProductServiceImpl productService;
	
	
	@PostMapping("/addproduct")
	public ResponseEntity<Products> addProduct(@RequestBody Products product) {
		try {
		   productService.addProduct(product);
		return new ResponseEntity<Products>(HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<Products>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("getallproducts")
	public ResponseEntity<?> findAllProducts(){
		try {
		List<Products> prod = productService.getAllProducts();
		return new ResponseEntity<>(prod,HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	@GetMapping("/getproductbycategory/{category}")
	public ResponseEntity<?> getProductByCategory(@ApiParam(value = "Category for the products you need to retrieve")
			@PathVariable("category") String category){
		try {
			List<Products> prod= productService.findProductsByCategory(category);
			return new ResponseEntity<>(prod, HttpStatus.OK);
			}catch (Exception e) {
				
				return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
			}
	}
	
	
	
	@DeleteMapping("/deleteproduct/{id}")
	public void deleteProduct(@PathVariable("id") String id) {
		productService.deleteProduct(id);
	}
	
	@GetMapping("/getproductbyid/{id}")
	public Optional<Products> getProductById(@PathVariable("id") String id) { 
		return  productService.getProductById(id);
	}

	@PutMapping("/updateproduct")
	public void updateProduct(@RequestBody Products product) {
		productService.updateProduct(product);
	}
	


}
