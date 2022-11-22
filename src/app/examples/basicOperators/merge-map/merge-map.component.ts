import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { mergeMap, Observable } from "rxjs";
import { EmojiServiceService } from "src/app/@services/emoji-service.service";

@Component({
  selector: "app-merge-map",
  templateUrl: "./merge-map.component.html",
  styleUrls: ["./merge-map.component.scss"],
})
export class MergeMapComponent {
  inputControl = new FormControl("");

  source$: Observable<string>;

  constructor(emojiService: EmojiServiceService) {
    this.source$ = this.inputControl.valueChanges.pipe(
      mergeMap((input) =>
        emojiService.getEmojisWithDelay(input?.length || 0, 600)
      )
    );
  }
}
