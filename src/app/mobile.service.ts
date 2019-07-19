import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http'
import { Employee } from  './employee';
// import { tap, catchError, map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private http: HttpClient) { }

  fetchData() {
    return this.http.get("http://localhost:5555/products");
    // return this.http.get("http://localhost:5555/products").pipe(
    //   tap(data => console.log(data))
    // )
  }

  submitForm(formData){
    console.log(formData)
    if(formData.id) {
      const url = `http://localhost:5555/products/${formData.id}`;
      return this.http.put(url, formData);
    } else {
      return this.http.post('http://localhost:5555/products', formData);
    }
    // this.http.post('http://localhost:5555/products', formData).subscribe((res: HttpResponse<Employee[]>) => {
    // })
  }
  deleteMobile(productId) {
    const url = `http://localhost:5555/products/${productId}`;
    return this.http.delete(url)
  }
}
