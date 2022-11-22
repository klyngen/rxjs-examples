import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { combineLatest, forkJoin, map, Observable, of } from "rxjs";
import { tap } from "rxjs/operators";
import { SubroutesService } from "./@services/subroutes.service";
import { routes } from "./app-routing.module";
import { ExtendedRoute } from "./models/extended-route";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "rxjs-presentation";

  routes = routes as { path: string; data: { name: string } }[];

  constructor(public subrouterService: SubroutesService) {}
}
