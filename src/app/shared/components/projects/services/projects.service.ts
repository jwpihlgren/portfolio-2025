import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  private _projects: Project[] = [
    {title: "Ortspris (OP)"},
    {title: "VD Pro"},
    {title: "Sweco"},
  ]

  get projects(): Observable<Project[]> {
     return of(this._projects)
  }
}

export interface Project {
  title: string
}
