import { AnalistaService } from './../analista.service';
import { Analista } from './../analista';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-analistas',
  templateUrl: './analistas.component.html',
  styleUrls: ['./analistas.component.css']
})
export class AnalistasComponent implements OnInit {

  analistas: Analista[] = [];

  constructor(private analistaService: AnalistaService) { }

  getAnalistas(): void {
    this.analistaService.getAnalistas()
      .subscribe(analistas => this.analistas = analistas);
  }

  ngOnInit(): void {
    this.getAnalistas();
  }

}
