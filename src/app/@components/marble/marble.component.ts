import { Component, Input, OnDestroy } from "@angular/core";
import { BehaviorSubject, Observable, Subscription } from "rxjs";

type MarbleType = "error" | "success" | "complete";

interface Marble {
  type: MarbleType;
  message?: string;
}

@Component({
  selector: "app-marble",
  templateUrl: "./marble.component.html",
  styleUrls: ["./marble.component.scss"],
})
export class MarbleComponent implements OnDestroy {
  marbles = new BehaviorSubject<Marble[]>([]);

  @Input()
  title = "";

  @Input()
  revealed = true;

  @Input()
  set source(item: Observable<string>) {
    this.subscription = item.subscribe({
      next: (event) => this.makeMarble("success", event),
      error: () => this.makeMarble("error"),
      complete: () => this.makeMarble("complete"),
    });
  }

  private subscription?: Subscription;

  constructor() {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private makeMarble(type: MarbleType, message?: string) {
    if (type === "complete") {
      message = "Complete 🎉";
    }

    this.marbles.next([
      ...this.marbles.value,
      {
        type,
        message,
      },
    ]);
  }
}
