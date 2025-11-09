// Louvado seja o Senhor

import { Component, ElementRef, inject, input, viewChild } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'sprAng-table',
  imports: [ ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  private readonly apiService = inject(ApiService);

  odometro = viewChild.required<ElementRef<HTMLTableCellElement>>("odometro");
  nivelComb = viewChild.required<ElementRef<HTMLTableCellElement>>("nivelComb");
  status = viewChild.required<ElementRef<HTMLTableCellElement>>("status");
  lat = viewChild.required<ElementRef<HTMLTableCellElement>>("lat");
  long = viewChild.required<ElementRef<HTMLTableCellElement>>("long");

  carCodeInput = viewChild.required<ElementRef<HTMLInputElement>>("carCode");

  showCarInfoViaVin(){
    const carCode = this.carCodeInput().nativeElement.value;

    this.apiService.checkVinCode(carCode)
    .subscribe({
      next: (res) => {
        this.odometro().nativeElement.textContent = res.odometro.toString();
        this.nivelComb().nativeElement.textContent = res.nivelCombustivel.toString();
        this.status().nativeElement.textContent = res.status.toString();
        this.lat().nativeElement.textContent = res.lat.toString();
        this.long().nativeElement.textContent = res.long.toString();
      },
      error: (err) => {
        console.log("Erro: ", err);
      }
    });
  }
}
