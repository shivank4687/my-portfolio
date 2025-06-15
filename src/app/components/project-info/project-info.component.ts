import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-info',
  imports: [CommonModule],
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.css',
})
export class ProjectInfoComponent implements OnInit {
  @Input() limited = false;
  projects = [
    {
      name: 'Stock Analysis & Prediction (Independently Built)',
      role: 'Full Stack Developer',
      skills:
        'Python, Nestjs, Angular, TypeScript, Dynamic Charts, Postgresql, NumPy, Scikit-learn, TensorFlow, Keras, LSTM, Time Series Analysis, Technical Indicators, Alpha Vantage API, Yahoo Finance API, Data Preprocessing, Feature Engineering, Model Training, REST APIs, JSON, Seaborn, CLI Tools, Automation, Error Handling',
    },
    {
      name: 'Content Creator (Independently Built)',
      role: 'Full Stack Developer',
      skills:
        'Python, OpenCV, MoviePy, FFmpeg, Text-to-Speech,REST APIs, AI services (openai, gemini, murf, elevenlabs,fireworker), video/audio processing using tools like OpenCV, MoviePy, FFmpeg, Also enabled seamless content publishing by integrating Google and Meta APIs for direct upload and platform automation.',
    },
    {
      name: 'Extreme E-commerce (SaaS)',
      role: 'Full Stack Engineer',
      skills:
        'Angular, Node, Postgresql, Laravel,microservices architecture, Git & Gilab ,AWS services(advertising, seller central) and other third-party integrations.',
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
  ];

  ngOnInit() {
    if (this.limited) {
      this.projects.length = 4;
    }
  }
}
