import { Component, OnInit } from "@angular/core";
import { map, Observable, Subject, tap } from "rxjs";

@Component({
  selector: "app-introduction",
  templateUrl: "./introduction.component.html",
  styleUrls: ["./introduction.component.scss"],
})
export class IntroductionComponent implements OnInit {
  showMarble = false;

  trigger = new Subject();
  example$: Observable<string>;

  constructor() {
    this.example$ = this.trigger.pipe(
      map(() => "🥒"),
      tap((a) => console.log(a))
    );
  }

  ngOnInit(): void {}
}
