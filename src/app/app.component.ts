import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { IniciarStorageService } from './services/iniciar-storage.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'logger';
cargadatos: IniciarStorageService= inject(IniciarStorageService);

  ngOnInit(): void {

    this.cargadatos.iniciarStorage();
  }
}
