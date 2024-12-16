import {Component, inject, OnInit} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {
  faArrowRight,
  faBolt,
  faCamera,
  faEnvelope,
  faMobilePhone,
  faUser,
  faCreditCard,
  faLock,
  faClock,
  faRocket,
  faUnlock,
  faHandshake,
  faShield,
  faFaceSmileWink,
  faCircleInfo,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons';
import {NgClass} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-buy-tiktok-likes',
  standalone: true,
  imports: [
    FaIconComponent,
    NgClass,
    ReactiveFormsModule
  ],
  templateUrl: './buy-tiktok-likes.component.html',
  styleUrl: './buy-tiktok-likes.component.scss'
})
export class BuyTiktokLikesComponent implements OnInit {

  public form!: FormGroup;

  public faBolt = faBolt;

  protected readonly faCamera = faCamera;
  protected readonly faArrowRight = faArrowRight;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faMobilePhone = faMobilePhone;
  protected readonly faUser = faUser;
  protected readonly faCreditCard = faCreditCard;
  protected readonly faLock = faLock;
  protected readonly faClock = faClock;
  protected readonly faRocket = faRocket;
  protected readonly faUnlock = faUnlock;
  protected readonly faHandshake = faHandshake;
  protected readonly faShield = faShield;
  protected readonly faFaceSmileWink = faFaceSmileWink;
  protected readonly faCircleInfo = faCircleInfo;
  protected readonly faCircleCheck = faCircleCheck;

  public buyLikes100: boolean = false;
  public buyLikes500: boolean = false;
  public buyLikes1000: boolean = false;
  public buyLikes2500: boolean = false;
  public buyLikes5000: boolean = false;
  public buyLikes10000: boolean = false;
  public buyLikes25000: boolean = false;

  public prices = [
    {
      id: 'buyLikes100',
      price: '$0.50',
      discount: '0',
      save: '0'
    },
    {
      id: 'buyLikes500',
      price: '$2.50',
      discount: '$5.50',
      save: '$2.98'
    },
    {
      id: 'buyLikes1000',
      price: '$3.99',
      discount: '$11.00',
      save: '$6.99'
    },
    {
      id: 'buyLikes2500',
      price: '$9.99',
      discount: '$27.50',
      save: '$17.49'
    },
    {
      id: 'buyLikes5000',
      price: '$17.99',
      discount: '$55.00',
      save: '$36.99'
    },
    {
      id: 'buyLikes10000',
      price: '$32.80',
      discount: '$110.00',
      save: '$77.18'
    },
    {
      id: 'buyLikes25000',
      price: '$75.99',
      discount: '$275.00',
      save: '$198.99'
    }
  ];

  public selectGender: boolean = false;
  public globalFollower: boolean = false;
  public deliveryFast: boolean = false;
  public buyForm: boolean = false;

  private _fb: FormBuilder = inject(FormBuilder);

  selectedFollowers(quantity: number, name: string) {
    this.form.get('quantity')?.setValue(quantity);
    this.resetQuantity();
    // @ts-ignore
    this[name] = true;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this._fb.group({
      quantity: ['', [Validators.required]]
    })
  }

  buyFollower() {
    console.log(this.form.value);
    if(this.form.valid) {
      this.selectGender = true;
    }
  }

  selectedArea(type: string, gender: string) {

    if (type === 'gender') {
      this.selectGender = false;
      this.globalFollower = true;
      this.deliveryFast = false;
    }
    else if (type === 'global') {
      this.selectGender = false;
      this.globalFollower = false;
      this.deliveryFast = true;
    } else {
      this.selectGender = false;
      this.globalFollower = false;
      this.deliveryFast = false;
      this.buyForm = true;
    }

  }

  resetQuantity() {
  this.buyLikes100 = false;
  this.buyLikes500 = false;
  this.buyLikes1000 = false;
  this.buyLikes2500 = false;
  this.buyLikes5000 = false;
  this.buyLikes10000 = false;
  this.buyLikes25000 = false;
  }
}
