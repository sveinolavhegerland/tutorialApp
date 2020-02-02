import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import { ChallengeService } from '../challenge.service';

// import {}

@Component({
  selector: 'ns-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.scss']
})
export class ChallengeEditComponent implements OnInit {
    isCreating = true;

    constructor(
        private router: RouterExtensions,
        private activatedRoutes: ActivatedRoute,
        private pageRoute: PageRoute,
        private challengeService: ChallengeService){}

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

    onSubmit(title: string, description: string){
        console.log(title + " " + description)
        this.challengeService.createNewChallenge(title,description);
        this.router.backToPreviousPage();
    }

}
