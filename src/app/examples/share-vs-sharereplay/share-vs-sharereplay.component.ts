import { Component, OnInit } from "@angular/core";
import { delay, Observable, share, shareReplay, tap } from "rxjs";
import { EmojiServiceService } from "src/app/@services/emoji-service.service";

@Component({
  selector: "app-share-vs-sharereplay",
  templateUrl: "./share-vs-sharereplay.component.html",
  styleUrls: ["./share-vs-sharereplay.component.scss"],
})
export class ShareVsSharereplayComponent implements OnInit {
  revealed = false;
  secondRevealed = false;

  emojiPure$: Observable<string>;
  emojiWithShare$: Observable<string>;
  emojiWithShareReplay$: Observable<string>;

  emojiPureDelay$: Observable<string>;
  emojiWithShareDelay$: Observable<string>;

  constructor(private readonly emojiService: EmojiServiceService) {
    this.emojiPure$ = emojiService.getEmojis(4);
    this.emojiWithShare$ = this.emojiPure$.pipe(share());
    this.emojiWithShareReplay$ = this.emojiPure$.pipe(shareReplay());

    this.emojiPureDelay$ = emojiService.getEmojis(4).pipe(delay(1000));
    this.emojiWithShareDelay$ = this.emojiPureDelay$.pipe(share());
  }

  ngOnInit(): void {}
}
