import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageRoute } from 'nativescript-angular/router';

@Component({
  selector: 'ns-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.scss']
})
export class ChallengeEditComponent implements OnInit {
    isCreating = true;

    constructor(private activatedRoutes: ActivatedRoute, private pageRoute: PageRoute){}

    ngOnInit(){
        // this.activatedRoutes.paramMap.subscribe(paramMap => {
        //     console.log(paramMap.get('mode'))
        // })
        this.pageRoute.activatedRoute.subscribe(activatedRoute => {
            activatedRoute.paramMap.subscribe(paramMap => {
                if (!paramMap.has('mode')){
                    this.isCreating = true;
                } else {
                    this.isCreating = paramMap.get('mode') !== 'edit';
                }
            });
        });
    }

}
