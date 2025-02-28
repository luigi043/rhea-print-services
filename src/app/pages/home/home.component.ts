import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // Declare any properties or methods here

  // Example of a property
  contact = {
    name: '',
    email: '',
    message: ''
  };

  // Example of a method
  onSubmit() {
    console.log('Form submitted', this.contact);
  }
}
