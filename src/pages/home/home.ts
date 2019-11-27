import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VehicleService } from '../../app/vehicle.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  vehicles;

  constructor(public navCtrl: NavController, public vehicleService: VehicleService) {
  }
  
  ngOnInit (){
    this.vehicles = this.vehicleService.fetchVehicles();
  }

  onCardClick (vehicle){
    this.navCtrl.push('DetailPage', {vehicleParam: vehicle})
  }

  onAddClick (){
    this.navCtrl.push ("DetailPage");
  }
}
