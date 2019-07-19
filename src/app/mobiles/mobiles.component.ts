import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import {HttpClient, HttpResponse} from '@angular/common/http'
import { Employee } from  '../employee';
import { MobileService } from '../mobile.service'

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {

  constructor(private http: HttpClient, private mobile: MobileService) { }
  formStatus:boolean= false;
  successData:string = "Form submitted Successfully"
  product:object = {}

  ngOnInit() {
  }
  updateProduct(event) {
    this.product = Object.assign({},event);
  }
  submitForm(){
    this.formStatus = false;
    this.mobile.submitForm(this.product).subscribe(data => {
     this.formStatus = true;
     this.product = {}
    })
    // this.http.post('http://localhost:5555/products', formData).subscribe((res: HttpResponse<Employee[]>) => {
    // })
    
  }

}
