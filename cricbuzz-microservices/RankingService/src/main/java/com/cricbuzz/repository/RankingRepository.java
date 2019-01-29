package com.cricbuzz.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cricbuzz.model.Rankings;

public interface RankingRepository extends MongoRepository<Rankings, String>{

	

}
