import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";
import { Observable } from 'rxjs';
import { getProperty } from '../localstorage';


@Injectable({
  providedIn: 'root'
})
export class CanActivateProductList implements CanActivate {
  constructor() {}

  canActivate(): Observable<boolean>|Promise<boolean>|boolean {
    return  !getProperty('product_list') ? false : true;
  }
}
