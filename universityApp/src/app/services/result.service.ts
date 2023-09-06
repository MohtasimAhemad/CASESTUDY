import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../models/Result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private baseUrl = 'http://localhost:9090/result'; 

  constructor(private http: HttpClient) { }

  addResult(result: Result): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/addResult`, result);
  }

  getAllResults(): Observable<Result[]> {
    return this.http.get<Result[]>("http://localhost:9090/result/allResult");
  }

  getResultBySeatNo(seatNo: string): Observable<Result> {
    return this.http.get<Result>(`http://localhost:9090/result/resultBySeatNo/${seatNo}`);
  }
  getUResultBySeatNo(seatNo: string): Observable<Result> {
    return this.http.get<Result>(`http://localhost:9090/user/getBySeatNo/${seatNo}`);
  }
}
