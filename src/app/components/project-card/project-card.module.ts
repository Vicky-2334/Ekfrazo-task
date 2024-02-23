import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { ProjectCardComponent } from "./project-card.component";

@NgModule({
  declarations: [ProjectCardComponent],
  exports: [ProjectCardComponent],
  imports: [SharedModule],
})
export class ProjectCardModule {}
