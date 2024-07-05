package com.vvg.officerental.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table
@Data
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column
    private String name;

    @ManyToOne
    @JoinColumn(name="country_id")
    private Country country;
}
