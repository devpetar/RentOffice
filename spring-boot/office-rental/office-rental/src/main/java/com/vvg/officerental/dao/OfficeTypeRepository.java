package com.vvg.officerental.dao;

import com.vvg.officerental.entity.OfficeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "officeType", path = "office-type")
public interface OfficeTypeRepository extends JpaRepository<OfficeType, Long> {
}
