import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone:true,
  imports: [],//[CommonModule,HttpClientModule,RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  // constructor(private http: HttpClient,private router:Router){}


  // submitForm(event:any){
  //   const form = event.target as HTMLFormElement;

  //   if (!form.checkValidity()) {
  //     form.reportValidity(); // show native browser tooltip errors
  //     return;
  //   }
  //   const endpoint = 'https://formspree.io/f/xeogvvog';

  //   this.http
  //       .post('/', this.formData, {
  //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //         responseType: 'text'
  //       })
  //       .subscribe({
  //         next: () => {
            
  //           this.router.navigate(['/success']); // Redirect to a success page
  //         },
  //         error: (err) => {
  //           // this.errorMsg = 'Form submission failed. Please try again.';
  //           console.error(err);
  //         }
  //       });
  // }
}
