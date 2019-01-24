package com.example.demo.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Matches;
import com.example.demo.repository.MatchesRepository;

@RestController
public class MatchesDao {
	@Autowired
	MatchesRepository  matchrepo;
	
	
	@RequestMapping(method=RequestMethod.GET,value="/match/all")
	public List<Matches> read() {
		return matchrepo.findAll();
	}
	@RequestMapping(method=RequestMethod.GET,value="/match/{id}")
	public Optional<Matches> readbyid(@PathVariable String id) {
		return matchrepo.findById(id)
;	}
	@RequestMapping(method=RequestMethod.GET,value="/match/{type}")
	public Iterable<Matches> readbytype(@PathVariable Iterable<String> type) {
		return matchrepo.findAllById(type)
;	}
}