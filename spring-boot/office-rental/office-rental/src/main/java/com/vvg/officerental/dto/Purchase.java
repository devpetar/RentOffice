package com.vvg.officerental.dto;

import com.vvg.officerental.entity.Address;
import com.vvg.officerental.entity.Customer;
import com.vvg.officerental.entity.Reservation;
import com.vvg.officerental.entity.ReservationItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {
    private Customer customer;
    private Address address;
    private Reservation reservation;
    private Set<ReservationItem> reservationItems;
}
