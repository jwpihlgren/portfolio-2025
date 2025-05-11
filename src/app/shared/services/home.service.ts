import { Component, ComponentRef, Injectable, Type } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExperienceComponent } from '../components/experience/experience.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { AboutComponent } from '../components/about/about.component';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  get sections(): Observable<Section[]> {
    return of([
      { title: "Projekt", id: "projects", component: ProjectsComponent  },
      { title: "Erfarenheter", id: "experience", component: ExperienceComponent },
      { title: "Kompetenser", id: "skills", component: SkillsComponent },
      { title: "Om", id: "about", component: AboutComponent }
    ])
  }
}


export interface Section {
  title: string,
  id: string,
  component: Type<any>
}
