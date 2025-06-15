import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { downloadAsPDF } from '../../utils/file.utils';
@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  resume = {
    name: 'Shiwank Sharma',
    title: 'Full Stack Engineer',
    phone_number: '8679140002',
    email: 'sharmashivank845@gmail.com',
    address: 'Chandigarh, India',
    // description:"Software engineer highly proficient in solving business problems. Has extensive experience working with Node.js, Nest.js, Javascript, Typescript, Angular, React, Python, AWS, PostgreSQL, Mysql , Nosql , docker. Writes concise & maintainable code for complex problems. ",
    description: `Software Engineer with 4+ years of experience in designing and building scalable, high-performance applications. Highly proficient in solving real-world business problems through clean and efficient code. Skilled in backend and frontend development using technologies like Node.js, NestJS, JavaScript, TypeScript, Angular, React, and Python. Experienced in working with cloud platforms like AWS and managing databases such as PostgreSQL, MySQL, and NoSQL systems. Well-versed in containerization and deployment using Docker. Known for writing concise, maintainable, and production-ready code to tackle complex technical challenges.`,
    experience: [
      {
        name: 'Ergode',
        role: 'Software Development Engineer (Fullstack)',
        time_period: '2022 - 2024',
        contributions: [
          'Contributed to building a SaaS product based on Amazon.',
          'Built a feature to schedule Amazon ads.',
          'Created an alert system for end users to notify them.',
          'Added state management for the frontend.',
          'Improved data processing for large datasets, making it faster and more efficient.',
          'Design and implementation of critical components and system architecture.',
          'Created a subscription feature.',
          'Primarily focused on the tech stack of Node.js, Angular, AWS, Jenkins, PostgreSQL, and Laravel.',
          'Conducted code reviews, ensuring quality standards, and managed deployment processes.',
        ],
      },
      {
        name: 'Visions',
        role: 'Software Development Engineer (Fullstack)',
        time_period: '2020 - 2022',
        contributions: [
          'Developed web application using .NET and MySQL, including building admin panels for internal tools.',
          'Created a Admin panel in Angular and Node.js, including RESTful APIs, GraphQL integration, and complex MySQL queries.',
          'Contributed to client projects by completing tasks in Angular, React, Node.js, Laravel, PHP and Python.',
          'Engaged in requirement analysis and R&D to explore technical solutions.',
          'Customized existing modules and implemented new features based on client-specific workflows and business logic.',
          'Integrated Google Maps APIs into client platforms for location-based features.',
          'Created a real-time organization management system using Angular, Node.js, WebSockets, and NGRX Store.',
          'Developed the frontend for a SaaS-based project management platform using Angular.',
          'Implemented advanced video features—streaming, webrtc, transcription, recording, and analytics using Angular and AWS services.',
          'Engaged in requirement analysis and R&D to explore technical solutions.',
          'Diagnosed and resolved production issues and implemented optimization techniques to improve system performance.',
          'Participated in code reviews and handled deployment tasks for various projects.',
        ],
      },
    ],
    education: [
      {
        title: "Bachelor's of Engineering in Computer Science",
        institute: 'Chitkara University, Himachal Pradesh',
        time_period: '2016 - 2020',
      },
      {
        title: 'Specialized in Software Development & Problem Solving',
        institute: 'Scaler',
        time_period: '2024 - 2025',
      },
    ],
    skills: {
      technical: [
        ['Javascript/Typescript'],
        ['Angular', '4+ yrs'],
        ['React', '6 mos'],
        ['Node.js', '4+ yrs'],
        ['Nest.js', '1 yr'],
        ['Postgresql/Mysql/Nosql'],
        ['Python', '6 mos'],
        ['Git/Gitlab'],
        ['AWS'],
        ['Docker'],
        ['Debugging'],
        ['Event Driven Architecture'],
        ['Lead and deliver complex software systems'],
        ['Design and implement database structures'],
      ],
      professional: [
        'Strong problem solver',
        'Effective communication',
        'Team player',
        'Good time management',
      ],
    },
    languages: [
      ['English', '(Professional)'],
      ['Hindi', '(Native)'],
    ],
    interests: [
      'Problem Solving',
      'Automation/scripting',
      'Trekking',
      'Travelling',
    ],
    projects: [
      {
        name: 'Extreme E-commerce (SaaS)',
        role: 'Full Stack Engineer',
        skills:
          'Angular, Node, Postgresql, Laravel,microservices architecture, AWS services(advertising, seller central) and other third-party integrations.',
      },
      {
        name: 'Speakout',
        role: 'Front-end Developer',
        skills:
          'Angular, web sockets, AWS transcribe service, aws s3, aws kinesis video streaming, webrtc, video library integration etc.',
      },
      {
        name: 'Organization management application',
        role: 'Full Stack Engineer',
        skills:
          'Angular, node, SQL,ngrx, chatbox feature, web sockets, real-time dashboards.',
      },
      {
        name: 'Diabetes App',
        role: 'Front-end Developer',
        skills:
          'Angular, Graphql with Apollo client, ngrx store and state management, default modules customizations.',
      },
      {
        name: 'Snake Game using Data structure in C++',
        role: 'Full Stack Engineer',
        skills:
          'A console-based vintage Snake Game designed using C++ and data structures (array and linked list) with basic input and file handling features.',
      },
    ],
  };

  personal_details = { phone: '8679140002' };

  downloadResume(content_id: string) {
    downloadAsPDF(content_id, 'shiwank_fullstack_developer_resume');
  }
}
