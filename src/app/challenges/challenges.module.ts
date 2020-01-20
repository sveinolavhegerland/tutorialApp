// import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
// import { NativeScriptCommonModule } from 'nativescript-angular/common';
// import { ChallengesRoutingModule } from "./challenges-routing.module";
// import { ChallengeEditComponent } from "./challenge-edit/challenge-edit.component";
// import { ChallengeTabsComponent } from "./challenge-tabs/challenge-tabs.component";
// import { CurrentChallengeComponent } from "./current-challenge/current-challenge.component";
// import { TodayComponent } from "./today/today.component";
// import { SharedModule } from "../shared/shared.module";

// @NgModule({
//     declarations: [
//         ChallengeEditComponent,
//         ChallengeTabsComponent,
//         CurrentChallengeComponent,
//         TodayComponent
//     ],
//     imports: [NativeScriptCommonModule, ChallengesRoutingModule, SharedModule],
//     schemas: [
//         NO_ERRORS_SCHEMA]
// })
// export class ChallengesModule {}


import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { ChallengesRoutingModule } from './challenges-routing.module';
import { ChallengeTabsComponent } from './challenge-tabs/challenge-tabs.component';
import { CurrentChallengeComponent } from './current-challenge/current-challenge.component';
import { TodayComponent } from './today/today.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ChallengeTabsComponent,
    CurrentChallengeComponent,
    TodayComponent
  ],
  imports: [NativeScriptCommonModule, ChallengesRoutingModule, SharedModule],
  schemas: [NO_ERRORS_SCHEMA],

})
export class ChallengesModule {}
