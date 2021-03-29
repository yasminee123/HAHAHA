import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { NavbarComponent } from './components/private/shared/navbar/navbar.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { SigninComponent } from './components/public/signin/signin.component';
import { CatalogueComponent } from './components/public/article/catalogue/catalogue.component';
import { FooterComponent } from './components/private/shared/footer/footer.component';
import {HttpClientModule} from "@angular/common/http"
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListeClientComponent } from './components/public/client/liste-client/liste-client.component';
import { FicheClientComponent } from './components/public/client/fiche-client/fiche-client.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    SigninComponent,
    CatalogueComponent,
    FooterComponent,
    ListeClientComponent,
    FicheClientComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    TableModule,
    ButtonModule,
    InputTextModule,
    MultiSelectModule,
    FormsModule,
    DropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
