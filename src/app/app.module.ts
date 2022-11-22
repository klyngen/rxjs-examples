import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MarbleComponent } from "./@components/marble/marble.component";
import { ShareReplayComponent } from "./examples/share-replay/share-replay.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { CodeComponent } from "./@components/code/code.component";
import { HasChildNodesPipe } from "./@pipes/has-child-nodes.pipe";
import { ShareReplayRefcountComponent } from "./examples/share-replay-refcount/share-replay-refcount.component";
import { ShareVsSharereplayComponent } from "./examples/share-vs-sharereplay/share-vs-sharereplay.component";
import { HighlightModule, HIGHLIGHT_OPTIONS } from "ngx-highlightjs";
import { CombineLatestComponent } from "./examples/combine-latest/combine-latest.component";
import { CombineLatestVsForkJoinComponent } from "./examples/combine-latest-vs-fork-join/combine-latest-vs-fork-join.component";
import { CombineLatestVsZipComponent } from "./examples/combine-latest-vs-zip/combine-latest-vs-zip.component";
import { BasicOperatorsComponent } from "./examples/basic-operators/basic-operators.component";
import { MapComponent } from "./examples/basicOperators/map/map.component";
import { MergeMapComponent } from "./examples/basicOperators/merge-map/merge-map.component";
import { SwitchMapComponent } from "./examples/basicOperators/switch-map/switch-map.component";
import { DebounceTimeComponent } from "./examples/basicOperators/debounce-time/debounce-time.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AntipatternsComponent } from './examples/antipatterns/antipatterns.component';

@NgModule({
  declarations: [
    AppComponent,
    MarbleComponent,
    ShareReplayComponent,
    IntroductionComponent,
    CodeComponent,
    HasChildNodesPipe,
    ShareReplayRefcountComponent,
    ShareVsSharereplayComponent,
    CombineLatestComponent,
    CombineLatestVsForkJoinComponent,
    CombineLatestVsZipComponent,
    BasicOperatorsComponent,
    MapComponent,
    MergeMapComponent,
    SwitchMapComponent,
    DebounceTimeComponent,
    AntipatternsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HighlightModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import("highlight.js/lib/core"),
        languages: {
          typescript: () => import("highlight.js/lib/languages/typescript"),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
