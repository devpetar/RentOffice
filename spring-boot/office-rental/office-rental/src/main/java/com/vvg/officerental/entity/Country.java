package com.vvg.officerental.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table
@Data
public class Country {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column
    private String code;

    @Column
    private String name;

    @OneToMany(mappedBy = "country")
    @JsonIgnore
    private List<City> cities;
}
