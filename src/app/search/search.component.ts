import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  company_name:string = '';
  found:boolean;
  constructor(private httpClient:HttpClient) { }

    onInputKepUp(event:any){
        //console.log(event.target.value);
        this.company_name = event.target.value;
    }
    getList(){
      
      this.httpClient.get(`https://daas-qa-sig-api.circleback.com/service/contactcloud/companies/autocomplete?company_name=${this.company_name}`)
    .subscribe(
      (data:any[]) => {
         //this.company_name = data[0].company_name;
        //this.found = true;

          console.log(data);
        
      }
    )
      
  }

  ngOnInit() {
  }

}
