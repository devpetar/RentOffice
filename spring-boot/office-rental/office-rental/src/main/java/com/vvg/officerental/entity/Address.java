package com.vvg.officerental.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table
@Data
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String street;

    @Column
    private String city;

    @Column
    private String country;

    @Column
    private String zipCode;

    @OneToOne
    @PrimaryKeyJoinColumn
    private Reservation reservation;
}
