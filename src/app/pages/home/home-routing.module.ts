import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePage } from "./home.page";
import { ROUTE } from "src/app/utils/constants";

const routes: Routes = [
  {
    path: "",
    component: HomePage,
    children: [
      {
        path: ROUTE.PROJECTS,
        loadChildren: () =>
          import("./projects/projects.module").then(
            (m) => m.ProjectsPageModule
          ),
      },
      {
        path: ROUTE.ACTIVITIES,
        loadChildren: () =>
          import("./activities/activities.module").then(
            (m) => m.ActivitiesPageModule
          ),
      },
      {
        path: ROUTE.DASHBOARD,
        loadChildren: () =>
          import("./dashboard/dashboard.module").then(
            (m) => m.DashboardPageModule
          ),
      },
      {
        path: ROUTE.PROFILE,
        loadChildren: () =>
          import("../home/profile/profile.module").then(
            (m) => m.ProfilePageModule
          ),
      },
      {
        path: "**",
        redirectTo: ROUTE.DASHBOARD,
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
