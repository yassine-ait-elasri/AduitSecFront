// file-upload.component.ts

import { Component } from '@angular/core';
import { FileUploadService } from './file-upload.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  selectedFile!: File;

  constructor(private fileUploadService: FileUploadService) {}

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }
  uploadFile() {
    if (this.selectedFile) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        const sheetNames = workbook.SheetNames;
        const jsonObjects: any[] = [];

        sheetNames.forEach(sheetName => {
          const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });
          const jsonObject = { sheetName, data: jsonData };
          jsonObjects.push(jsonObject);
        });
        console.log('JSON data:', jsonObjects); // Log JSON data in the console

        this.fileUploadService.uploadJson(jsonObjects).subscribe(
          (response) => {
            window.alert('JSON data uploaded successfully');
            window.location.reload();
            console.log('JSON data uploaded successfully', response);
          },
          (error) => {
            window.alert('Error uploading JSON data');
          //  window.location.reload();
            console.error('Error uploading JSON data', error);
          }
        );
      };

      reader.readAsArrayBuffer(this.selectedFile);
    } else {
      console.warn('No file selected');
    }
  }
/*
  uploadFile() {
    if (this.selectedFile) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        // Assuming the first sheet contains the data
        const sheetName = workbook.SheetNames[0];
        const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });

        // Now, excelData is a JSON representation of your Excel sheet
        this.fileUploadService.uploadJson(excelData).subscribe(
          (response) => {
            console.log('JSON data uploaded successfully', response);
          },
          (error) => {
            console.error('Error uploading JSON data', error);
          }
        );
      };

      reader.readAsArrayBuffer(this.selectedFile);
    } else {
      console.warn('No file selected');
    }
  }
*/
}

