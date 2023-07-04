package com.codecool.backend.fileStorage;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface ImageRepository extends JpaRepository<Image,Long> {

    List<Image> findAllByUserId(Long id);
}
