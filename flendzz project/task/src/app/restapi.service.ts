import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { spec } from './bean/spec';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  

  

  constructor(private http:HttpClient) { }

  public List() {
     return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  ListArray():Observable<spec> {
    return this.http.get<spec>("https://jsonplaceholder.typicode.com/users");
  }
}
