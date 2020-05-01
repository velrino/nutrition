import { EventEmitter } from "@angular/core";
import { EventEmitterServiceInterface } from './event-emitter.interface';

export class EventEmitterService {
    private static emitters: {
        [name: string]: EventEmitter<EventEmitterServiceInterface>;
    } = {};

    static get(name: string): EventEmitter<EventEmitterServiceInterface> {
        if (!this.emitters[name]) {
            this.emitters[name] = new EventEmitter<EventEmitterServiceInterface>();
        }
        return this.emitters[name];
    }
}
