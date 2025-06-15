import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-profile-navigation-panel',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './profile-navigation-panel.component.html',
  styleUrl: './profile-navigation-panel.component.css',
})
export class ProfileNavigationPanelComponent {
  profile = {
    // description:"Hi, my name is Shiwank Sharma and I'm a Full Stack Engineer. Welcome to my personal website!"
    description:
      "Hi, I'm Shiwank Sharma, a Full Stack Engineer with 4+ years of experience. Welcome to my personal website!",
  };
}
