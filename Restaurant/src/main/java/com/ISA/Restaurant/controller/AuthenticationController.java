package com.ISA.Restaurant.controller;
import com.ISA.Restaurant.Dto.LoginRequest;
import com.ISA.Restaurant.Dto.LoginResponse;
import com.ISA.Restaurant.Dto.RegisterRequest;
import com.ISA.Restaurant.Dto.VerifyRestaurantDto;
import com.ISA.Restaurant.Entity.Restaurant;
import com.ISA.Restaurant.service.AuthenticationService;
import com.ISA.Restaurant.service.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/auth")
@RestController
public class AuthenticationController {
    private final JwtService jwtService;

    private final AuthenticationService authenticationService;

    public AuthenticationController(JwtService jwtService, AuthenticationService authenticationService) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }


    // Test endpoint for checking the API
    @GetMapping("/test")
    public String test() {
        return "test";
    }

    @PostMapping("/signup")
    public ResponseEntity<Restaurant> register(@RequestBody RegisterRequest registerRequest) {
        Restaurant registeredRestaurent = authenticationService.signup(registerRequest);
        return ResponseEntity.ok(registeredRestaurent);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authenticate(@RequestBody LoginRequest loginRequest) {
        Restaurant authenticatedRestaurent = authenticationService.authenticate(loginRequest);
        String jwtToken = jwtService.generateToken(authenticatedRestaurent);
        LoginResponse loginResponse = new LoginResponse(jwtToken, jwtService.getExpirationTime());
        return ResponseEntity.ok(loginResponse);
    }

//    @PostMapping("/verify")
//    public ResponseEntity<?> verifyUser(@RequestBody VerifyRestaurantDto verifyUserDto) {
//        try {
//            authenticationService.verifyRestaurant(verifyUserDto);
//            return ResponseEntity.ok("Account verified successfully");
//        } catch (RuntimeException e) {
//            return ResponseEntity.badRequest().body(e.getMessage());
//        }
//    }
//
//    @PostMapping("/resend")
//    public ResponseEntity<?> resendVerificationCode(@RequestParam String email) {
//        try {
//            authenticationService.resendVerificationCode(email);
//            return ResponseEntity.ok("Verification code sent");
//        } catch (RuntimeException e) {
//            return ResponseEntity.badRequest().body(e.getMessage());
//        }
//    }
}