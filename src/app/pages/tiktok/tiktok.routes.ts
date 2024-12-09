import {Routes} from "@angular/router";
import {BuyTiktokComponent} from "./buy-tiktok/buy-tiktok.component";
import {BuyTiktokLikesComponent} from "./buy-tiktok-likes/buy-tiktok-likes.component";


export const TIKTOK_ROUTES: Routes = [
  {
    path: '',
    component: BuyTiktokComponent,
    children: [
      {
        path: 'buy-likes',
        component: BuyTiktokLikesComponent
      }
    ]
  }
];
