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

  ngOnInit() {
  }
  submitForm(formData){
    console.log("form submitted", formData);
    this.mobile.submitForm(formData).subscribe(data => {
     this.formStatus = true;
    })
  }

}
