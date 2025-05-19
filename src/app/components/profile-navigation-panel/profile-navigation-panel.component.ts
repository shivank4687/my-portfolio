import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-profile-navigation-panel',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './profile-navigation-panel.component.html',
  styleUrl: './profile-navigation-panel.component.css'
})
export class ProfileNavigationPanelComponent {
  profile={
  description:"Hi, my name is Shiwank Sharma and I'm a Senior Software Engineer. Welcome to my personal website!"
}
}
