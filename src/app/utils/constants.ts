export enum MenuId {
  HOME = "home",
  ACTIVITIES = "activities",
  PROJECTS = "projects",
}

export class ROUTE {
  static readonly HOME = "";
  static readonly DASHBOARD = "dashboard";
  static readonly PROJECTS = "projects";
  static readonly ACTIVITIES = "activities";
  static readonly PROFILE = "profile";
}

export enum ProjectStatus {
  Applied = 1,
  InProgress,
  Completed,
  Cancelled,
}

export enum FilterType {
  Skill = "skill",
  Course = "course",
  Duration = "duration",
  Country = "country",
}
