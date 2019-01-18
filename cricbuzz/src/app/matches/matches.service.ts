import { Injectable } from  '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
providedIn:  'root'
})

export  class  MatchesService {

    API_URL  =  'https://cricapi.com/api/cricket?apikey=VRA0vQhoGEdC1xR3p5IByiav2SO2';
constructor(private  httpClient:  HttpClient) {}
getMatches(){
    return  this.httpClient.get(`${this.API_URL}/matches`);
}
}