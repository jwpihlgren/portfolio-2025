import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  get sections(): Observable<Section[]> {
    return of([
      { title: "Projekt", id: "projects" },
      { title: "Erfarenheter", id: "experience" },
      { title: "Kompetenser", id: "skills" },
      { title: "Om", id: "about" }
    ])
  }
}


export interface Section {
  title: string,
  id: string
}
