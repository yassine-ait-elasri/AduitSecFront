// file-upload.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private apiUrl = 'http://127.0.0.1:8080/api'; // Update this with your actual API endpoint

  constructor(private http: HttpClient) {}

  uploadJson(jsonData: any[]): Observable<any> {
    // Update the API endpoint in the following line
    return this.http.post(`http://127.0.0.1:8080/api/store-json`, jsonData);

  }
}
