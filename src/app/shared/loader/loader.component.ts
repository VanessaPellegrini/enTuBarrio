import { Component, OnInit, ChangeDetectorRef, ViewRef } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  color = 'primary';
  mode = 'indeterminate';
  diameter = 50;

  constructor() {
  }

}
