import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project1';
  users=[
    {
      name:' Name : Gayatri Suslade ',
      age:' Age   : 22',
      city:' City : Kalyan'

    },
    {
      name:'Name : Akshay  Suslade',
      age:' Age : 25',
      city:' City : Mumbai'

    },
    {
      name:'Name : Bharti Suslade',
      age:'Age : 46',
      city:'City : Ulhasnagar'

    },
    {
      name:'Name : Ravindra Suslade',
      age:'Age : 50',
      city:'City : Nashik'

    }
  ]
}
