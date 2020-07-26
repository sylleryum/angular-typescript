import { Component, OnInit } from '@angular/core';
import {SalesPerson} from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("name1", "last1", "name@domain.com", 1000),
    new SalesPerson("name2", "last2", "name@domain.com", 2000),
    new SalesPerson("name3", "last3", "name@domain.com", 3000),
    new SalesPerson("name4", "last4", "name@domain.com", 4000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
