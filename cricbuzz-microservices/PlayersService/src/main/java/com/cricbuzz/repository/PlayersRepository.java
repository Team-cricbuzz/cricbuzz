package com.cricbuzz.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cricbuzz.model.Players;

public interface PlayersRepository extends MongoRepository<Players, String> {
}
