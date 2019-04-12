import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MPEV_CONFIG, ConfigForm, VIOLATION_DATA } from 'src/app/common';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataLoadService {

  constructor(private http: HttpClient) { }

  getMpevConfig(): Observable<any> {
    //return of(MPEV_CONFIG);
    return this.http.get('assets/mpev_config.json');
  }
  getViolationsConfig(): Observable<any> {
    //return of(VIOLATION_DATA);
    return this.http.get('assets/violation_config.json');
  }
}
