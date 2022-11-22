import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable, map, debounceTime } from "rxjs";

@Component({
  selector: "app-debounce-time",
  templateUrl: "./debounce-time.component.html",
  styleUrls: ["./debounce-time.component.scss"],
})
export class DebounceTimeComponent {
  inputControl = new FormControl("");

  source$: Observable<string>;

  constructor() {
    this.source$ = this.inputControl.valueChanges.pipe(
      map((input) => input + " 🥒 "),
      debounceTime(400)
    );
  }
}
