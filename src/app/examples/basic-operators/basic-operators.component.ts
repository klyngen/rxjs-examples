import { Component, OnDestroy, OnInit } from "@angular/core";
import { SubroutesService } from "src/app/@services/subroutes.service";

@Component({
  selector: "app-basic-operators",
  templateUrl: "./basic-operators.component.html",
  styleUrls: ["./basic-operators.component.scss"],
})
export class BasicOperatorsComponent implements OnDestroy {
  constructor(private subrouter: SubroutesService) {
    this.subrouter.setSubroutes("basic");
  }
  ngOnDestroy(): void {
    this.subrouter.clear();
  }
}
