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
  {name:"React",icons:["fa-react"],description:"Familiar with building basic UI components using React. Have used it for small projects and prototyping, with a growing understanding of hooks, props, and component-based architecture."},
  {name:"Node.js",icons:["fa-node"],description:"Skilled in developing scalable and high-performance backend systems using Node.js. Strong understanding of asynchronous programming, RESTful APIs, and microservices architecture."},
  {name:"Nest.js",icons:["icon-nestjs"],description:"Proficient in building modular, maintainable, and scalable backend applications using NestJS. Experienced in TypeScript-based architecture, dependency injection, decorators, and support for microservices WebSockets to create robust enterprise-level APIs."},
  {name:"Python",icons:["fa-python"],description:"Experienced in using Python for backend development, automation, and data processing. Proficient with Python's core features, OOP, and popular libraries like pandas, FastAPI, and SQLAlchemy. Skilled at writing clean, efficient, and maintainable code for real-world applications."},
  {name:'SQL & NoSQL',icons:[" fa-solid fa-database"],description:"Experienced in designing and managing relational databases using PostgreSQL and MySQL, including schema design, query optimization, indexing, and migrations. Also familiar with NoSQL databases like MongoDB."},
  {name:'PHP & laravel',icons:["fa-php","fa-laravel"],description:"Proficient in building web applications using Laravel. Experienced in MVC architecture, Eloquent ORM, Blade templating, and Laravel’s built-in tools for authentication, routing, and migrations."},
  {name:'HTML & CSS',icons:["fa-html5","fa-css3-alt"],description:"Capable of structuring clean, semantic HTML for modern web applications, with CSS for layout and basic styling. Typically used to support component-based frameworks and ensure accessible, well-organized markup."}

]


}
