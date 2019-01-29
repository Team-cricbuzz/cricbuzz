package com.upcomingmatches.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.upcomingmatches.model.UpcomingMatches;

public interface UpcomingMatchesRepo extends MongoRepository<UpcomingMatches, String> {

}