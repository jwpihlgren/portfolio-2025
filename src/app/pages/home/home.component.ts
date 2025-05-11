import { Component, inject, Signal } from '@angular/core';
import { HomeService, Section } from '../../shared/services/home.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgComponentOutlet],
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
