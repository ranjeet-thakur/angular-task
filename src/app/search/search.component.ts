import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent  {
  company_name:string = '';
  results:any=[];
  found:boolean;
  constructor(private HttpClient:HttpClient) { }

    onInputKepUp(event:any){
        //console.log(event.target.value);
        this.company_name = event.target.value;
    }
    getList(){
      //console.log(this.company_name);
      this.HttpClient.get(`https://daas-qa-sig-api.circleback.com/service/contactcloud/companies/autocomplete?company_name=${this.company_name}`)
        .subscribe(
          (data:any) => {
            if(data){
              this.results = data.searchResults;
              console.log(this.results);
            }
          }
        )
  }

}
