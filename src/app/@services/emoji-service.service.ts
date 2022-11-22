import { Injectable } from "@angular/core";
import { Observable, of, delay } from "rxjs";

const emojis = [
  "🎉",
  "🔥",
  "🐂",
  "🐛",
  "🐟",
  "🐀",
  "⛏",
  "💣",
  "⚽",
  "🏓",
  "🍄",
  "🍙",
  "🍺",
  "🍪",
  "🌮",
];

@Injectable({
  providedIn: "root",
})
export class EmojiServiceService {
  constructor() {}

  /** Creates a string of emojis */
  getEmojis(amount: number): Observable<string> {
    return new Observable<string>((subscriber) => {
      let result = "";
      for (let i = 0; i < amount; i++) {
        result += emojis[this.randomIndex()] + " ";
      }
      subscriber.next(result);
      subscriber.complete();
    });
  }

  getEmojisWithDelay(amount: number, delayTime: number) {
    return this.getEmojis(amount).pipe(delay(delayTime));
  }

  private randomIndex() {
    return Math.floor(Math.random() * emojis.length);
  }
}
