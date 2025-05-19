import { Component } from '@angular/core';
import { ProjectInfoComponent } from "../project-info/project-info.component";

@Component({
  selector: 'app-portfolio',
  imports: [ProjectInfoComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
