import{a as M,j as _,k,w as O,x as P}from"./chunk-AKKESOB2.js";import{a as f,b as E,h as D}from"./chunk-DJ7BMAIE.js";import{Ka as g,Na as p,S as x,X as h,Xb as b,Y as v,Yb as y,_ as l,bb as C,db as s,hb as e,ib as t,jb as m,r as d,ub as n,vb as S,xb as c}from"./chunk-PTB36YVE.js";var I=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=l({type:i,selectors:[["app-buy-imstragram"]],standalone:!0,features:[c],decls:2,vars:0,template:function(r,a){r&1&&m(0,"app-nav-bar")(1,"router-outlet")},dependencies:[P,O,D]})}return i})();var z=(()=>{class i{_http;constructor(o){this._http=o}getInfo(o){return this._http.post("https://rizzup.net/getInfo",{username:`${o}`},{headers:new f({"Content-Type":"application/json"})}).pipe(d(r=>r))}getLikes(o){return this._http.post("https://rizzup.net/getPosts",o,{headers:new f({"Content-Type":"application/json"})}).pipe(d(r=>r))}static \u0275fac=function(r){return new(r||i)(h(E))};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function B(i,L){if(i&1&&(e(0,"div",21),m(1,"img",22),e(2,"p"),n(3),t()()),i&2){let o=L.$implicit;p(),s("src",o.img,g)("alt",o.description),p(2),S("",o.likes," Likes")}}var F=(()=>{class i{service=v(z);info;avatarUrl;posts=[{img:"https://via.placeholder.com/150",likes:135,description:"Post 1"},{img:"https://via.placeholder.com/150",likes:37,description:"Post 2"},{img:"https://via.placeholder.com/150",likes:29,description:"Post 3"}];ngOnInit(){}setData(o){console.log(o),this.info=o;let r=this.info.avatar.replace("https//","https:"),a=new URLSearchParams(r.split("?")[1]),u=decodeURIComponent(a.get("url")||"");console.log(u),this.avatarUrl=u}faFaceSmileWink=_;faArrowRight=k;static \u0275fac=function(r){return new(r||i)};static \u0275cmp=l({type:i,selectors:[["app-buy-instagram-likes"]],standalone:!0,features:[c],decls:72,vars:4,consts:[[1,"container","shadow","border",2,"margin-top","25px"],[1,"pricing"],[1,"price-item","selected"],[2,"font-size","40px","margin-top","-8px","margin-bottom","0"],[1,"price",2,"margin-top","-5px"],[1,"tag"],[1,"price-item"],[1,"price-no-selected"],[1,"tag-no-selected"],[1,"user-section"],[1,"likes-summary"],[1,"user-image"],["alt","User profile",1,"img-profile",3,"src"],[1,"posts"],["class","post",4,"ngFor","ngForOf"],[1,"flex-colum","justify-self","mt-1-5",2,"gap","10px"],[1,"align-seft-center",2,"font-size","17px","font-weight","bold"],[1,"content-advertising","spaceAround"],[3,"icon"],[1,"space-8","m5"],[1,"m5",3,"icon"],[1,"post"],[3,"src","alt"]],template:function(r,a){r&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4"),n(4,"80 Likes"),t(),e(5,"div",3),n(6,"\u{1F60F}"),t(),e(7,"p",4),n(8,"$0.99"),t(),e(9,"p",5),n(10,"\u{1F525} Crazy Low"),t()(),e(11,"div",6)(12,"h4"),n(13,"500 Likes"),t(),e(14,"div",3),n(15,"\u{1F60E}"),t(),e(16,"p",7),n(17,"$4.99"),t(),e(18,"p",8),n(19,"\u{1F525} Best Seller"),t()(),e(20,"div",6)(21,"h4"),n(22,"1,200 Likes"),t(),e(23,"div",3),n(24,"\u{1F929}"),t(),e(25,"p",7),n(26,"$9.99"),t(),e(27,"p",8),n(28,"+200 Bonus"),t()(),e(29,"div",6)(30,"h4"),n(31,"2,500 Likes"),t(),e(32,"div",3),n(33,"\u{1F911}"),t(),e(34,"p",7),n(35,"$19.99"),t(),e(36,"p",8),n(37,"+500 Bonus"),t()(),e(38,"div",6)(39,"h4"),n(40,"6,000 Likes"),t(),e(41,"div",3),n(42,"\u{1F973}"),t(),e(43,"p",7),n(44,"$49.99"),t(),e(45,"p",8),n(46,"+1,500 Bonus"),t()(),e(47,"div",6)(48,"h4"),n(49,"14,000 Likes"),t(),e(50,"div",3),n(51,"\u{1F451}"),t(),e(52,"p",7),n(53,"$99.99"),t(),e(54,"p",8),n(55,"+4,000 Bonus"),t()()(),e(56,"div",9)(57,"div",10)(58,"p"),n(59,"Total: $0.99"),t()(),e(60,"div",11),m(61,"img",12),t()(),e(62,"div",13),C(63,B,4,3,"div",14),t(),e(64,"div",15)(65,"span",16),n(66,"Selecciona la cantidad"),t(),e(67,"a",17),m(68,"fa-icon",18),e(69,"span",19),n(70,"Comprar seguidores"),t(),m(71,"fa-icon",20),t()()()),r&2&&(p(61),s("src",a.avatarUrl,g),p(2),s("ngForOf",a.posts),p(5),s("icon",a.faFaceSmileWink),p(3),s("icon",a.faArrowRight))},dependencies:[y,b,M],styles:["body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;margin:0;padding:0;background-color:#f5f5f5}.container[_ngcontent-%COMP%]{max-width:900px;margin:0 auto;padding:20px}.pricing[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px;justify-content:space-between;margin-bottom:10px}.price-item[_ngcontent-%COMP%]{height:109px;width:240px;padding:14px;border:2px solid #ccc;border-radius:10px;text-align:center;background-color:#fff}.price-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;margin-bottom:10px}.price-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:0;margin-bottom:5px}.price-item.selected[_ngcontent-%COMP%]{color:#fff;border-color:#f39c12;background:linear-gradient(45deg,#4b25ea,#bd18e6,#fb590e)}.price[_ngcontent-%COMP%]{font-size:1.1em;color:#fff;margin:10px 0}.tag[_ngcontent-%COMP%]{font-size:.9em;color:#fff}.price-no-selected[_ngcontent-%COMP%]{font-size:1.1em;color:#000;margin:0}.tag-no-selected[_ngcontent-%COMP%]{font-size:.9em;color:#000}.user-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;align-items:center;margin-bottom:20px}.likes-summary[_ngcontent-%COMP%]{text-align:left}.user-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:150px;border-radius:50%;border:3px solid #ccc}.posts[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:20px}.post[_ngcontent-%COMP%]{flex:1 1 calc(25% - 15px);text-align:center;background-color:#fff;padding:5px;border-radius:10px;border:1px solid #ddd}.post[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:70%;border-radius:5px}.post[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:10px;font-size:.9em;color:#333}.content-advertising[_ngcontent-%COMP%]{position:relative!important;align-items:center;appearance:none;background-image:linear-gradient(to right,#f58529,#dd2a7b);border:0;border-radius:6px;box-shadow:#0006 0 2px 4px,#0000004d 0 7px 13px -3px,#00000080 0 -3px inset;box-sizing:border-box;color:#fff;cursor:pointer;display:inline-flex;height:48px;justify-content:center;line-height:1;list-style:none;padding-left:16px;padding-right:16px;text-align:left;text-decoration:none;transition:box-shadow .15s,transform .15s;-webkit-user-select:none;touch-action:manipulation;white-space:nowrap;will-change:box-shadow,transform}"]})}return i})();var ee=[{path:"",component:I,children:[{path:"buy-likes",component:F}]}];export{ee as INSTRAGRAM_ROUTES};
