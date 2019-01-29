package com.upcomingmatches.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.upcomingmatches.model.UpcomingMatches;
import com.upcomingmatches.repo.UpcomingMatchesRepo;

@RestController
@RequestMapping("/match")
public class UpcomingMatchesDao {
	
	@Autowired
	private UpcomingMatchesRepo upcomingMatchesRepo;

	
	@GetMapping
	public List<UpcomingMatches> getAll() {
		return upcomingMatchesRepo.findAll();
	}
	
}