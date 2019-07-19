import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { MobileService } from '../mobile.service'
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient, HttpResponse} from '@angular/common/http'
import { Employee } from  '../employee';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private mobile: MobileService) { }
  @Output() public valueChange = new EventEmitter();
  products = [];
  @Input() formStatus

  // private _data = new BehaviorSubject<Employee[]>([]);
  // // @Input() formStatus
  // @Input() 
  // set formStatus(value) {
  //   // set the latest value for _data BehaviorSubject
  //   console.log(value)
  //    this._data.next(value);
  //    this.loadData();
  // };
  // get formStatus() {
  // // get the latest value from _data BehaviorSubject
  // return this._data.getValue();
  // }
  

 

  ngOnChanges(changes: SimpleChanges){
    if(changes['formStatus'].currentValue) {
      this.loadData();
    }
  }

  loadData = function() {
  this.mobile.fetchData().subscribe(product => this.products = product)

    // this.http.get("http://localhost:5555/products").subscribe((res: HttpResponse<Employee[]>)=>{
    //   this.products = res
    // })
  }

  ngOnInit() {
    this.loadData();
  }
  updateMobile(product) {
    this.valueChange.emit(product);
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
