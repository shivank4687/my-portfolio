import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectInfoComponent } from "../project-info/project-info.component";

@Component({
  selector: 'app-portfolio',
  imports: [ProjectInfoComponent,RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
