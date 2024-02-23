import { NgModule } from "@angular/core";
import { FilterModule } from "src/app/components/filter/filter.module";
import { ProjectCardModule } from "src/app/components/project-card/project-card.module";
import { SharedModule } from "src/app/shared/shared.module";
import { DashboardPageRoutingModule } from "./dashboard-routing.module";
import { DashboardPage } from "./dashboard.page";

@NgModule({
  imports: [
    SharedModule,
    ProjectCardModule,
    FilterModule,
    DashboardPageRoutingModule,
  ],
  declarations: [DashboardPage],
})
export class DashboardPageModule {}
