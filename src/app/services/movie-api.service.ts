import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  private baseurl = "https://api.themoviedb.org/3";
  private apikey = "08cc33bd5ae3a747598ce2ad84376e66";
  private bannerApi = `${this.baseurl}/trending/all/week?api_key=${this.apikey}`
  constructor(private http:HttpClient) { }

  bannerData():Observable<any>{
    return this.http.get(this.bannerApi)
  }
}
