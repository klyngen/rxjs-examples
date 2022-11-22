import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SubroutesService } from "src/app/@services/subroutes.service";

@Component({
  selector: "app-share-replay",
  templateUrl: "./share-replay.component.html",
  styleUrls: ["./share-replay.component.scss"],
})
export class ShareReplayComponent implements OnDestroy {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly subroutesService: SubroutesService
  ) {
    this.subroutesService.setSubroutes(activatedRoute.snapshot.url[0].path);
  }
  ngOnDestroy(): void {
    this.subroutesService.clear();
  }
}
