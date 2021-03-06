import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwPaginationModule } from 'jw-angular-pagination';
import { HeaderComponent } from './View/header/header.component';
import { MainComponent } from './View/main/main.component';
import { VideoPageComponent } from './View/video-page/video-page.component';
import { SearchPageComponent } from './View/search-page/search-page.component';
import { SearchResultsComponent } from './View/search-results/search-results.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MainComponent, VideoPageComponent, SearchPageComponent, SearchResultsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSidenavModule,
    MatIconModule,
    MatGridListModule,
    ReactiveFormsModule,
    NgbModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSelectModule,
    JwPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
