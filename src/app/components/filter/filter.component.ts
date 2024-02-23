import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  Country,
  Course,
  Skill,
  Duration,
  IFilter,
} from "src/app/models/components.model";
import { BASE_CONFIG } from "src/app/utils/base-config";
import { FilterType } from "src/app/utils/constants";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {
  @Input() countries: Country[] = [];
  @Input() isFilterApplied = false;
  @Input() courses: Course[] = [];
  @Input() skills: Skill[] = [];
  @Input() durations: Duration[] = [];

  @Output() onFilter = new EventEmitter<IFilter>();
  @Output() onResetFilter = new EventEmitter();

  filterType = FilterType;

  isWeb = BASE_CONFIG.IS_WEB;

  constructor() {}

  ngOnInit() {}

  handleFilter(ev: string, filterType: FilterType) {
    this.onFilter.emit({ ev, filterType });
  }

  handleResetFilter() {
    this.onResetFilter.emit();
  }
}
