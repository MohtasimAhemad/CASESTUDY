
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UniversityUser } from '../models/UniversityUser';

@Injectable({
  providedIn: 'root',
})
export class UniversityUserService {
  private baseUrl = 'http://localhost:9090/user'; 

  constructor(private http: HttpClient) {}

  getAllUniversityUsers(): Observable<UniversityUser[]> {
    return this.http.get<UniversityUser[]>(`${this.baseUrl}/allUniversityUsers`);
  }

  addNewUserProfile(user: UniversityUser): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/managementUser`, user);
  }

  getById(id: string): Observable<UniversityUser> {
    return this.http.get<UniversityUser>(`${this.baseUrl}/getById/${id}`);
  }

  getByPrn(prn: string): Observable<UniversityUser> {
    return this.http.get<UniversityUser>(`${this.baseUrl}/getByPrn/${prn}`);
  }

  getBySeatNo(seatNo: string): Observable<UniversityUser> {
    return this.http.get<UniversityUser>(`${this.baseUrl}/getBySeatNo/${seatNo}`);
  }


  addNewCandidateForUniversity(user: UniversityUser): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/addNewCandidateForUniversity`, user);
  }

  searchUserBySeatNoAndMotherName(seatNo: string, motherName: string): Observable<UniversityUser> {
    const url = `${this.baseUrl}/api/search?seatNo=${seatNo}&motherName=${motherName}`;
    return this.http.get<UniversityUser>(url);
  }
}
