import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TacheServiceService {

  constructor() { }
  getTaches(): string[]{
    return ['tache1','tache2','tache3']
  }
}
