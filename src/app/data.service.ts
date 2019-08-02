import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  onClicked(){
  	return console.log('clicked form DataService');
  }

  text: string = 'Hello from service';

  getUsers(){
  	return this.http.get('https://reqres.in/api/users');
  }
}
