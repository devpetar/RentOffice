package com.vvg.officerental.controller;

import com.vvg.officerental.dto.Purchase;
import com.vvg.officerental.dto.PurchaseResponse;
import com.vvg.officerental.service.CheckoutService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {

    private CheckoutService checkoutService;

    public CheckoutController(CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }

    @PostMapping("/purchase")
    public PurchaseResponse placeReservation(@RequestBody Purchase purchase) {
        PurchaseResponse purchaseResponse = checkoutService.placeReservation(purchase);
        return purchaseResponse;
    }
}
