import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChooseFrameworksComponent } from './choose-frameworks/choose-frameworks.component';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SecurityAuditComponent } from './security-audit/security-audit.component';
import { GlobalComponent } from './global/global.component';
import { GlobalSideComponent } from './global-side/global-side.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChooseFrameworksComponent,
    FileUploadComponent,
    SecurityAuditComponent,
    GlobalComponent,
    GlobalSideComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
