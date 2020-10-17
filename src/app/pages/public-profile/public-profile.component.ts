import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User, UserStats } from '@shared/interfaces/interfaces';

import { UsersFacade } from '@store/users/users.facade';
import { StatsFacade } from '@app/core/ngrx/stats/stats.facade';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})

export class PublicProfileComponent implements OnInit, OnDestroy {

  user$: Observable<User>;
  stats$: Observable<UserStats>;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private userFacade: UsersFacade,
    private statsFacade: StatsFacade,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.user$ = this.userFacade.byName$;
    this.stats$ = this.statsFacade.byUserPublic$;
    this.getUserByName();
  }

  private getUserByName(): void {
    this.route.params
     .pipe(takeUntil(this.unsubscribe$))
      .subscribe(params => this.userFacade.getByName(params.name));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.userFacade.resetByName();
  }

}
