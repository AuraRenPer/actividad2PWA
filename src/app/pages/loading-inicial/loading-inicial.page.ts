import { Component, Input, OnInit } from '@angular/core';
// author: Pérez Ugalde Aura Renata
@Component({
  selector: 'app-loading-inicial',
  standalone: false,
  templateUrl: './loading-inicial.page.html',
  styleUrls: ['./loading-inicial.page.scss'],
})
export class LoadingInicialPage {
  @Input() nextRoute: string = '/prueba'; // Ruta de destino
}
