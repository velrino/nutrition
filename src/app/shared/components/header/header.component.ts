import { Component, Input, OnInit } from '@angular/core';

import { BaseComponent } from 'src/app/shared/components/base.components';

@Component({
    selector: 'shared-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent extends BaseComponent implements OnInit {
    public component = {
        darkMode: true
    }
    @Input('title') title: string;

    constructor() {
        super()
    }

    ngOnInit() {
        this.switchDarkMode();
    }

    switchDarkMode() {
        this.eventEmitter({ func: 'darkMode', param: this.component.darkMode });
    }
}
