package com.cricbuzz.model;

import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.mapping.Document;


@Document("Players")
public class Players {
	
	String Name;
	String Team;
	String Type;
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getTeam() {
		return Team;
	}
	public void setTeam(String team) {
		Team = team;
	}
	public String getType() {
		return Type;
	}
	public void setType(String type) {
		Type = type;
	}
	@Override
	public String toString() {
		return "Players [Name=" + Name + ", Team=" + Team + ", Type=" + Type + "]";
	}
	
	
	
	

}
