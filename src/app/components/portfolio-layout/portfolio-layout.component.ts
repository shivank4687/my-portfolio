import { Component } from '@angular/core';
import { ProfileNavigationPanelComponent } from "../profile-navigation-panel/profile-navigation-panel.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-portfolio-layout',
  imports: [ProfileNavigationPanelComponent,RouterOutlet],
  templateUrl: './portfolio-layout.component.html',
  styleUrl: './portfolio-layout.component.css'
})
export class PortfolioLayoutComponent {

}
