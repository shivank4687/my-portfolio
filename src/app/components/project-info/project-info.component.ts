import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project-info',
  imports: [CommonModule],
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.css'
})
export class ProjectInfoComponent {
projects=[
  {name:"Extreme E-commerce (SaaS)",role:"Fullstack Developer",skills:"Angular, Node, Postgresql, Laravel,microservices architecture, AWS services(advertising, seller central) and other third-party integrations."},
  {name:"Speaout",role:"Front-end Developer",skills:"Angular, web sockets, AWS transcribe service, aws s3, aws"},
  {name:"Organization management application",role:"Fullstack Developer",skills:"Angular, node, SQL,ngrx, chatbox feature, web sockets, real-time dashboards."},
  {name:'Diabetes App',role:'Front-end Developer',skills:"Angular, Graphql with Apollo client, ngrx store and state management, default modules customizations."},
  {name:"Snake Game using Data structure in C++",role:"Fullstack Developer",skills:"A console-based vintage Snake Game designed using C++ and data structures (array and linked list) with basic input and file handling features."}
  ]
}
