import { Component, OnInit } from '@angular/core';
import { EventEmitterService, EventEmitterServiceEnums, EventEmitterServiceRunner, EventEmitterServiceInterface } from 'src/app/shared/services/event-emitter/index';

@Component({
    selector: 'shared-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    public folder: string;

    constructor() {
        const { header } = EventEmitterServiceEnums;
        EventEmitterService.get(header).subscribe((data: EventEmitterServiceInterface) => EventEmitterServiceRunner(data.func, data.param));
    }

    ngOnInit() { }
}
