import { Injectable } from "@angular/core";
import {AngularFireDatabase} from 'angularfire2/database'

@Injectable()
export  class VehicleService {

  constructor (private db: AngularFireDatabase){
  }
  
  fetchVehicles(){
    return this.db.list("/vehicles/");
  }

  addVehicle(vehicle){
    this.db.list("/vehicles/").push({
      nome: vehicle.nome,
      modelo: vehicle.modelo,
      cor: vehicle.cor,
      placa : vehicle.placa
      });
  }

  editVehicle(vehicle){
    this.db.object("/vehicles/"+vehicle.$key).update({
      nome: vehicle.nome,
      modelo: vehicle.modelo,
      cor: vehicle.cor,
      placa : vehicle.placa
      });
  }

  removeVehicle(vehicle){
    this.db.object("/vehicles/"+vehicle.$key).remove()
      .then(
        x => console.log ("VEhicle deleted successfully")
      ).
      catch( error => {
        console.log ("Could not delete vehicle");
        alert ("Could not delete vehicle")
      });
  }
}