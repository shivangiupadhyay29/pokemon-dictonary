import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";
import { Observable } from 'rxjs';
import { UsersService  } from '../service/users/users.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateCreateProduct implements CanActivate {
  constructor(private users: UsersService) {}

  canActivate(): Observable<boolean>|Promise<boolean>|boolean {
    return this.users.isAdmin ? true : false;
  }
}
