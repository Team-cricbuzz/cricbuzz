package com.cricbuzz.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("matches")
public class Matches {
	@Id
	
	String id;
    String team2;
    String team1;
    String type;
    
    String date;
    String dateTimeGMT;
    boolean squad;
    boolean matchStarted;
    
    

	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTeam2() {
		return team2;
	}
	public void setTeam2(String team2) {
		this.team2 = team2;
	}
	public String getTeam1() {
		return team1;
	}
	public void setTeam1(String team1) {
		this.team1 = team1;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getDateTimeGMT() {
		return dateTimeGMT;
	}
	public void setDateTimeGMT(String dateTimeGMT) {
		this.dateTimeGMT = dateTimeGMT;
	}
	public boolean getSquad() {
		return squad;
	}
	public void setSquad(boolean squad) {
		this.squad = squad;
	}
	public boolean getMatchStarted() {
		return matchStarted;
	}
	public void setMatchStarted(boolean matchStarted) {
		this.matchStarted = matchStarted;
	}
	@Override
	public String toString() {
		return "Matches [id=" + id + ", team2=" + team2 + ", team1=" + team1 + ", type=" + type
				+ ", date=" + date + ", dateTimeGMT=" + dateTimeGMT + ", squad=" + squad + ", matchStarted="
				+ matchStarted + "]";
	}

	
}