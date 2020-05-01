import { EventEmitterService, EventEmitterServiceEnums, EventEmitterServiceRunner, EventEmitterServiceInterface } from 'src/app/shared/services/event-emitter/index';

export class BaseComponent {

    constructor() {
        EventEmitterService.get(EventEmitterServiceEnums.header)
            .subscribe((data: EventEmitterServiceInterface) => EventEmitterServiceRunner(data.func, data.param));
    }

    eventEmitter(parameters: EventEmitterServiceInterface) {
        EventEmitterService.get(EventEmitterServiceEnums.header).emit(parameters);
    }
}
