import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MPEV_CONFIG, ConfigForm, VIOLATION_DATA } from 'src/app/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataLoadService {
  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient) { }

  getMpevConfig(): Observable<any> {
    //return of(MPEV_CONFIG);
    return this.http.get('assets/mpev_config.json');
  }
  getOpvConfig(): Observable<any> {
    return this.http.get('assets/opv_config.json');
  }
  getViolationsConfig(): Observable<any> {
    //return of(VIOLATION_DATA);
    return this.http.get('assets/violation_config.json');
  }
  submitOpvForm(SPName: string, form: any): Observable<any> {
    // const url = "http://localhost:64578/Test";
    // const url = "/Test/Tester";
    const url = "/api/StoredProcedure/Execute";
    //  environment.api_endpoint +
    // AppSettings.API_CONTROLLER_ENDPOINT +
    // AppSettings.REGISTER_CONTROLLER,
    // const formstr: string[] = new Array(JSON.stringify(form));
    // console.log(formstr);
    // const formNVP = formstr.join(",");
    // console.log(formNVP);
    return this.http.post<any>(
      url,
      { "SPName": SPName, "values": form },
      this.httpOptions);
  }
}
