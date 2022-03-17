package com.devsuperio.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperio.dsmovie.entities.Score;
import com.devsuperio.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {	

}
