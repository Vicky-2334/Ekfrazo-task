import { Component, Input, OnInit } from "@angular/core";
import { IProjectDetail } from "src/app/models/components.model";

@Component({
  selector: "app-project-card",
  templateUrl: "./project-card.component.html",
  styleUrls: ["./project-card.component.scss"],
})
export class ProjectCardComponent implements OnInit {
  @Input() projectDetail!: IProjectDetail;

  constructor() {}

  ngOnInit() {}
}
