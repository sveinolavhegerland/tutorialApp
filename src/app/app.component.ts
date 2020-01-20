import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ChangeDetectorRef, ViewContainerRef } from "@angular/core";
import { UIService } from "./shared/ui.service";
import { Subscription } from "rxjs";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy{
    @ViewChild(RadSideDrawerComponent, {static: false}) drawerComponent: RadSideDrawerComponent;
    activeChallenge = '';
    private drawerSub: Subscription;
    private drawer: RadSideDrawer;

    constructor(private uiServie: UIService, private changeDetectionRef: ChangeDetectorRef, private vcRef: ViewContainerRef){}

    ngOnInit(){
        this.drawerSub = this.uiServie.drawerState.subscribe(()=>{
            if(this.drawer){
                this.drawer.toggleDrawerState();
            }

        });
    }

    ngOnDestroy(){
        if(this.drawerSub){
            this.drawerSub.unsubscribe();
        }
        this.uiServie.setRootVCRef(this.vcRef)
    }
    ngAfterViewInit(){

        this.drawer = this.drawerComponent.sideDrawer;
        this.changeDetectionRef.detectChanges();
    }

    onChallengeInput(challengeDescription: string) {
        this.activeChallenge = challengeDescription;
        console.log('onChallengeInput: ',challengeDescription)
    }

    onLogOut(){
        this.uiServie.toggleDrawer()
    }
 }
