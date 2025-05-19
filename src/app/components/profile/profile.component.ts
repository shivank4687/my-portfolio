import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectInfoComponent } from "../project-info/project-info.component";

@Component({
  selector: 'app-profile',
  imports: [RouterLink, CommonModule, ProjectInfoComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
skills=[
  {name:"Angular",icons:["fa-angular"],description:"Experienced\n in building scalable, responsive web applications using Angular. Proficient in creating modular architecture with standalone components, services, and state management."},
  {name:"React",icons:["fa-react"],description:"Experienced in building scalable, responsive web applications using Angular. Proficient in creating modular architecture with standalone components, services, and state management."},
  {name:"Node.js",icons:["fa-node"],description:"Experienced in building scalable, responsive web applications using Angular. Proficient in creating modular architecture with standalone components, services, and state management."},
  {name:"Nest.js",icons:["icon-nestjs"],description:"Experienced in building scalable, responsive web applications using Angular. Proficient in creating modular architecture with standalone components, services, and state management."},
  {name:"Python",icons:["fa-python"],description:"Experienced in building scalable, responsive web applications using Angular. Proficient in creating modular architecture with standalone components, services, and state management."},
  {name:'PHP & laravel',icons:["fa-php","fa-laravel"],description:"Experienced in building scalable, responsive web applications using Angular. Proficient in creating modular architecture with standalone components, services, and state management."},
  {name:'HTML & CSS',icons:["fa-html5","fa-css3-alt"],description:"Experienced in building scalable, responsive web applications using Angular. Proficient in creating modular architecture with standalone components, services, and state management."},

]
}
