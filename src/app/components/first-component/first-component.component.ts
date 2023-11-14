import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name = 'Matheus';
  lastName = 'Pacheco';
  age = 28;
  job = 'Developer'
  user = {
    name: 'Matheus',
    age: 28,
    job: 'Developer'
  }
}
