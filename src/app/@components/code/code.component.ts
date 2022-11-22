import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-code",
  templateUrl: "./code.component.html",
  styleUrls: ["./code.component.scss"],
})
export class CodeComponent {
  @Input()
  code = "";

  constructor() {}

  ngOnInit(): void {}
}
