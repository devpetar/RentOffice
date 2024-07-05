package com.vvg.officerental.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table
@Data
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private String email;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private Set<Reservation> orderList = new HashSet<>();

    public void add(Reservation order) {

        if (order != null) {

            if (orderList == null) {
                orderList = new HashSet<>();
            }

            orderList.add(order);
            order.setCustomer(this);
        }
    }
}
