import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  }
];

export const RoutingComponents = [HeaderComponent]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
