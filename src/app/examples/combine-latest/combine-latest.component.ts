import { trigger } from "@angular/animations";
import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  combineLatest,
  forkJoin,
  map,
  Observable,
  Subject,
  switchMap,
} from "rxjs";
import { EmojiServiceService } from "src/app/@services/emoji-service.service";
import { SubroutesService } from "src/app/@services/subroutes.service";

@Component({
  selector: "app-combine-latest",
  templateUrl: "./combine-latest.component.html",
  styleUrls: ["./combine-latest.component.scss"],
})
export class CombineLatestComponent implements OnDestroy {
  constructor(readonly subRouterService: SubroutesService) {
    this.subRouterService.setSubroutes("combineLatest");
  }

  ngOnDestroy(): void {
    this.subRouterService.clear();
  }
}
