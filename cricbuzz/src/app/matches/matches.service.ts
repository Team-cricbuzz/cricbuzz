import {Injectable} from "@angular/core";
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMatches } from '../imatches';
import { Response } from 'selenium-webdriver/http';

@Injectable({
providedIn:  'root'
})

export  class  MatchesService {

    private  matches:IMatches[];
    API_URL  =  'https://cricapi.com/api/matches?apikey=SBXNkRA46WMvllmPx3FAqKibKQu2';
constructor(private  http:  HttpClient) {}

}