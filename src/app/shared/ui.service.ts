import { Injectable, ViewContainerRef } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root'})
export class UIService {
    private _drawerState = new BehaviorSubject<void>(null);
    private _rootVCREF: ViewContainerRef;

    get drawerState(){
        return this._drawerState.asObservable();
    }


    toggleDrawer(){
        this._drawerState.next(null);
    }

    setRootVCRef( vcRef: ViewContainerRef){
        this._rootVCREF = vcRef;
    }

    getRootVCRef(){
        return this._rootVCREF
    }
}
