import { ɵHTTP_ROOT_INTERCEPTOR_FNS } from "@angular/common/http";
import { FilterType, ProjectStatus } from "../utils/constants";

export interface Project {
  projectId: string;
  title: string;
  courseIds: string[];
  durationId: string;
  img: string;
  countryId: string;
  skillId: string;
  projectStatus: ProjectStatus;
}

export interface IProjectDetail extends Project {
  countryName?: string;
  duration?: string;
  courses: string[];
}

export interface Country {
  id: string;
  name: string;
}

export interface Skill {
  id: string;
  skill: string;
}

export interface Duration {
  id: string;
  duration: string;
}

export interface Course {
  id: string;
  course: string;
}

export interface Filters {
  country: string | null;
  course: string | null;
  duration: string | null;
  skill: string | null;
}

export interface ProjectStatusStat {
  id: ProjectStatus;
  label: string;
  count: number;
  class: string;
  courses: string[];
  icon: string;
}

export type IStatusCounts = {
  [key in ProjectStatus]: {
    count: number;
    courses: string[];
  };
};

export interface IFilter {
  ev: string;
  filterType: FilterType;
}
