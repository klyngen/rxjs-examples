import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, map, ReplaySubject } from "rxjs";
import { ExtendedRoute } from "../models/extended-route";

@Injectable({
  providedIn: "root",
})
export class SubroutesService {
  private subrouteSubject = new BehaviorSubject<ExtendedRoute[]>([]);
  subRoutes$ = this.subrouteSubject.asObservable();
  hasSubroutes$ = this.subrouteSubject.pipe(map((routes) => routes.length > 0));

  constructor(private readonly router: Router) {}

  setSubroutes(parent: string) {
    const parentRoute = this.router.config.find(
      (route) => route.path === parent
    );
    if (parentRoute?.children) {
      const formattedRoutes = (parentRoute.children as ExtendedRoute[]).map(
        (route) => ({
          path: `${parentRoute.path};${route.path}`,
          data: route.data,
        })
      );
      this.subrouteSubject.next(formattedRoutes);
    }
  }

  clear() {
    this.subrouteSubject.next([]);
  }
}
