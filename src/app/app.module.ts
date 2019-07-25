//import library
import { MatFormFieldModule, MatPaginator, MatInputModule, MatPaginatorModule, MatSortModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatTabsModule, MatPaginatorIntl } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatTableModule} from '@angular/material/table';
import { library as fontLibrary } from '@fortawesome/fontawesome-svg-core';
import { faCalendar,  faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import module
import { AppRoutingModule } from './app-routing.module';
import { Screen2Module } from './screen2/screen2.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//import component
import { AppComponent } from './app.component';
import { TableRecordComponent } from './screen1/table-record/table-record.component';
import { TitlepageComponent } from './shared/titlepage/titlepage.component';
import { MenubarComponent } from './shared/menubar/menubar/menubar.component';
import { Screen1Component } from './screen1/page1/screen1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TableRecordDetailComponent } from './screen1/table-record-detail/table-record-detail.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header-component/header.component';
import { MenuitemComponent } from './shared/menubar/menuitem/menuitem.component';
import { Screen2Component } from './screen2/page2/screen2.component';
import { DateTimeComponent } from './screen2/date-time-component/date-time.component';
import { DurationComponent } from './screen2/duration-component/duration.component';
import { ImageDetailComponent } from './screen2/image-detail-component/image-detail.component';
import { ImageListComponent } from './screen2/image-list-component/image-list.component';
import { MapButtonComponent } from './screen2/map-button-component/map-button.component';
import { MapDetailComponent } from './screen2/map-detail-component/map-detail.component';
import { SearchButtonComponent } from './screen2/search-button-component/search-button.component';
import { ImageMultipleComponent } from './screen2/image-multiple-component/image-multiple.component';
import { MapDialog } from './screen2/map-button-component/map-dialog.component';
import { getPaginatorIntl } from './screen1/table-record/table-paginator-custom.component';

fontLibrary.add(
  faCalendar,
  faClock
);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TitlepageComponent,
    TableRecordComponent,
    Screen2Component,
    MenubarComponent,
    MenuitemComponent,
    Screen1Component,
    PageNotFoundComponent,
    TableRecordDetailComponent,
    DateTimeComponent,
    DurationComponent,
    ImageDetailComponent,
    ImageListComponent,
    ImageMultipleComponent,
    MapButtonComponent,
    MapDetailComponent,
    SearchButtonComponent,
    MapDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Screen2Module,
    MatTableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    Ng2SearchPipeModule,
    MatSortModule,
    MatDialogModule,
    MatDatepickerModule,        
    MatNativeDateModule,
    NgbModule,
    MatCardModule,
    MatTabsModule,
    FontAwesomeModule,
  ],
  entryComponents: [MapButtonComponent, MapDialog],
  providers: [
    { provide: MatPaginatorIntl, useValue: getPaginatorIntl() }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
