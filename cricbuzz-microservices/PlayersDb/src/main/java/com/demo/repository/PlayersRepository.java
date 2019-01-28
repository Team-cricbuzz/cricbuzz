package com.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.demo.model.Players;

public interface PlayersRepository extends MongoRepository<Players, String> {
}
