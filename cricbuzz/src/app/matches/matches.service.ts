import {Injectable} from '@angular/core'
import { HttpClient} from '@angular/common/http';
import { match } from './match';

@Injectable()
export class MatchService{
    private _url : string = "http://localhost:3000/match/all";

    constructor(private http : HttpClient){

    }

    getAll()  {
        console.log("matches")
        const headers = new Headers();
         return this.http.get<match[]>(this._url );
     
         }
      
}