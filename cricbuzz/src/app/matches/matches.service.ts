import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMatches } from '../imatches';

@Injectable({
providedIn:  'root'
})

export  class  MatchesService {

    API_URL  =  'https://cricapi.com/api/matches?apikey=SBXNkRA46WMvllmPx3FAqKibKQu2';
constructor(private  httpClient:  HttpClient) {}
getMatches():Observable<IMatches[]> {
    return  this.httpClient.get<IMatches[]>(this.API_URL);
     
    } 

}