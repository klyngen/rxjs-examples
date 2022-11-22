import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { startWith } from "rxjs";
import { Observable, shareReplay, Subject, switchMap, tap } from "rxjs";
import { EmojiServiceService } from "src/app/@services/emoji-service.service";

@Component({
  selector: "app-share-replay-refcount",
  templateUrl: "./share-replay-refcount.component.html",
  styleUrls: ["./share-replay-refcount.component.scss"],
})
export class ShareReplayRefcountComponent implements OnInit {
  showMarbles = true;
  showSolution = false;
  showMarblesExample2 = true;

  emojiTrigger = new Subject();
  emoji$: Observable<string>;
  emojirefcount$: Observable<string>;

  constructor(emojiService: EmojiServiceService) {
    this.emoji$ = this.emojiTrigger.pipe(
      startWith(0),
      switchMap(() => emojiService.getEmojis(1)),
      tap((a) => console.log(a)),
      shareReplay()
    );

    this.emojirefcount$ = this.emojiTrigger.pipe(
      startWith(0),
      switchMap(() => emojiService.getEmojis(1)),
      tap((a) => console.log(a)),
      shareReplay({ refCount: true })
    );
  }

  ngOnInit(): void {}
}
