package com.cricbuzz.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cricbuzz.model.Rankings;
import com.cricbuzz.repository.RankingRepository;



@RestController
@RequestMapping("/rank")
public class RankingsController {
	
	@Autowired
	private RankingRepository rankingRepository;

	@GetMapping
	public List<Rankings> getAll()
	{
		//List<Rankings> list=new ArrayList();
		//list=rankingRepository.findAll();
		
		return rankingRepository.findAll();
		
	}
	
	@GetMapping("/{Rank}")
	public String getRank(@PathVariable("Rank") int Rank)
	{
		List<Rankings> list=rankingRepository.findAll();
		
		for(Rankings r : list)
		{
			if(Rank==r.getRank())
			{
				return "Rank :"+r.getRank()+"   "+"Team :"+r.getTeam()+"Points"+r.getPoints()+"Rating :"+r.getRating();
			}
		}
		return "No record matched";
		
	}
	
	
	
}
