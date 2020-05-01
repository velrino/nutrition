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
        order:  2,
        color:  'success',
        icon:   'restaurant',
        title:  'Dieta',
        link:   '',
        show:   true,
      },
      {
        order:  3,
        color:  'primary',
        icon:   'shapes',
        title:  'Fórmulas',
        link:   '',
        show:   true,
      },
      {
        order:  1,
        color:  'tertiary',
        icon:   'document-text',
        title:  'Sobre',
        link:   '',
        show:   true,
      },
      {
        order:  4,
        color:  'secondary',
        icon:   'fitness',
        title:  'Treino',
        link:   '',
        show:   true,
      },
      {
        order:  4,
        color:  'success',
        icon:   'logo-whatsapp',
        title:  'Agende',
        link:   '',
        show:   true,
      },
      {
        order:  4,
        color:  'tertiary',
        icon:   'calendar',
        title:  'Retorno',
        link:   '',
        show:   true,
      },
      {
        order:  4,
        color:  'secondary',
        icon:   'stats-chart',
        title:  'Avaliação',
        link:   '',
        show:   true,
      },
      {
        order:  4,
        color:  'danger',
        icon:   'pricetags',
        title:  'Promoções',
        link:   '',
        show:   true,
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
