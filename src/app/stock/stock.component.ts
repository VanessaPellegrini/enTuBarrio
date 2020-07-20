import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { LoaderService } from '../shared/loader/loader.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit,AfterViewInit {
  title= "Sección Mis Productos";
  description = "Administra tus productos";
  currentYear = new Date().getFullYear();

  constructor(private _loaderService: LoaderService,
    private cdRef : ChangeDetectorRef) { 
    //this._loaderService.display(true);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    //this._loaderService.display(false);
    this.cdRef.detectChanges();
  }

}
