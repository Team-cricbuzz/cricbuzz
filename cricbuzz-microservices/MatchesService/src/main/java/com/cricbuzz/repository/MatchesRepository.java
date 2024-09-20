package com.cricbuzz.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cricbuzz.model.Matches;

public interface MatchesRepository extends MongoRepository<Matches, String> {

}
