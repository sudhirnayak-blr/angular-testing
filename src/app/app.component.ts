import { Component, OnInit } from '@angular/core';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-testing';
  welcome: string; 

  constructor(public sampleService: SampleService) {
    
  }
  ngOnInit() {
    this.welcome = this.sampleService.isLoggedIn ?
      "Welcome " + this.sampleService.user.name : "Please log in.";
  }

}
