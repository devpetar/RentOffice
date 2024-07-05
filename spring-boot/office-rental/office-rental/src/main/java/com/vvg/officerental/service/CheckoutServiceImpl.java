package com.vvg.officerental.service;

import com.vvg.officerental.dao.CustomerRepository;
import com.vvg.officerental.dto.Purchase;
import com.vvg.officerental.dto.PurchaseResponse;
import com.vvg.officerental.entity.Customer;
import com.vvg.officerental.entity.Reservation;
import com.vvg.officerental.entity.ReservationItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.UUID;

@Service
public class CheckoutServiceImpl implements CheckoutService {

    private CustomerRepository customerRepository;

    public CheckoutServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public PurchaseResponse placeReservation(Purchase purchase) {
        Reservation reservation = purchase.getReservation();

        // generate tracking number
        String orderTrackingNumber = generateOrderTrackingNumber();
        reservation.setOrderTrackingNumber(orderTrackingNumber);

        // populate reservation with reservationItems
        Set<ReservationItem> reservationItemList = purchase.getReservationItems();
        reservationItemList.forEach(item -> reservation.add(item));

        reservation.setAddress(purchase.getAddress());

        Customer customer = purchase.getCustomer();
        String email = customer.getEmail();
        Customer customerFromDB = customerRepository.findByEmail(email);
        if (customerFromDB != null) {
            customer = customerFromDB;
        }

        customer.add(reservation);
        customerRepository.save(customer);

        return new PurchaseResponse(orderTrackingNumber);
    }

    private String generateOrderTrackingNumber() {
        return UUID.randomUUID().toString();
    }
}
