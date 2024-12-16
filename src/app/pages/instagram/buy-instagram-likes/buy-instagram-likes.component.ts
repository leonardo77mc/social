import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {InstagramService} from "../../../services/instagram.service";
import {IPost, IUsernameInfo} from "../../../interfaces";
import {faArrowRight, faFaceSmileWink, faHeart, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {LoadingComponent} from "../../../shares/loading/loading.component";
import {MatDialog} from "@angular/material/dialog";
import {DialogInfoComponent} from "../../../shares/dialog-info/dialog-info.component";

@Component({
  selector: 'app-buy-instagram-likes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    FaIconComponent,
    ReactiveFormsModule,
    LoadingComponent
  ],
  templateUrl: './buy-instagram-likes.component.html',
  styleUrl: './buy-instagram-likes.component.scss'
})
export class BuyInstagramLikesComponent implements OnInit {

  public form!: FormGroup;

  readonly dialog = inject(MatDialog);
  private service: InstagramService = inject(InstagramService);

  public info?: IUsernameInfo;
  public avatarUrl: string ='https://img.freepik.com/psd-gratis/logotipo-aplicacion-instagram_23-2151544104.jpg?t=st=1734268994~exp=1734272594~hmac=754287724fc7b7e3847af77e5f14b4b592113863ba342aa4dae8103a7c79ce94&w=1380';

  public posts: IPost[] = [];

  public seeLikes: boolean = false;
  public showLoading: boolean = false;

  public likes80: boolean = false;
  public likes500: boolean = false;
  public likes1200: boolean = false;
  public likes2500: boolean = false;
  public likes6000: boolean = false;
  public likes14000: boolean = false;

  private readonly _fb: FormBuilder = inject(FormBuilder);

  protected readonly faFaceSmileWink = faFaceSmileWink;
  protected readonly faHeart = faHeart;
  protected readonly faUserCircle = faUserCircle;
  protected readonly faArrowRight = faArrowRight;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this._fb.group({
      quantityLikes: ['', [Validators.required]],
      username: ['', [Validators.required]],
      post: [''],
    });
  }

  setData(data: IUsernameInfo) {
    this.info = data;
    //const correctedAvatarUrl = this.info.avatar.replace('https//', 'https:');

    // const urlParams = new URLSearchParams(correctedAvatarUrl.split('?')[1]);
    // const imageUrl = ''
    // this.avatarUrl = imageUrl;
    this.service.getLikes({
      "id": this.info.id,
      "username": this.info.username,
      "cursor": this.info.cursor
    }).subscribe((data) => {
      this.posts = data?.posts;
      if (this.posts.length > 0) {
        this.loadSelected();
        this.showLoading = false;
        this.seeLikes = true;
      }
    })
  }

  loadSelected(post?: IPost) {
    for (let item of this.posts) {
      item['selected'] = false;
      if (post) {
        if (item.shortcode === post.shortcode) {
          item['selected'] = true;
        }
      }
    }
  }

  search() {
    if (this.form.valid) {
      this.showLoading = true;
      this.service.getInfo(this.form.value.username).subscribe((data) => {
        this.setData(data);
      })
    }
  }

  selectedOffer(offer: string) {
     switch (offer) {
       case '80':
         this.form.get('quantityLikes')?.setValue(80);
         this.likes80 = true;
         this.likes500 = false;
         this.likes1200 = false;
         this.likes2500 = false;
         this.likes6000 = false;
         this.likes14000 = false;
         break;
       case '500':
         this.form.get('quantityLikes')?.setValue(500);
         this.likes80 = false;
         this.likes500 = true;
         this.likes1200 = false;
         this.likes2500 = false;
         this.likes6000 = false;
         this.likes14000 = false;
         break;
       case '1200':
         this.form.get('quantityLikes')?.setValue(1200);
         this.likes80 = false;
         this.likes500 = false;
         this.likes1200 = true;
         this.likes2500 = false;
         this.likes6000 = false;
         this.likes14000 = false;
         break;
       case '2500':
         this.form.get('quantityLikes')?.setValue(2500);
         this.likes80 = false;
         this.likes500 = false;
         this.likes1200 = false;
         this.likes2500 = true;
         this.likes6000 = false;
         this.likes14000 = false;
         break;
       case '6000':
         this.form.get('quantityLikes')?.setValue(6000);
         this.likes80 = false;
         this.likes500 = false;
         this.likes1200 = false;
         this.likes2500 = false;
         this.likes6000 = true;
         this.likes14000 = false;
         break;
       case '14000':
         this.form.get('quantityLikes')?.setValue(14000);
         this.likes80 = false;
         this.likes500 = false;
         this.likes1200 = false;
         this.likes2500 = false;
         this.likes6000 = false;
         this.likes14000 = true;
         break;
     }
  }

  selectedLikes(post: IPost) {
    this.form.get('post')?.setValue(post);
    this.loadSelected(post);
  }

  buy() {
    if (!this.form.get('post')?.value) {
      this.openDialog();
    }
  }

  openDialog() {
    this.dialog.open(DialogInfoComponent);
  }
}
