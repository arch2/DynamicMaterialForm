import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FORM_DATA, ConfigForm } from 'src/app/common';

@Injectable({
  providedIn: 'root'
})
export class DataLoadService {

  constructor() { }

  getMpevConfig(): Observable<ConfigForm> {
    return of(FORM_DATA);
  }
  getViolationsConfig(): Observable<ConfigForm> {
    return of(FORM_DATA);
  }
}
