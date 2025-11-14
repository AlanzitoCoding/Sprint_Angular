// Louvado seja o Senhor

import { afterRender, Component, ElementRef, inject, viewChild } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { CarDataCardComponent } from "./car-data-card/car-data-card.component";
import { ApiService } from '../../services/api.service';
import { Veiculos } from '../../models/veiculo.model';
import { tap } from 'rxjs';
import { TableComponent } from "./table/table.component";

@Component({
  selector: 'sprAng-dashboard',
  imports: [HeaderComponent, CarDataCardComponent, TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public vehicles : Veiculos = [];
  private readonly apiService = inject(ApiService);

  carSelect = viewChild.required<ElementRef<HTMLSelectElement>>("carSelect");
  carSellInfo = viewChild.required<ElementRef<HTMLElement>>("carSellInfo");
  carConnInfo = viewChild.required<ElementRef<HTMLElement>>("carConnInfo");
  carSoftUpdInfo = viewChild.required<ElementRef<HTMLElement>>("carSoftUpdInfo");
  carImg = viewChild.required<ElementRef<HTMLImageElement>>("carImg");

  public ngOnInit() : void{
    this.apiService
    .getVehicles()
    .pipe(tap((vehicles : Veiculos) => (this.vehicles = vehicles)))
    .subscribe();
  }
  
  checkLogin(){
    // if()
  }

  showCarInfo(){
    const carID : number = Number(this.carSelect().nativeElement.value);

    this.vehicles.filter((vehicle) => {
      if(vehicle.id === carID){
        this.carSellInfo().nativeElement.innerHTML = vehicle.volumetotal.toString();
        this.carConnInfo().nativeElement.innerHTML = vehicle.connected.toString();
        this.carSoftUpdInfo().nativeElement.innerHTML = vehicle.softwareUpdates.toString();
        this.carImg().nativeElement.src = vehicle.img;
      }
    });
  }
  
  constructor(){    
    afterRender(() => {
      this.showCarInfo();
    })
  }
}
