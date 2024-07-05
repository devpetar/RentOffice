package com.vvg.officerental.dao;

import com.vvg.officerental.entity.Office;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.time.LocalDate;

@RepositoryRestResource
public interface OfficeRepository extends JpaRepository<Office, Long> {

    Page<Office> findByTypeId(@Param("id") Long id, Pageable pageable);

    Page<Office> findByNameContaining(@Param("name") String name, Pageable pageable);

    @Query("SELECT o FROM Office o " +
            "WHERE LOWER(o.name) LIKE LOWER('%:keyword%') " +
            "AND o.id NOT IN " +
                "(SELECT ri.id FROM ReservationItem ri " +
                "WHERE ri.reservation.dateTo < :dateFrom OR ri.reservation.dateFrom > :dateTo)")
    Page<Office> findByKeywordAndFreeDates(@Param("keyword") String keyword,
                                      @Param("dateFrom") LocalDate dateFrom,
                                      @Param("dateTo") LocalDate dateTo,
                                      Pageable pageable);
}
