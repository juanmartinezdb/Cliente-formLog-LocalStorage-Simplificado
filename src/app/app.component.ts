import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'logger';
}
