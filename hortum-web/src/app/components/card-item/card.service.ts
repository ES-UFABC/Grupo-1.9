
 import { HttpClient } from '@angular/common/http';
 import { Injectable } from '@angular/core';
  import { MatSnackBar } from '@angular/material/snack-bar';
 import { EMPTY, Observable } from 'rxjs';
 import { catchError, map } from 'rxjs/operators';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  baseUrl = 'http://localhost:3000/items';

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

  create(item: Item): Observable<Item>{
    return this.http.post<Item>(this.baseUrl, item).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!')
    return EMPTY
  }

  read(): Observable<Item[]>{
    return this.http.get<Item[]>(this.baseUrl);
  }

  readById(id: number): Observable<Item>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Item>(url);
  }

  update(item: Item): Observable<Item>{
    const url = `${this.baseUrl}/${item.id}`
    return this.http.put<Item>(url, item);
  }

  delete(id: number): Observable<Item>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Item>(url);
  }
}
