import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {downloadAsPDF} from '../../utils/file.utils'
@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
resume={
  description:"Software engineer highly proficient in solving business problems. Has extensive experience working with Node.js, Nest.js, Javascript, Typescript, Angular, React, Python, AWS, PostgreSQL, Mysql , Nosql , docker. Writes concise & maintainable code for complex problems. ",
  experience:[{name:"Ergode",role:'Software Development Engineer (Fullstack)',time_period:"2022 - 2024",
              contributions:[
                "Contributed to building a SaaS product based on Amazon.",
                "Built a feature to schedule Amazon ads.",
                "Created an alert system for end users to notify them.",
                "Added state management for the frontend.",
                "Improved data processing for large datasets, making it faster and more efficient.",
                "Design and implementation of critical components and system architecture.",
                "Created a subscription feature.",
                "Primarily focused on the tech stack of Node.js, Angular, AWS, Jenkins, PostgreSQL, and Laravel.",
                "Conducted code reviews, ensuring quality standards, and managed deployment processes."
              ]},
              {name:"Visions",role:'Software Development Engineer (Fullstack)',time_period:"2020 - 2022",
              contributions:[
                "Worked on multiple client projects, developing full-stack applications using Node.js, Angular,AWS, and PostgreSQL.",
                "Developed an employee management system with real-time features using Node.js, Angular, and MySQL.",
                "Identified and resolved bugs and technical issues, ensuring high-quality deliverables.",
                "Optimized application performance and optimizing algorithms."]}
              ],
  education:[{title:"Bachelor's of Engineering in Computer Science",institute:"Chitkara University, Himachal Pradesh",time_period:"2016 - 2020"},
            {title:"Specialized in Software Development & Problem Solving",institute:"Scaler",time_period:"2024 - 2025"}
            ],
  skills:{technical:[["Javascript/Typescript"],["Angular","4+ yrs"],["React","6 mos"],["Node.js","4+ yrs"],["Nest.js","1 yr"],["Postgresql/Mysql/Nosql"],["Python","6 mos"],["Git/Gitlab"],["AWS"],["Docker"],["Event Driven Architecture"],["Lead and deliver complex software systems"],["Design and implement database structures"]],professional:["Strong problem solver","Effective communication","Team player","Good time management"]},
  languages:[['English','(Professional)'],['Hindi','(Native)']],
  interests:["Problem Solving","Automation/scripting","Trekking","Travelling"],
  projects:[
    {name:"Extreme E-commerce (SaaS)",role:"Fullstack Developer",skills:"Angular, Node, Postgresql, Laravel,microservices architecture, AWS services(advertising, seller central) and other third-party integrations."},
    {name:"Speakout",role:"Front-end Developer",skills:"Angular, web sockets, AWS transcribe service, aws s3, aws"},
    {name:"Organization management application",role:"Fullstack Developer",skills:"Angular, node, SQL,ngrx, chatbox feature, web sockets, real-time dashboards."},
    {name:'Diabetes App',role:'Front-end Developer',skills:"Angular, Graphql with Apollo client, ngrx store and state management, default modules customizations."},
    {name:"Snake Game using Data structure in C++",role:"Fullstack Developer",skills:"A console-based vintage Snake Game designed using C++ and data structures (array and linked list) with basic input and file handling features."}
    ]
}

personal_details={phone:"8679140002"}


downloadResume(content_id:string){
  downloadAsPDF(content_id,"shiwank_fullstack_developer_resume")
}
}
