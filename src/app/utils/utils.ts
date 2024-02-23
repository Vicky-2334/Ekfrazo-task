import { Injectable } from "@angular/core";
import { LoadingController, NavController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class Utils {
  constructor(
    private loadingCtrl: LoadingController,
    private navCtrl: NavController
  ) {}

  public async showLoading() {
    const loader = await this.loadingCtrl.create({
      backdropDismiss: false,
      message: "Loading...",
    });

    await loader.present();
  }

  public async hideLoading() {
    const loader = await this.loadingCtrl.getTop();

    if (loader) {
      await loader.dismiss();
    }
  }

  scrollTop(eleId: string) {
    const ele = document.getElementById(eleId);

    if (ele) {
      ele.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }
}
