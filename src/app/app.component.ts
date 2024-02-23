import { Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
import { BASE_CONFIG } from "./utils/base-config";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private platform: Platform) {}
  ngOnInit(): void {
    this.setCurrentPlatform();
  }

  private setCurrentPlatform() {
    if (
      this.platform.is("ios") ||
      (this.platform.is("android") &&
        !(this.platform.is("desktop") || this.platform.is("mobileweb")))
    ) {
      BASE_CONFIG.IS_WEB = false;
    } else {
      BASE_CONFIG.IS_WEB = true;
    }
  }
}
