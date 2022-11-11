import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'tp_social';

  @ViewChild('sidenav') matSidenav: MatSidenav | undefined;
  constructor() {
  }
}
