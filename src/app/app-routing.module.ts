import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChooseFrameworksComponent} from "./choose-frameworks/choose-frameworks.component"
import { LoginComponent } from './login/login.component';
import {FileUploadComponent} from './file-upload/file-upload.component'
import {SecurityAuditComponent} from './security-audit/security-audit.component';
import {GlobalComponent} from './global/global.component';
import {GlobalSideComponent} from './global-side/global-side.component';
const routes: Routes = [
  {path:"chooseFrameworks",component : ChooseFrameworksComponent},
  {path:"login",component:LoginComponent},
  {path:"upload",component:FileUploadComponent},
  {path:"audit",component:SecurityAuditComponent},
  {path:"g",component:GlobalComponent},
  {path:"gs",component:GlobalSideComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
