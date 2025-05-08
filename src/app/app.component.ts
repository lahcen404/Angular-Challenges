import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BonjourComponent } from "./bonjour/bonjour.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BonjourComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularChallengess';
}
