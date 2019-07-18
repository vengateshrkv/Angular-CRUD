import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service'
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient, HttpResponse} from '@angular/common/http'
import { Employee } from  '../employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private mobile: MobileService) { }

  products = [];

  loadData = function() {

    this.mobile.fetchData().subscribe(product => this.products = product)

    // this.http.get("http://localhost:5555/products").subscribe((res: HttpResponse<Employee[]>)=>{
    //   this.products = res
    // })
  }

  ngOnInit() {
    this.loadData();
  }
  deleteMobile(productId){
    this.mobile.deleteMobile(productId).subscribe(data => {
      this.loadData();
   });
    // const url = `http://localhost:5555/products/${productId}`;
    // this.http.delete(url).subscribe((res: HttpResponse<Employee[]>)=>{
    //   this.loadData();
    // })
  
  }

}
