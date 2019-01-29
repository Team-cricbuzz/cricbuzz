package com.cricbuzz.service;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cricbuzz.model.LiveScores;
import com.cricbuzz.repository.ScoreRepository;

@RestController
@RequestMapping("/getscore")
public class ScoreService {

	@Autowired
	private ScoreRepository scoreRepository;
	
	@GetMapping
	public List<LiveScores> getAll()
	{
		return scoreRepository.findAll();
	}
	
	@PostMapping("/{id}")
	public void update(@PathVariable("id") ObjectId id,  @RequestBody LiveScores liveScores )
	{
		scoreRepository.save(liveScores);
	}
}
