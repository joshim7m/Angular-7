import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

title: string = 'Hello World';

users: object;


  constructor( private data: DataService) { 

  }

  ngOnInit(){
  	// load data from service
  	// this.title = this.data.text;

  	this.data.getUsers().subscribe(data =>{
  		this.users = data;
  		console.log(this.users);
  	})

  }


onClick(){
	this.data.onClicked();
}



}
