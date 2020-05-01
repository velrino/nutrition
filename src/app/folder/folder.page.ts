import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseComponent } from 'src/app/shared/components/base.components';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  component = {
    menu: [
      {
        order: 1,
        color: 'warning',
        icon: 'restaurant',
        title: 'Lorem',
        link: '',
      }
    ]
  }
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  redirect(item) {
    console.log(item);
  }
}
