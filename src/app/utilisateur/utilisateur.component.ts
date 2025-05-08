import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  standalone: true,
  imports: [],
  templateUrl: './utilisateur.component.html',
  styleUrl: './utilisateur.component.css'
})
export class UtilisateurComponent {
@Input() nom: string = "";
@Output() delete = new EventEmitter<number>();

sendDelete(){
  const id = 1;
  this.delete.emit(id);
}
}
