import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  isAdmin = false;

  loginUser(): Observable<boolean> {
    if ( this.isAdmin ) {
        this.isAdmin = false;
        return of(false).pipe(delay(0));
    } else  {
      this.isAdmin = true;
      return of(true).pipe(delay(0));
    }
  }
}
