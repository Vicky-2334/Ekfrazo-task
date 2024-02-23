import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  countries,
  courses,
  durations,
  skills,
} from "src/app/data/dropdown.data";
import { projects } from "src/app/data/project.data";
import {
  Country,
  Course,
  Duration,
  Filters,
  IFilter,
  IProjectDetail,
  IStatusCounts,
  Project,
  ProjectStatusStat,
  Skill,
} from "src/app/models/components.model";
import { BASE_CONFIG } from "src/app/utils/base-config";
import { ProjectStatus, ROUTE } from "src/app/utils/constants";
import { Utils } from "src/app/utils/utils";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {
  isWeb = BASE_CONFIG.IS_WEB;
  countries: Country[] = [];
  courses: Course[] = [];
  skills: Skill[] = [];
  durations: Duration[] = [];
  projects: IProjectDetail[] = [];
  mainProjects: IProjectDetail[] = [];

  filters: Filters = {
    country: null,
    course: null,
    duration: null,
    skill: null,
  };

  isFilterApplied = false;

  projectStatusStat: ProjectStatusStat[] = [
    {
      id: ProjectStatus.Applied,
      label: "Applied",
      count: 0,
      class: "status_applied",
      courses: [],
      icon: "checkmark-outline",
    },
    {
      id: ProjectStatus.InProgress,
      label: "In Progress",
      count: 0,
      class: "status_in_progress",
      courses: [],
      icon: "time-outline",
    },
    {
      id: ProjectStatus.Completed,
      label: "Completed",
      count: 0,
      class: "status_completed",
      courses: [],
      icon: "checkmark-done-outline",
    },
    {
      id: ProjectStatus.Cancelled,
      label: "Cancelled",
      count: 0,
      class: "status_cancelled",
      courses: [],
      icon: "close-outline",
    },
  ];

  loading = true;
  constructor(private utils: Utils, private router: Router) {}

  trackByFn(index: number, name: Project): string {
    return name.projectId;
  }

  async ngOnInit() {
    await this.utils.showLoading();

    await this.getFilters();
    this.getProjectDetails();
  }

  private async getFilters() {
    const that = this;

    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        that.countries = countries;
        that.courses = courses;
        that.skills = skills;
        that.durations = durations;
      }, 250);
      resolve();
    });
  }

  private getProjectDetails() {
    const that = this;

    setTimeout(async () => {
      const formattedProjects = that.getFormattedProjects(projects);
      that.updateProjectStatusLs(formattedProjects);
      that.projects = formattedProjects;

      that.loading = false;

      await that.utils.hideLoading();
    }, 250);
  }

  private getFormattedProjects(projects: Project[]): IProjectDetail[] {
    const projectDetails = projects.map((project) => {
      const countryName = this.countries.find(
        (coountry) => coountry.id === project.countryId
      );

      const duration = this.durations.find(
        (duration) => duration.id === project.durationId
      );

      const courses = this.courses
        .filter(({ id }) => project.courseIds.includes(id))
        .map(({ course }) => course);

      const projectDetail: IProjectDetail = {
        ...project,
        countryName: countryName?.name,
        duration: duration?.duration,
        courses,
      };

      return projectDetail;
    });

    this.mainProjects.push(...projectDetails);

    return this.filterProject(projectDetails);
  }

  private filterProject(projects: IProjectDetail[]) {
    const isFilterApplied = Object.values(this.filters).some((value) => value);

    if (!isFilterApplied) {
      return projects;
    }

    return projects.filter((project) => {
      return (
        (!this.filters.country || project.countryId === this.filters.country) &&
        (!this.filters.course ||
          project.courseIds.includes(this.filters.course)) &&
        (!this.filters.duration ||
          project.durationId === this.filters.duration) &&
        (!this.filters.skill || project.skillId === this.filters.skill)
      );
    });
  }

  async handleFilter({ ev, filterType }: IFilter) {
    await this.utils.showLoading();
    this.loading = true;
    this.isFilterApplied = true;
    this.filters[filterType] = ev;

    const projects = this.filterProject(this.mainProjects);
    this.updateProjectStatusLs(projects);
    this.projects = projects;

    this.loading = false;
    await this.utils.hideLoading();
  }

  async removeFilters() {
    await this.utils.showLoading();
    this.loading = true;

    this.filters = {
      country: null,
      course: null,
      duration: null,
      skill: null,
    };

    this.isFilterApplied = false;

    this.getProjectDetails();

    this.loading = false;
    await this.utils.hideLoading();
  }

  private updateProjectStatusLs(projects: IProjectDetail[]) {
    const statusCounts: IStatusCounts = {
      [ProjectStatus.Applied]: { count: 0, courses: [] },
      [ProjectStatus.InProgress]: { count: 0, courses: [] },
      [ProjectStatus.Completed]: { count: 0, courses: [] },
      [ProjectStatus.Cancelled]: { count: 0, courses: [] },
    };

    for (const project of projects) {
      const status = project.projectStatus;
      statusCounts[status].count++;
      statusCounts[status].courses.push(project.title);
    }

    for (const stat of this.projectStatusStat) {
      const status = stat.id;
      stat.count = statusCounts[status].count;
      stat.courses = statusCounts[status].courses;
    }
  }

  navToHome() {
    this.router.navigate([ROUTE.HOME]);
  }
}
