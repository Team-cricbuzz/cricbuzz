package com.RankingService.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.RankingService.pojo.Rankings;

public interface RankingRepository extends MongoRepository<Rankings, String>{

	

}
