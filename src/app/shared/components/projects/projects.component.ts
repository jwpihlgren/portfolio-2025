import { Component, inject, Signal } from '@angular/core';
import { Project, ProjectsService } from './services/projects.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  protected projectService: ProjectsService = inject(ProjectsService)
  projects: Signal<Project[] | undefined>
  placeholderProjects: string[] = new Array(6).fill("")

  constructor(){
    this.projects = toSignal(this.projectService.projects)
  }

}



