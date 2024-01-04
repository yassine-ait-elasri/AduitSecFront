import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FrameworkServiceService {


  constructor(private http: HttpClient) { }

  public getAllFrameworks():Observable<any>{
    return this.http.get<any>('http://localhost:8080/api/frameworks')
  }
}
