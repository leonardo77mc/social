import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {response} from "express";
import {catchError, map, Observable} from "rxjs";
import {IPostResponse, IUsernameInfo} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  constructor(private readonly _http: HttpClient) {
  }

  getInfo(username: string): Observable<IUsernameInfo> {
    return this._http.post<IUsernameInfo>('https://rizzup.net/getInfo',
      {username:`${username}`},
      {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(map(response => response))
  }

  getLikes(user: any): Observable<IPostResponse> {
    return this._http.post<IPostResponse>('https://rizzup.net/getPosts',
      user,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(map(response => response))
  }

}
