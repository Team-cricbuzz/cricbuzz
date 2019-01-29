package com.cricbuzz.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("scores")
public class LiveScores {

	@Id
	private String id;
	private String match;
	private String score;
	private String overs;
	
	
	public LiveScores(String id, String match, String score, String overs) {
		super();
		this.id = id;
		this.match = match;
		this.score = score;
		this.overs = overs;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getMatch() {
		return match;
	}
	public void setMatch(String match) {
		this.match = match;
	}
	public String getScore() {
		return score;
	}
	public void setScore(String score) {
		this.score = score;
	}
	
	public String getOvers() {
		return overs;
	}
	public void setOvers(String overs) {
		this.overs = overs;
	}
	@Override
	public String toString() {
		return "LiveScores [match=" + match + ", score=" + score 
				+ ", overs=" + overs + "]";
	}
	
	
	
}
