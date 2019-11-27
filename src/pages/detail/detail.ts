import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { VehicleService } from '../../app/vehicle.service';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  vehicle;
  newVehicleFlag = false;
  deleteVehicleFlag = false;

  constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public vehicleService: VehicleService,
        public alertCtrl: AlertController) {
    
    this.vehicle = this.navParams.get("vehicleParam")
    if(!this.vehicle){
      this.vehicle = {
        nome: '',
        modelo: '',
        cor: '',
        placa: ''
      }
      this.newVehicleFlag = true
    }
    console.log ("DetailPage", this.vehicle)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  ionViewWillLeave (){
    if (this.newVehicleFlag)
      if(this.vehicle.nome != "" && this.vehicle.modelo != "" &&
          this.vehicle.cor != "" && this.vehicle.placa != "")
      this.vehicleService.addVehicle(this.vehicle);
    else if (!this.deleteVehicleFlag){
      this.vehicleService.editVehicle(this.vehicle);
    }
  }

  onTrash (){
    let minhaCaixinha = this.alertCtrl.create({
      title: "Apagar?",
      message: `Quer mesmo apagar o veiculo ${this.vehicle.nome}?`,
      buttons: [
        {
          text: "Cancelar"
        },
        {
          text: "OK",
          handler: () => {
            this.deleteVehicleFlag = true;
            this.vehicleService.removeVehicle(this.vehicle)
            this.navCtrl.pop();
          }
        }
      ]
    });
    minhaCaixinha.present();    
  }

}
