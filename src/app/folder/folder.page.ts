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
        order: 2,
        color: 'success',
        asset: '/assets/icon/diet.svg',
        title: 'Dieta',
        link: '',
        show: true,
        isIcon: false
      },
      {
        order: 3,
        color: 'primary',
        asset: 'shapes',
        title: 'Fórmulas',
        link: '',
        show: true,
        isIcon: true
      },
      {
        order: 4,
        color: 'secondary',
        asset: '/assets/icon/fitness.svg',
        title: 'Treino',
        link: '',
        show: true,
        isIcon: false
      },
      {
        order: 4,
        color: 'success',
        asset: 'logo-whatsapp',
        title: 'Agende',
        link: '',
        show: true,
        isIcon: true
      },
      {
        order: 4,
        color: 'tertiary',
        asset: 'calendar',
        title: 'Retorno',
        link: '',
        show: true,
        isIcon: true
      },
      {
        order: 4,
        color: 'secondary',
        asset: 'stats-chart',
        title: 'Avaliação',
        link: '',
        show: true,
        isIcon: true
      },
      {
        order: 4,
        color: 'danger',
        asset: 'pricetags',
        title: 'Promoções',
        link: '',
        show: true,
        isIcon: true
      },
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
