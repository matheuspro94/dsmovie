package com.devsuperio.dsmovie.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperio.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

	Page<Movie> findAll(Pageable pageable);

}
