import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BonjourComponent } from "./bonjour/bonjour.component";
import { UtilisateurComponent } from "./utilisateur/utilisateur.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, BonjourComponent, UtilisateurComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularChallengess';
  isConnected = true;
}
