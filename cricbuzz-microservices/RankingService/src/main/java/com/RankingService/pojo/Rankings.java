package com.RankingService.pojo;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("rankings")
public class Rankings {

	private int Rank;
	private String Team;
	private int Points;
	private int Rating;
	public int getRank() {
		return Rank;
	}
	public void setRank(int rank) {
		Rank = rank;
	}
	public String getTeam() {
		return Team;
	}
	public void setTeam(String team) {
		Team = team;
	}
	public int getPoints() {
		return Points;
	}
	public void setPoints(int points) {
		Points = points;
	}
	public int getRating() {
		return Rating;
	}
	public void setRating(int rating) {
		Rating = rating;
	}
	@Override
	public String toString() {
		return "Rankings [Rank=" + Rank + ", Team=" + Team + ", Points=" + Points + ", Rating=" + Rating + "]";
	}
	
	
	
	
	}
	
	
	
	

