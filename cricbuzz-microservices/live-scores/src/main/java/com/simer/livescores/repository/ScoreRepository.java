package com.simer.livescores.repository;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.simer.livescores.model.LiveScores;

public interface ScoreRepository extends MongoRepository<LiveScores, String>{

}
