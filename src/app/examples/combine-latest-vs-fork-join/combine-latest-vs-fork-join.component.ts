import { Component, OnInit } from "@angular/core";
import {
  Observable,
  Subject,
  switchMap,
  map,
  forkJoin,
  combineLatest,
} from "rxjs";
import { EmojiServiceService } from "src/app/@services/emoji-service.service";

@Component({
  selector: "app-combine-latest-vs-fork-join",
  templateUrl: "./combine-latest-vs-fork-join.component.html",
  styleUrls: ["./combine-latest-vs-fork-join.component.scss"],
})
export class CombineLatestVsForkJoinComponent {
  trigger = new Subject();
  sourceA$: Observable<string>;
  sourceB$: Observable<string>;

  combineLatest$: Observable<string>;
  forkJoin$: Observable<string>;
  forkJoin2$: Observable<string>;

  constructor(readonly emojiService: EmojiServiceService) {
    // This observable does not complete
    this.sourceA$ = this.trigger.pipe(
      switchMap(() => this.emojiService.getEmojis(3))
    );

    // This observable completes
    this.sourceB$ = this.emojiService.getEmojis(2);

    this.combineLatest$ = combineLatest([this.sourceA$, this.sourceB$]).pipe(
      map((values) => values.join(" - "))
    );
    this.forkJoin$ = forkJoin([this.sourceA$, this.sourceB$]).pipe(
      map((values) => values.join(" - "))
    );

    this.forkJoin2$ = forkJoin([this.sourceB$, this.sourceB$]).pipe(
      map((values) => values.join(" - "))
    );
  }
}
