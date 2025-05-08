import { Component } from '@angular/core';
import { UtilisateurComponent } from "../utilisateur/utilisateur.component";

@Component({
  selector: 'app-bonjour',
  standalone: true,
  imports: [UtilisateurComponent],
  templateUrl: './bonjour.component.html',
  styleUrl: './bonjour.component.css'
})
export class BonjourComponent {
parent: string = "Lahcen Parent"
}
