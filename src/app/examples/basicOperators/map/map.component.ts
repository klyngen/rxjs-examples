import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { map, Observable } from "rxjs";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"],
})
export class MapComponent {
  inputControl = new FormControl("");

  source$: Observable<string>;

  constructor() {
    this.source$ = this.inputControl.valueChanges.pipe(
      map((input) => input + " 🥒 ")
    );
  }
}
