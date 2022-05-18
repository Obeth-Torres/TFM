import { AnalistaService } from './../analista.service';
import { Analista } from './../analista';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-analista-detail',
  templateUrl: './analista-detail.component.html',
  styleUrls: ['./analista-detail.component.css']
})
export class AnalistaDetailComponent implements OnInit {

  analista: Analista | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private analistaService: AnalistaService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getAnalista();
  }
  getAnalista(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.analistaService.getAnalista(id)
      .subscribe(analista => this.analista = analista);
  }

  goBack(): void {
    this.location.back();
  }

}
