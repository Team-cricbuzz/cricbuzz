package com.cricbuzz.repository;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.cricbuzz.model.LiveScores;

public interface ScoreRepository extends MongoRepository<LiveScores, String>{

}
