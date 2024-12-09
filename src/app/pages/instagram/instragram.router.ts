import {Routes} from "@angular/router";
import {BuyImstragramComponent} from "./buy-imstragram/buy-imstragram.component";
import {BuyInstagramLikesComponent} from "./buy-instagram-likes/buy-instagram-likes.component";

export const INSTRAGRAM_ROUTES: Routes = [
  {
    path: '',
    component: BuyImstragramComponent,
    children: [
      {
        path: 'buy-likes',
        component: BuyInstagramLikesComponent
      }
    ]
  }
]
