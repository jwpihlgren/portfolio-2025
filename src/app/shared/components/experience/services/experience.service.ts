import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private _experiences: Experience[] = [
    productOwner,
    userExperienceDesignerVarderingsdata,
    userExperienceDesignerNexer,
    mastersThesis,
    interactionDesign,
    cognitiveScienve
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
const productOwner: Experience = {
  title: "Product Owner and designer",
  type: "job",
  workplace: "Värderingsdata AB",
  city: "Göteborg",
  country: "Sweden",
  start: { year: 2025, month: 3, day: 1 },
  description: ""
}
const userExperienceDesignerVarderingsdata: Experience = {
  title: "User Experience Designer",
  type: "job",
  workplace: "Värderingsdata AB",
  city: "Göteborg",
  country: "Sweden",
  start: {
    year: 2021, month: 10, day: 1
  },
  end: {
    year: 2025, month: 3, day: 1
  },
  description: ""
}
const userExperienceDesignerNexer: Experience = {
  title: "User Experience Designer",
  type: "job",
  workplace: "Värderingsdata AB via Nexer Group",
  city: "Göteborg",
  country: "Sweden",
  start: { year: 2020, month: 11, day: 1 },
  end: { year: 2021, month: 11, day: 1 },
  description: ""
}
const mastersThesis: Experience = {
  title: `Masterexamensarbete: Cross-Device Interaction With Meta Space
Designing Meaningful Interaction with Building Information Models across Devices`,
  type: "job",
  workplace: "Sweco, i samarbete med Chalmers Tekniska Högskola",
  city: "Göteborg",
  country: "Sweden",
  start: { year: 2020, month: 1, day: 1 },
  end: { year: 2020, month: 7, day: 1 },
  description: `Undersökte hur forskningsläget inom Cross-device Interaction kan tillämpas i bygginformationskontexten. Arbetade praktiskt med design av gränssnitt för Swecos BIM-verktyg för samarbete mellan enheter (mobil, surfplatta, desktop).
Genomförde Research Through Design och tog fram ett ramverk samt designriktlinjer för tvärenhetsinteraktion i professionella miljöer. Arbetet belyser begränsningar i befintliga interaktionstekniker och behovet av praktiskt anpassade lösningar i företagssammanhang.`
}
const interactionDesign: Experience = {
  title: "Interaktions Design, Tek.Mag.",
  type: "education",
  workplace: "Chalmers Tekniska Högskola",
  city: "Göteborg",
  country: "Sweden",
  start: { year: 2018, month: 8, day: 1 },
  end: { year: 2020, month: 7, day: 1 },
  description: `Tvåårigt program med fokus på användarcentrerad design, interaktiv teknik och prototyputveckling. Jag har arbetat med hela designprocessen — från research och konceptutveckling till prototyping och användartester — i projekt med fokus på UX, spelmekanik, fysiska gränssnitt och informationsvisualisering.
Har använt verktyg som JavaScript, Figma och Unity, och fördjupat mig i områden som mobil interaktion, gameplay design, grafiska gränssnitt och tangible interaction.`
}

const cognitiveScienve: Experience = {
  title: "Kognitionsvetenskap, Fil. Kand.",
  type: "education",
  workplace: "Värderingsdata AB",
  city: "Göteborg",
  country: "Sweden",
  start: { year: 2015, month: 8, day: 1 },
  end: { year: 2018, month: 7, day: 1 },
  description: ""
}


