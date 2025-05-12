import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private _experiences: Experience[] = [
    { title: "Product Owner and designer", type: "job", workplace: "Värderingsdata AB", city: "Göteborg", country: "Sweden", start: { year: 2025, month: 3, day: 1 }, description: "" },
    { title: "User Experience Designer", type: "job", workplace: "Värderingsdata AB", city: "Göteborg", country: "Sweden", start: { year: 2021, month: 10, day: 1 }, end: { year: 2025, month: 3, day: 1 }, description: "" },
    { title: "User Experience Designer", type: "job", workplace: "Värderingsdata AB via Nexer Group", city: "Göteborg", country: "Sweden", start: { year: 2020, month: 11, day: 1 }, end: { year: 2021, month: 11, day: 1 }, description: "" },
    { title: "Interaktions Design, Tek. Mag.", type: "education", workplace: "Chalmers Tekniska Högskola", city: "Göteborg", country: "Sweden", start: { year: 2018, month: 8, day: 1 }, end: { year: 2020, month: 7, day: 1 }, description: "" },
    { title: "Kognitionsvetenskap, Fil. Kand.", type: "education", workplace: "Värderingsdata AB", city: "Göteborg", country: "Sweden", start: { year: 2015, month: 8, day: 1 }, end: { year: 2018, month: 7, day: 1 }, description: "" },

  ]
  constructor() { }

  get experiences(): Observable<Experience[]> {
    return of(this._experiences)
  }
}

export interface Experience {
  title: string
  workplace: string
  city: string
  country: string
  type: "education" | "job"
  start: {
    year: number
    month: number
    day: number
  },
  end?: {
    year: number
    month: number
    day: number
  },
  description: string
}
