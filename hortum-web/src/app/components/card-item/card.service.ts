
 import { HttpClient } from '@angular/common/http';
 import { Injectable } from '@angular/core';
  import { MatSnackBar } from '@angular/material/snack-bar';
 import { EMPTY, Observable } from 'rxjs';
 import { catchError, map } from 'rxjs/operators';
// import { Item } from './item.model';
import { Producer } from './producer.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  baseUrl = 'http://localhost:3000/producers';

  constructor(
    private snackBar: MatSnackBar, 
    private http: HttpClient
  ) { }

  showMessage(msg:string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(producer: Producer): Observable<Producer>{
    return this.http.post<Producer>(this.baseUrl, producer).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!')
    return EMPTY
  }

  read(): Observable<Producer[]>{
    return this.http.get<Producer[]>(this.baseUrl);
  }

  readById(id: number): Observable<Producer>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Producer>(url);
  }

  update(producer: Producer): Observable<Producer>{
    const url = `${this.baseUrl}/${producer.id}`
    return this.http.put<Producer>(url, producer);
  }

  delete(id: number): Observable<Producer>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Producer>(url);
  }
}
