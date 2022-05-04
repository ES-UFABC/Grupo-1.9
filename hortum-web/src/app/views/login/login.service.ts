import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = 'http://localhost:3000/account';

  constructor(
    private snackBar: MatSnackBar, private http: HttpClient
  ) { }

  showMessage(msg:string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }
  
  getAccount(): Observable<User>{
    const url = `${this.baseUrl}`
    return this.http.get<User>(url);
  }

  newAccount(user: User): Observable<User>{
    return this.http.post<User>(this.baseUrl, user).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }
  errorHandler(e: any): any {
    throw new Error('Method not implemented.');
  }
}
