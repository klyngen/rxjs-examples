import { Component, OnInit } from "@angular/core";
import { zip } from "rxjs";
import {
  combineLatest,
  map,
  Observable,
  Subject,
  switchMap,
  zipWith,
} from "rxjs";
import { EmojiServiceService } from "src/app/@services/emoji-service.service";

@Component({
  selector: "app-combine-latest-vs-zip",
  templateUrl: "./combine-latest-vs-zip.component.html",
  styleUrls: ["./combine-latest-vs-zip.component.scss"],
})
export class CombineLatestVsZipComponent implements OnInit {
  triggerA = new Subject();
  triggerB = new Subject();

  sourceA$: Observable<string>;
  sourceB$: Observable<string>;

  combineLatest$: Observable<string>;
  zip$: Observable<string>;

  constructor(emojiService: EmojiServiceService) {
    this.sourceA$ = this.triggerA.pipe(
      switchMap(() => emojiService.getEmojis(1))
    );
    this.sourceB$ = this.triggerB.pipe(
      switchMap(() => emojiService.getEmojis(1))
    );

    this.combineLatest$ = combineLatest([this.sourceA$, this.sourceB$]).pipe(
      map((values) => values.join(" - "))
    );
    this.zip$ = zip([this.sourceA$, this.sourceB$]).pipe(
      map((values) => values.join(" - "))
    );
  }

  ngOnInit(): void {}
}
