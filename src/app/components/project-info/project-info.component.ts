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
  {name:"Extreme E-commerce (SaaS)",role:"Full Stack Engineer",skills:"Angular, Node, Postgresql, Laravel,microservices architecture, AWS services(advertising, seller central) and other third-party integrations."},
  {name:"Speakout",role:"Front-end Developer",skills:"Angular, web sockets, AWS transcribe service, aws s3, aws kinesis video streaming, webrtc, video library integration etc."},
  {name:"Organization management application",role:"Full Stack Engineer",skills:"Angular, node, SQL,ngrx, chatbox feature, web sockets, real-time dashboards."},
  {name:'Diabetes App',role:'Front-end Developer',skills:"Angular, Graphql with Apollo client, ngrx store and state management, default modules customizations."},
  {name:"Snake Game using Data structure in C++",role:"Full Stack Engineer",skills:"A console-based vintage Snake Game designed using C++ and data structures (array and linked list) with basic input and file handling features."}
  ]
}
