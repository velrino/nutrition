import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/shared/components/base.components'
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage extends BaseComponent implements OnInit {
  public component = {
    darkMode: true
  }
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) {
    super()
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.switchDarkMode();
  }

  switchDarkMode() {
    this.eventEmitter({ func: 'darkMode', param: this.component.darkMode });
  }

}
