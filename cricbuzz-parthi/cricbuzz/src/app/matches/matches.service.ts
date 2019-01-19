import {Injectable} from "@angular/core";
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMatches } from '../imatches';
import { match } from './match';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
providedIn:  'root'
})

export  class  MatchesService {
    private  matches:IMatches[];
    private extractData(res: Response) {
        let body = res;
        return body || { };
      }
constructor(private  http:  HttpClient) {}
list(){
    const url = 'https://cricapi.com/api/matches?apikey=SBXNkRA46WMvllmPx3FAqKibKQu2';
    return this.http.get<match[]>(url);

}
}