import {Component, signal} from '@angular/core';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {
  faArrowRight,
  faBolt,
  faCamera,
  faUsers,
  faCalculator,
  faFire,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import {MatExpansionModule} from "@angular/material/expansion";
import {ShareModule} from "../../shares/share.module";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [FontAwesomeModule, MatExpansionModule, ShareModule],
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public faBolt = faBolt;
  public faArrowRight = faArrowRight;
  public faCamera = faCamera;
  public faUsers = faUsers;
  public faCalculator = faCalculator;
  public faFire = faFire;
  public faCheck = faCheck;

  public readonly panelOpenState = signal(false);

}
