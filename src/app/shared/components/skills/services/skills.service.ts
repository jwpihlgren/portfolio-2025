import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private _skills: Skill[] = [
    { skill: "figma", type: "design" },
    { skill: "figjam", type: "design" },
    { skill: "design thinking", type: "design" },
    { skill: "interaction design", type: "design" },
    { skill: "user experience design", type: "design" },
    { skill: "empathy", type: "design" },
    { skill: "usability", type: "design" },
    { skill: "workshop", type: "design" },
    { skill: "prototyping", type: "design" },
    { skill: "sketching", type: "design" },
    { skill: "personas", type: "design" },
    { skill: "user story mapping", type: "design" },
    { skill: "user journeys mapping", type: "design" },
    { skill: "user flow", type: "design" },
    { skill: "task analysis", type: "design" },
    { skill: "design system", type: "design" },
    { skill: "mouseflow", type: "design" },
    { skill: "user metrics", type: "design" },
    { skill: "system usability scale (sus)", type: "design" },
    { skill: "javascript", type: "programming" },
    { skill: "typescript", type: "programming" },
    { skill: "html", type: "programming" },
    { skill: "css", type: "programming" },
    { skill: "angular", type: "programming" },
    { skill: "rxjs", type: "programming" },
    { skill: "signals", type: "programming" },
    { skill: "katalon", type: "programming" },
    { skill: "selenium", type: "programming" },
    { skill: "haskell", type: "programming" },
    { skill: "kql", type: "programming" },
    { skill: "sql", type: "programming" },
    { skill: "react", type: "programming" },
    { skill: "frontend", type: "programming" },
    { skill: "mongodb", type: "programming" },
    { skill: "azure", type: "programming" },
    { skill: "git", type: "programming" },
    { skill: "api", type: "programming" },
    { skill: "python", type: "programming" },
    { skill: "pandas", type: "programming" },
    { skill: "java", type: "programming" },
    { skill: "material design", type: "programming" },
    { skill: "android", type: "programming" },
    { skill: "chatgpt", type: "programming" },
    { skill: "ai", type: "programming" },
    { skill: "neural networks", type: "programming" },
    { skill: "llm", type: "programming" },
    { skill: "jira", type: "project" },
    { skill: "jira automation", type: "project" },
    { skill: "project planning", type: "project" },
    { skill: "user stories", type: "project" },
    { skill: "epics", type: "project" },
    { skill: "kpi", type: "project" },
    { skill: "retention", type: "project" },
    { skill: "engagement", type: "project" },
    { skill: "churn", type: "project" },
    { skill: "tco", type: "project" },
    { skill: "mvp", type: "project" },
    { skill: "scrum", type: "project" },
    { skill: "agile", type: "project" },
    { skill: "sprint", type: "project" },
    { skill: "backlog refinement", type: "project" },
    { skill: "story points", type: "project" },
    { skill: "power bi", type: "project" },
    { skill: "excel", type: "project" },
    { skill: "saas", type: "project" },
    { skill: "b2b", type: "project" },
    { skill: "enterprice", type: "project" },
    { skill: "microsoft b2c", type: "project" },
    { skill: "microsoft entra", type: "project" },
    { skill: "net promoter score (nps)", type: "project" },
    { skill: "customer satisfaction score (csat)", type: "project" },
  ]
  constructor() { }
  get skills(): Observable<Skill[]> {
    return of(this._skills)
  }
}


export interface Skill {
  skill: string
  type: "programming" | "design" | "project"
}
