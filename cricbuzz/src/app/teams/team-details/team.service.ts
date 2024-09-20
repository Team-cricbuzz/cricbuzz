import {Injectable} from '@angular/core'
import {Iteam} from "../../iteam"
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class TeamService{
    private _url : string = "../assets/data/team.json";

    constructor(private http : HttpClient){

    }

    getTeam() : Observable<Iteam[]>{
        return this.http.get<Iteam[]>(this._url);
        }
      
      
}