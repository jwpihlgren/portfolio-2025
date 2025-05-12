import { Component, inject, Signal } from '@angular/core';
import { Skill, SkillsService } from './services/skills.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  protected skillsService: SkillsService = inject(SkillsService)
  skills: Signal<Skill[] | undefined>
  placeholderSkills: string[] = new Array(6).fill("")

  constructor() {
    this.skills = toSignal(this.skillsService.skills)
  }
}
