import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule, RoutingComponents } from './folder-routing.module';
import { FolderPage } from './folder.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    PipesModule
  ],
  declarations: [FolderPage, RoutingComponents]
})
export class FolderPageModule {}
