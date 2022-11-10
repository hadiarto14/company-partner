import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PartnerListComponent } from './partner-list/partner-list.component';
import { PartnerContentComponent } from './partner-content/partner-content.component';
import { PartnerAddComponent } from './partner-add/partner-add.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhonepipePipe } from './pipe/phonepipe.pipe';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PartnerDetailComponent } from './partner-detail/partner-detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PartnerListComponent,
    PartnerContentComponent,
    PartnerAddComponent,
    ConfirmationComponent,
    PhonepipePipe,
    BreadcrumbComponent,
    PartnerDetailComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    Ng2SearchPipeModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
