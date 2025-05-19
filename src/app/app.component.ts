import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
declare let gtag: (...args: any[]) => void;
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-portfolio';
  
 
}
