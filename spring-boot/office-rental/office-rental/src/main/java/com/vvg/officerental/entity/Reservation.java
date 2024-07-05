package com.vvg.officerental.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table
@Data
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String orderTrackingNumber;

    @Column
    private BigDecimal totalPrice;

    @Column
    private LocalDate dateFrom;

    @Column
    private LocalDate dateTo;

    @Column(name="status")
    private String status;

    @Column
    @CreationTimestamp
    private LocalDate createdAt;

    @Column
    @UpdateTimestamp
    private LocalDate updatedAt;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "reservation")
    private Set<ReservationItem> reservationItemList = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id")
    private Address address;

    public void add(ReservationItem item) {

        if (item != null) {
            if (reservationItemList == null) {
                reservationItemList = new HashSet<>();
            }

            reservationItemList.add(item);
            item.setReservation(this);
        }
    }
}
