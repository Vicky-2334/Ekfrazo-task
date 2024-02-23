import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { DropdownModule } from "../dropdown/dropdown.module";
import { FilterComponent } from "./filter.component";

@NgModule({
  declarations: [FilterComponent],
  exports: [FilterComponent],
  imports: [SharedModule, DropdownModule],
})
export class FilterModule {}
