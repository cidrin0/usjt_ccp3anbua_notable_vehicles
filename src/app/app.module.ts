import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VehicleService } from './vehicle.service';

import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule}  from 'angularfire2/database'

export const firebaseConfig = {
  apiKey: "AIzaSyCjr6lIhgVj8L_F4jUnCq0G2wdDdZqfgQM",
    authDomain: "usjt-project-notable-vehicles.firebaseapp.com",
    databaseURL: "https://usjt-project-notable-vehicles.firebaseio.com",
    projectId: "usjt-project-notable-vehicles",
    storageBucket: "usjt-project-notable-vehicles.appspot.com",
    messagingSenderId: "637207667672",
    appId: "1:637207667672:web:860eb94bd11ea87562c8ad",
    measurementId: "G-R5JHDSGCM4"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    VehicleService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
