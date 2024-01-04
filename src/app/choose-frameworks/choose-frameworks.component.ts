import { Component, OnInit } from '@angular/core';
import { FrameworkServiceService } from '../framework-service.service';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './choose-frameworks.component.html',
  styleUrls: ['./choose-frameworks.component.css']
})
export class ChooseFrameworksComponent implements OnInit {
  frameworkNames: {name:string}[] = [
    { name: 'PCIDSS' },
    { name: 'ISO' },
    { name: 'COBIT' },
    { name: 'ISO 22301 2019' },
    { name: 'ISO 27001 2022' },
    { name: 'ISO 27002 2022' },
    { name: 'MITRE ATT&CK' },
    { name: 'NIST CSF v2.0' },
    { name: 'OWASP' },
    // Add more frameworks as needed

  ];
  selectedFrameworks: {name:string}[] = [];
  ngOnInit(): void {
    this.fetchFrameworkNames();
  }

  fetchFrameworkNames(): void {

    const apiUrl = 'http://localhost:8080/api/frameworks';

    this.http.get<{name:string}[]>(apiUrl).subscribe(
      data => {
        this.frameworkNames = data;
        console.log(this.frameworkNames)
      },
      error => {
        console.error('Error fetching framework names:', error);
      }
    );
  }
  constructor(private frameworkService : FrameworkServiceService,
              private http: HttpClient ){}
  standards = [
    { label: 'Standard 1', checked: false },
    { label: 'Standard 2', checked: false },
    { label: 'Standard 3', checked: false }
  ];
  frameworks!:string[];

  selectedStandards:any = [];

  toggleFrameworkSelection(frameworkName: {name:string}): void {
    const index = this.selectedFrameworks.indexOf(frameworkName);

    if (index === -1) {
      // Le framework n'est pas sélectionné, l'ajouter au tableau
      this.selectedFrameworks.push(frameworkName);
    } else {
      // Le framework est déjà sélectionné, le retirer du tableau
      this.selectedFrameworks.splice(index, 1);
    }
  }

  // your-component.component.ts
// your-component.component.ts
// your-component.component.ts
// readFile(file: File) {
//   const reader = new FileReader();

//   reader.onload = (e: any) => {
//     const data = new Uint8Array(e.target.result);
//     const workbook = XLSX.read(data, { type: 'array' });

//     // Remplacez 'NomDeLaFeuille' par le nom de la feuille que vous souhaitez accéder
//     const sheetName = 'SCF 2023.4';
//     const worksheet = workbook.Sheets[sheetName];

//     // Utilisez utils.sheet_to_json avec { header: 1 } pour obtenir un tableau de lignes
//     const excelData: any[] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

//     // Obtenez uniquement la première ligne
//     const firstRow: string[] = excelData[0] as string[];

//     // Mettez les valeurs de la première ligne dans un tableau de chaînes
//     const valuesArray: string[] = [];
//     for (const cellValue of firstRow) {
//       valuesArray.push(cellValue.toString());
//     }
//     this.frameworks=valuesArray;

//     // Faites quelque chose avec le tableau de chaînes (par exemple, log)
//     console.log(this.frameworks);
//   };

//   reader.readAsArrayBuffer(file);
// }




//   // your-component.component.ts
// onFileChange(event: any) {
//   const file = event.target.files[0];
//   this.readFile(file);
// }

}
