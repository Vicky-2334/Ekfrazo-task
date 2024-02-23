import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { MenuItem } from "../../models/home.model";
import { MenuId, ROUTE } from "../../utils/constants";
import { BASE_CONFIG } from "src/app/utils/base-config";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  isWeb = BASE_CONFIG.IS_WEB;

  menuItems: MenuItem[] = [
    {
      id: MenuId.HOME,
      icon: "assets/svg/menu_home.svg",
      isActive: false,
      name: "Home",
      redirect: ROUTE.DASHBOARD,
    },
    {
      id: MenuId.ACTIVITIES,
      icon: "assets/svg/menu_activities.svg",
      isActive: false,
      name: "Activities",
      redirect: ROUTE.ACTIVITIES,
    },
    {
      id: MenuId.PROJECTS,
      icon: "assets/svg/menu_projects.svg",
      isActive: false,
      name: "Projects",
      redirect: ROUTE.PROJECTS,
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.onRouteChange();
  }

  handleMenuClick(redirectTo: ROUTE) {
    this.router.navigate([redirectTo]);
  }

  navToHome() {
    this.router.navigate([ROUTE.HOME]);
  }

  navToProfile() {
    this.router.navigate([ROUTE.PROFILE]);
  }

  private onRouteChange() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currUrl = event.url.split("?")[0];

        this.menuItems.forEach((menu) => {
          if ("/" + menu.redirect === currUrl) {
            menu.isActive = true;
          } else {
            menu.isActive = false;
          }
        });
      }
    });
  }
}
