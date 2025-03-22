import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import {  provideAnimations } from '@angular/platform-browser/animations'
import { BrowserModule, provideClientHydration } from '@angular/platform-browser'
import { App_Route } from './app.routes';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ToastrModule } from 'ngx-toastr';
import { ColorPickerModule } from 'ngx-color-picker';
import { FlatpickrDefaults } from 'angularx-flatpickr';
import { provideHttpClient } from '@angular/common/http';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { GALLERY_CONFIG, GalleryConfig } from 'ng-gallery';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(App_Route),provideClientHydration(),RouterOutlet,RouterModule,BrowserModule,provideAnimations(),FlatpickrDefaults,  AngularFireModule,
    AngularFireDatabaseModule,BrowserModule, {
      provide: GALLERY_CONFIG,
      useValue: {
        autoHeight: true,
        imageSize: 'cover'
      } as GalleryConfig
    },
    AngularFirestoreModule,provideHttpClient(),
    AngularFireAuthModule,provideZoneChangeDetection({ eventCoalescing: true }),
  importProvidersFrom( AngularFireModule.initializeApp(environment.firebase),ColorPickerModule,ToastrModule.forRoot({
    timeOut: 15000, // 15 seconds
    closeButton: true,
    progressBar: true,
  }),),]
};





