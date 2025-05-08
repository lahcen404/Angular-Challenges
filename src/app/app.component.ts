import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BonjourComponent } from "./bonjour/bonjour.component";
import { UtilisateurComponent } from "./utilisateur/utilisateur.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TacheServiceService } from './tache-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, BonjourComponent, UtilisateurComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularChallengess';
  isConnected = true;

  nom: string = "lahcen";
  email: string="lahcen.maskour@gmail.com";

 taches: string[]=[];
 constructor (private tachesService : TacheServiceService){}

 ngOnInit(){
  this.taches = this.tachesService.getTaches();
 }
}
