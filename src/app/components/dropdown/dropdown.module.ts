import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { DropdownComponent } from "./dropdown.component";

@NgModule({
  declarations: [DropdownComponent],
  exports: [DropdownComponent],
  imports: [SharedModule],
})
export class DropdownModule {}
