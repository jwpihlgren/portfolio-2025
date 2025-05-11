import { Component, inject, Signal } from '@angular/core';
import { HomeService, Section } from '../../shared/services/home.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { TitledSectionComponent } from '../../shared/components/titled-section/titled-section.component';

@Component({
  selector: 'app-home',
  imports: [TitledSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  protected homeService: HomeService = inject(HomeService)

  sections: Signal<Section[] | undefined>

  constructor() {
    this.sections = toSignal(this.homeService.sections)
  }
}
