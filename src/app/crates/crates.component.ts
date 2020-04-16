import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, NavigationStart } from '@angular/router';


import { filter } from "rxjs/operators";
import { Observable } from "rxjs"; 
import { NgForm } from '@angular/forms';
import { SharedService } from "../shared.service"





@Component({
  selector: 'app-crates',
  templateUrl: './crates.component.html',
  styleUrls: ['./crates.component.scss']
})

export class CratesComponent implements OnInit {
 
  data: any;

  

  constructor(private router: Router, private sharedData: SharedService){
    

  }
  
  ngOnInit() {
    this.sharedData.currentData.subscribe(data => this.data = data);
    
  }
  changeData() {
    this.sharedData.changeData({
      
    title: 'the man who sold the world',
    artist:'davie Bowie',
    yearReleased: '1970',
    label: 'rca victor',
    genre: 'rock',
    catalogNumber:'rca-1234',});
    this.router.navigate(['show-crates']); }

}

 // onSubmit(){
   // if(this.albumForm.valid){
     // console.log("success! Form Submitted!");
    //}this.albumForm.reset();
  //}
 // onFormSubmit(){
  //  this.isLoadingResults = true;
    //this.api.addAlbum(this.albumForm.value)
      //.subscribe ((res:any) => {
       // const id = res._id;
       // this.isLoadingResults= false;
      //  this.router.navigate(['/show-crates']);
      //}, (err: any) => {
      //  console.log (err);
      //  this.isLoadingResults = false;

     // });

//}
  




      