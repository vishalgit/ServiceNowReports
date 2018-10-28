import { Component } from '@angular/core';
import { LayoutService } from '@core/layout.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ServiceNowReports';
  isSpinnerVisible$: Observable<boolean> = this.layoutService.isNavigationPending$;
  constructor(private layoutService: LayoutService){

  }
}
