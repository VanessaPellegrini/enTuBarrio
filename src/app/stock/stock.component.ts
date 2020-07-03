import { Component, OnInit } from '@angular/core';

//Create => push
//read => list
//update => update
//delete => remove

/*
Get a list of items
Get a single item
Create a new item
Update an existing item
Delete a single item
Delete an entire list of items

https://fireship.io/lessons/reactive-crud-app-with-angular-and-firebase-tutorial/
*/

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  title= "Sección Mis Productos";
  description = "Administra tus productos";
  currentYear = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
