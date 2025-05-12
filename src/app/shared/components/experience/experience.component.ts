import { Component, inject, Signal } from '@angular/core';
import { Experience, ExperienceService } from './services/experience.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  protected experienceService: ExperienceService = inject(ExperienceService)
  experiences: Signal<Experience[] | undefined>
  placeholderExperiences: string[] = new Array(6).fill("")

  constructor(){
    this.experiences = toSignal(this.experienceService.experiences)
  }
}
