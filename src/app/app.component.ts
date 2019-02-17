import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./topLevelCSS/app.component.scss', './topLevelCSS/app.mobile.component.scss', './topLevelCSS/app.animations.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

	open:boolean = false;

  close() {
    this.sidenav.close();
  }

}
