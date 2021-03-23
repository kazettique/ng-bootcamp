import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Mock data
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

// Interface
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
