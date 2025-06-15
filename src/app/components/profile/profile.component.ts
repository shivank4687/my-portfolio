import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectInfoComponent } from '../project-info/project-info.component';

@Component({
  selector: 'app-profile',
  imports: [RouterLink, CommonModule, ProjectInfoComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  skills = [
    {
      name: 'Angular',
      icons: ['fa-angular'],
      description:
        'Experienced\n in building scalable, responsive web applications using Angular. Proficient in creating modular architecture with standalone components, services, and state management.',
    },
    {
      name: 'React',
      icons: ['fa-react'],
      description:
        'Familiar with building basic UI components using React. Have used it for small projects and prototyping, with a growing understanding of hooks, props, and component-based architecture.',
    },
    {
      name: 'Node.js',
      icons: ['fa-node'],
      description:
        'Skilled in developing scalable and high-performance backend systems using Node.js. Strong understanding of asynchronous programming, RESTful APIs, and microservices architecture.',
    },
    {
      name: 'Nest.js',
      icons: ['icon-nestjs'],
      description:
        'Proficient in building modular, maintainable, and scalable backend applications using NestJS. Experienced in architecture, dependency injection, decorators, and microservices WebSockets to create robust enterprise-level APIs.',
    },
    {
      name: 'Python',
      icons: ['fa-python'],
      description:
        "Experienced for backend development, automation, and data processing. proficient with Python's core features, OOP, and popular libraries like pandas, FastAPI, and SQLAlchemy.",
    },
    {
      name: 'Amazon Web Services',
      icons: ['fa-aws'],
      description:
        "I have hands-on experience with AWS services like Lambda, S3, and IAM to build secure and scalable systems. I've worked on integrating Amazon Seller Central and PPC data, used Kinesis for real-time streaming, and implemented Transcribe for audio-to-text processing.",
    },
    {
      name: 'SQL & NoSQL',
      icons: [' fa-solid fa-database'],
      description:
        'Experienced in designing and managing relational databases using PostgreSQL and MySQL, including schema design, query optimization, indexing, and migrations. Also familiar with NoSQL databases like MongoDB.',
    },
    {
      name: 'PHP & laravel',
      icons: ['fa-php', 'fa-laravel'],
      description:
        'Proficient in building web applications using Laravel. Experienced in MVC architecture, Eloquent ORM, Blade templating, and Laravel’s built-in tools for authentication, routing, and migrations.',
    },
    {
      name: 'Go (Golang)',
      icons: ['fa-golang'],
      description:
        'I have working experience with Go for building lightweight APIs and backend services. I’ve used it for writing efficient, concurrent code and appreciate its simplicity, speed, and strong typing. My experience includes setting up RESTful services and working with Go modules and standard libraries.',
    },
    {
      name: 'Docker',
      icons: ['fa-docker'],
      description:
        'I use Docker to containerize applications for consistent development and deployment across environments. I’ve set up multi-container environments using Docker Compose and optimized Dockerfiles for Node.js, Python,Nest.js and reduce deployment issues.',
    },
    {
      name: 'HTML & CSS',
      icons: ['fa-html5', 'fa-css3-alt'],
      description:
        'Capable of structuring clean, semantic HTML for modern web applications, with CSS for layout and basic styling. Typically used to support component-based frameworks and ensure accessible, well-organized markup.',
    },
    {
      name: 'Git & Gitlab',
      icons: ['fa-github', 'fa-gitlab'],
      description:
        'Capable of structuring clean, semantic HTML for modern web applications, with CSS for layout and basic styling. Typically used to support component-based frameworks and ensure accessible, well-organized markup.',
    },
  ];
}
