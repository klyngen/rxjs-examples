import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable, map, debounceTime, switchMap, mergeMap } from "rxjs";
import { EmojiServiceService } from "src/app/@services/emoji-service.service";

@Component({
  selector: "app-switch-map",
  templateUrl: "./switch-map.component.html",
  styleUrls: ["./switch-map.component.scss"],
})
export class SwitchMapComponent {
  inputControl = new FormControl("");

  source$: Observable<string>;

  constructor(emojiService: EmojiServiceService) {
    this.source$ = this.inputControl.valueChanges.pipe(
      switchMap((input) =>
        emojiService.getEmojisWithDelay(input?.length || 0, 600)
      )
    );
  }
}
