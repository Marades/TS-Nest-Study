import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, Observable } from 'rxjs';
import { HeroKilledDragonEvent } from '../events/impl/hero-killed-dragon.event';

@Injectable()
export class HeroesGameSagas {
  @Saga()
  dragonkilled = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(ofType(HeroKilledDragonEvent));
  };
}
