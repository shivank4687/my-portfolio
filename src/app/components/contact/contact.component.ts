import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone:true,
  imports: [],//[CommonModule,FormsModule,HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  // constructor(private http: HttpClient){}
  // submitForm(event:any){
  //   const form = event.target as HTMLFormElement;

  //   if (!form.checkValidity()) {
  //     form.reportValidity(); // show native browser tooltip errors
  //     return;
  //   }
  //   const endpoint = 'https://formspree.io/f/xeogvvog';

  //   this.http.post(endpoint, this.formData,{headers:{
  //     'Accept': 'application/json'
  // }}).subscribe({
  //     next: () => {
  //       alert('Message sent successfully!');
  //       this.formData = { name: '', email: '', message: '' };
  //       form.reset();
  //     },
  //     error: () => {
  //       alert('Failed to send message. Please try again.');
  //     }
  //   });
  // }
}
