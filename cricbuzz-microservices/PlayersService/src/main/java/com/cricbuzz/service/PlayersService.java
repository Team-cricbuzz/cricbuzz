package com.cricbuzz.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cricbuzz.model.Players;
import com.cricbuzz.repository.PlayersRepository;
import com.netflix.ribbon.proxy.annotation.Hystrix;


@RestController
@RequestMapping("/players")
public class PlayersService {
	
	
	@Autowired
	PlayersRepository  playerrepo;
	
	@GetMapping
	public List<Players> getAll()
	{
		return playerrepo.findAll();
		
	}
	@GetMapping("/{Name}")
	public String getPlayer(@PathVariable("Name") String Name)
	{
		List<Players> list=playerrepo.findAll();
		
		for(Players r : list)
		{
			if(Name.equals(r.getName()))
			{
				return "Name :"+r.getName()+"   "+"Team :"+r.getTeam()+"  "+"Type :"+r.getType();
			}
		}
		return "No record matched";
		
	}
}
