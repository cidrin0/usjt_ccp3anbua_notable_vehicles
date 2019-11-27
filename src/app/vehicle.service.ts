import { Injectable } from "@angular/core";

@Injectable()
export  class VehicleService {

  constructor (){
  }
  
  vehicles = [
    {"nome" : "carro", "modelo" : "AE12", "cor" : "preto", "placa" : "ACGF-123"},
    {"nome" : "MOTO", "modelo" : "AB1232", "cor" : "branco", "placa" : "CGDS-103"},
  ]

  addVehicle(vehicle){
    this.vehicles.push(vehicle);
  }

  editVehicle(vehicle){
    
  }

  removeVehicle(vehicle){
    let index = this.vehicles.indexOf(vehicle);
    if (index > -1){
      this.vehicles.splice(index, 1);
    }
  }
}