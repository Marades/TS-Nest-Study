import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { HeroKilledDragonEvent } from 'src/heros-game/events/impl/hero-killed-dragon.event';

@EventsHandler(HeroKilledDragonEvent)
export class HeroKilledDragonHandler
  implements IEventHandler<HeroKilledDragonEvent>
{
  handle(event: HeroKilledDragonEvent) {
    console.log('event handler');
    console.log(`hero ${event.heroId} killed dragon ${event.dragonId}`);
  }
}
