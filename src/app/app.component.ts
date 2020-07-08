import { Component } from '@angular/core';
import { LoaderService } from './shared/loader/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showLoader: boolean;
  title = 'enTuBarrio';
  constructor(private _loaderService:LoaderService){
    this._loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    })
  }
}
