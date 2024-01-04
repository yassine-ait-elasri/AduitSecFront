import { Component } from '@angular/core';

// security-audit.component.ts

import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-security-audit',
  templateUrl: './security-audit.component.html',
  styleUrls: ['./security-audit.component.css']
})
export class SecurityAuditComponent {
  // Inject HttpClient in the constructor
  constructor(private http: HttpClient) {}

  onSubmit(auditFormData: any) {
    // Convert the form data to JSON
    const auditData = JSON.stringify(auditFormData);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    // Make an HTTP POST request to your backend API
    this.http.post('http://127.0.0.1:8080/api/audits', auditData, httpOptions)
      .subscribe(response => {
        window.alert('Audit project created successfully:');
        window.location.reload();
        console.log('Audit project created successfully:', response);
        // Optionally, you can reset the form after successful submission
        // this.auditForm.resetForm();
      }, error => {
        window.alert('Error creating audit project:');
        window.location.reload();
        console.error('Error creating audit project:', error);
      });
  }
}
