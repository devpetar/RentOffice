package com.vvg.officerental.service;

import com.vvg.officerental.dto.Purchase;
import com.vvg.officerental.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeReservation(Purchase purchase);
}
