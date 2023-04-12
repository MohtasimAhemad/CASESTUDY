package com.shopping.userservice.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopping.userservice.model.UserProfile;
import com.shopping.userservice.service.UserProfileServiceImpl;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/users")
public class UserProfileController {
	
	
	@Autowired
	private UserProfileServiceImpl userProfileService;
	
	@PostMapping("/adduser")
	public void addNewUserProfile(@RequestBody UserProfile userProfile) {
		userProfileService.addNewUserProfile(userProfile);
	}
	
	@PutMapping("/edituser")
	public void editUser(@RequestBody UserProfile userProfile) {
		userProfileService.updateProfile(userProfile);
	}
	
	@GetMapping("/finduser/{id}")
	public ResponseEntity<?> getUserById(@PathVariable String id) {
		try {
		Optional<UserProfile> user = userProfileService.getById(id);
		return new ResponseEntity<>(user,HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("finduserbyemail/{email}")

	public ResponseEntity<?> getUserByEmail(@PathVariable("email") String email) {
		try {
			Optional<UserProfile> user = userProfileService.getUserByEmail(email);
			return new ResponseEntity<>(user,HttpStatus.OK);
			}catch (Exception e) {
				return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
			}
	}
		
	}
	
	
	
	
	



