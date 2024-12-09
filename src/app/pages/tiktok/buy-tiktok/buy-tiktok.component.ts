import { Component } from '@angular/core';
import {ShareModule} from "../../../shares/share.module";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-buy-tiktok',
  standalone: true,
  imports: [
    ShareModule,
    RouterOutlet
  ],
  templateUrl: './buy-tiktok.component.html',
  styleUrl: './buy-tiktok.component.scss'
})
export class BuyTiktokComponent {

}
