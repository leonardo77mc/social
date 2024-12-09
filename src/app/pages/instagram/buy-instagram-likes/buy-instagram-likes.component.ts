import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {InstagramService} from "../../../services/instagram.service";
import {IUsernameInfo} from "../../../interfaces";
import {map} from "rxjs";
import {faArrowRight, faFaceSmileWink} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-buy-instagram-likes',
  standalone: true,
  imports: [
    CommonModule,
    FaIconComponent
  ],
  templateUrl: './buy-instagram-likes.component.html',
  styleUrl: './buy-instagram-likes.component.scss'
})
export class BuyInstagramLikesComponent implements OnInit {

  private service: InstagramService = inject(InstagramService);

  public info?: IUsernameInfo;
  public avatarUrl!: string;

  posts = [
    { img: 'https://via.placeholder.com/150', likes: 135, description: 'Post 1' },
    { img: 'https://via.placeholder.com/150', likes: 37, description: 'Post 2' },
    { img: 'https://via.placeholder.com/150', likes: 29, description: 'Post 3' }
  ];

  ngOnInit(): void {
    // this.service.getInfo('nayerlis_orozco').subscribe(userInfo => {
    //   this.setData(userInfo);
    // });
    // this.service.getLikes({
    //   "id": 48770951997,
    //   "username": "nayerlis_orozco",
    //   "cursor":""
    // }).subscribe((data) => {
    //   console.log(data)
    // })
  }

  setData(data: IUsernameInfo) {
    console.log(data)
    this.info = data;

  const correctedAvatarUrl = this.info.avatar.replace('https//', 'https:');

  const urlParams = new URLSearchParams(correctedAvatarUrl.split('?')[1]);
  const imageUrl = decodeURIComponent(urlParams.get('url') || '');
    console.log(imageUrl)
  this.avatarUrl = imageUrl;
  }


  protected readonly faFaceSmileWink = faFaceSmileWink;
  protected readonly faArrowRight = faArrowRight;
}
