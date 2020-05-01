import { NgModule } from "@angular/core";

import { SortByPipe } from "src/app/shared/pipes/sort-by/sort-by.pipe";

const pipes = [SortByPipe];

@NgModule({
    declarations: pipes,
    exports: pipes
})
export class PipesModule {
    static forRoot() {
        return {
            ngModule: PipesModule,
            providers: [],
        };
    }
}