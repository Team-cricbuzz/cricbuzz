package com.cricbuzz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class PlayersDbApplication {

	public static void main(String[] args) {
		SpringApplication.run(PlayersDbApplication.class, args);
	}

}

