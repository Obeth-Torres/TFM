import { MessageService } from './message.service';
import { ANALISTAS } from './mock-analistas';
import { Analista } from './analista';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnalistaService {

  constructor(private messageService: MessageService) { }

  getAnalistas(): Observable<Analista[]> {
    const heroes = of(ANALISTAS);
    this.messageService.add('AnalistaService: fetched heroes');
    return heroes;
  }

  getAnalista(id: number): Observable<Analista> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const analista = ANALISTAS.find(h => h.id === id)!;
    this.messageService.add(`AnalistaService: fetched analista id=${id}`);
    return of(analista);
  }

}
