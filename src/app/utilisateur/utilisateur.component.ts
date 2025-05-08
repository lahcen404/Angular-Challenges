import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  standalone: true,
  imports: [],
  templateUrl: './utilisateur.component.html',
  styleUrl: './utilisateur.component.css'
})
export class UtilisateurComponent {
@Input() nom: string = "";
}
