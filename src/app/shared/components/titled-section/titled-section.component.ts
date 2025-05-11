import { Component, input } from '@angular/core';

@Component({
  selector: 'app-titled-section',
  imports: [],
  templateUrl: './titled-section.component.html',
  styleUrl: './titled-section.component.css'
})
export class TitledSectionComponent {
  options = input.required<TitledSectionOptions>()
}

export interface TitledSectionOptions {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  title: string
}
