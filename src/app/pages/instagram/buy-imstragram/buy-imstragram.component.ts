import { Component } from '@angular/core';
import {ShareModule} from "../../../shares/share.module";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-buy-imstragram',
  standalone: true,
  imports: [
    ShareModule,
    RouterOutlet
  ],
  templateUrl: './buy-imstragram.component.html',
  styleUrl: './buy-imstragram.component.scss'
})
export class BuyImstragramComponent {

}
