import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AntipatternsComponent } from "./examples/antipatterns/antipatterns.component";
import { BasicOperatorsComponent } from "./examples/basic-operators/basic-operators.component";
import { DebounceTimeComponent } from "./examples/basicOperators/debounce-time/debounce-time.component";
import { MapComponent } from "./examples/basicOperators/map/map.component";
import { MergeMapComponent } from "./examples/basicOperators/merge-map/merge-map.component";
import { SwitchMapComponent } from "./examples/basicOperators/switch-map/switch-map.component";
import { CombineLatestVsForkJoinComponent } from "./examples/combine-latest-vs-fork-join/combine-latest-vs-fork-join.component";
import { CombineLatestVsZipComponent } from "./examples/combine-latest-vs-zip/combine-latest-vs-zip.component";
import { CombineLatestComponent } from "./examples/combine-latest/combine-latest.component";
import { ShareReplayRefcountComponent } from "./examples/share-replay-refcount/share-replay-refcount.component";
import { ShareReplayComponent } from "./examples/share-replay/share-replay.component";
import { ShareVsSharereplayComponent } from "./examples/share-vs-sharereplay/share-vs-sharereplay.component";
import { IntroductionComponent } from "./introduction/introduction.component";

export const routes: Routes = [
  {
    path: "",
    component: IntroductionComponent,
    data: {
      name: "Introduction",
    },
  },
  {
    path: "basic",
    component: BasicOperatorsComponent,
    data: {
      name: "Basic operators",
    },
    children: [
      {
        path: "map",
        component: MapComponent,
        data: {
          name: "map()",
        },
      },
      {
        path: "debounceTime",
        component: DebounceTimeComponent,
        data: {
          name: "debounceTime()",
        },
      },
      {
        path: "switchMap",
        component: SwitchMapComponent,
        data: {
          name: "switchMap()",
        },
      },
      {
        path: "mergeMap",
        component: MergeMapComponent,
        data: {
          name: "mergeMap()",
        },
      },
    ],
  },
  {
    path: "shareReplay",
    component: ShareReplayComponent,
    data: {
      name: "Share/ShareReplay",
    },
    children: [
      {
        path: "sharevssharereplay",
        component: ShareVsSharereplayComponent,
        data: {
          name: "Share vs ShareReplay",
        },
      },
      {
        path: "shareReplayRefcount",
        component: ShareReplayRefcountComponent,
        data: {
          name: "Refcount trap",
        },
      },
    ],
  },
  {
    path: "combineLatest",
    component: CombineLatestComponent,
    data: {
      name: "Combining stuff",
    },
    children: [
      {
        path: "combineLatestForkJoin",
        component: CombineLatestVsForkJoinComponent,
        data: {
          name: "CombineLatest vs ForkJoin",
        },
      },
      {
        path: "combineLatestZip",
        component: CombineLatestVsZipComponent,
        data: {
          name: "CombineLatest vs Zip",
        },
      },
    ],
  },
  {
    path: "antipatterns",
    component: AntipatternsComponent,
    data: {
      name: "Antipatterns",
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
