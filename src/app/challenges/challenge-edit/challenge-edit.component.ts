import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import { ChallengeService } from '../challenge.service';
import { take } from 'rxjs/operators';

// import {}

@Component({
  selector: 'ns-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.scss']
})
export class ChallengeEditComponent implements OnInit {
    isCreating = true;
    title = '';
    description = '';

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

                if (!this.isCreating){
                    this.challengeService.currentChallenge.pipe(take(1)).subscribe(challenge => {
                        this.title = challenge.title;
                        this.description = challenge.description;
                    });
                }
            });
        });
    }

    onSubmit(title: string, description: string){
        if(this.isCreating){
            this.challengeService.createNewChallenge(title,description);
        } else {
            this.challengeService.updateChallenge(title, description)
        }

        this.router.backToPreviousPage();
    }

}
