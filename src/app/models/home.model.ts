import { ROUTE, MenuId } from "../utils/constants";

export interface MenuItem {
  id: MenuId;
  name: string;
  icon: string;
  redirect: ROUTE;
  isActive: boolean;
}
