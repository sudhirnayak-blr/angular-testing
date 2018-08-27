import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  numbers: string[]; 
  isLoggedIn = true; 
  user = { name: "Test User" };
  
  constructor() { 
    this.numbers = []; 
  }

  getAll() {
    return this.numbers;
  }
  insert(word: string) {
    this.numbers.push(word);
  }
  remove(word: string) {
    this.numbers.splice(this.numbers.indexOf(word), 1);  
  }

}
