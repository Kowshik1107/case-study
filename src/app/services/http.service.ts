import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  JsonUrl = environment.JsonUrl;

  constructor(private http:HttpClient) { }

  getData(url: string) {
    return this.http.get(`${this.JsonUrl}${url}`);
  }
}
