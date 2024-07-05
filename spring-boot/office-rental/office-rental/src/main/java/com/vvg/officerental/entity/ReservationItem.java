package com.vvg.officerental.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Entity
@Table
@Data
public class ReservationItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String imageUrl;

    @Column
    private BigDecimal price;

    @Column(name="office_id")
    private Long officeId;

    @ManyToOne
    @JoinColumn(name = "reservation_id")
    private Reservation reservation;
}
