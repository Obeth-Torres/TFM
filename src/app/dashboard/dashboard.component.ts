import { AnalistaService } from './../analista.service';
import { Analista } from './../analista';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  analistas: Analista[] = [];

  constructor(private analistaServive: AnalistaService) { }

  ngOnInit(): void {
    this.getAnalistas();
  }

  getAnalistas(): void {
    this.analistaServive.getAnalistas()
      .subscribe(analistas => this.analistas = analistas.slice(0, 5));
  }

}
