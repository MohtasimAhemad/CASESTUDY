package com.eshopping.cartservice.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import com.eshopping.cartservice.model.Cart;
import com.eshopping.cartservice.model.OrderCheckout;
import com.eshopping.cartservice.service.CartServiceImpl;

import io.swagger.annotations.ApiOperation;



@RestController
@RequestMapping("/cart")
@CrossOrigin(origins = "*")
public class CartController {
	
	@Autowired
	CartServiceImpl cartServiceImpl;
	
	@PostMapping("/newcart")
	public void createNewCart(@RequestBody Cart cart) {
		System.out.println(cart);
		cartServiceImpl.createNewCart(cart);
		
	}
	
	@GetMapping("/getcartbyuserid/{userId}")
	public Optional<Cart> findCartByUserId(@PathVariable("userId") String userId) {
		return cartServiceImpl.findCartByUserId(userId);
	}
	
	@PostMapping("/checkout")
	public ResponseEntity<String> confirmOrder(@RequestBody OrderCheckout orderCheckout){
		return cartServiceImpl.checkout(orderCheckout);
	}

}
