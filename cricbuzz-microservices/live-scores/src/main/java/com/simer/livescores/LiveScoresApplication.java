package com.simer.livescores;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class LiveScoresApplication {

	public static void main(String[] args) {
		SpringApplication.run(LiveScoresApplication.class, args);
	}

}

