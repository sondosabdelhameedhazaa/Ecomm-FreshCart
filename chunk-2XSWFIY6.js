import{Gb as k,Hb as m,Ib as _,Ic as P,Na as u,Ob as A,Oc as v,Ra as l,Sa as I,V as h,_ as C,ea as b,hb as w,jb as x,lb as S,nb as y,oa as p,ob as B,pa as f,pb as j,qb as L,rb as r,sb as s,tb as d,wb as T,yb as g,zb as c}from"./chunk-IAL7WWAF.js";var E=(()=>{let e=class e{constructor(t){this._HttpClient=t}getAllBrandsAPI(){return this._HttpClient.get(`${v.baseURL}/api/v1/brands`)}getSpefBrandsAPI(t){return this._HttpClient.get(`${v.baseURL}/api/v1/brands/${t}`)}};e.\u0275fac=function(n){return new(n||e)(C(P))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function V(i,e){i&1&&(r(0,"div",1),d(1,"div",2),s())}function $(i,e){if(i&1){let o=T();r(0,"div",6),g("click",function(){let n=p(o).$implicit,a=c(2);return a.alret=!1,a.modalImg=n.image,a.textImg=n.name,f(a.alretTitle=n.name)}),r(1,"div",7)(2,"div",8),d(3,"img",9),r(4,"span",10),m(5),s()()()(),r(6,"div",11),g("click",function(n){p(o);let a=k(11),M=c(2);return f(M.hideModal(n.target,a))}),r(7,"div",12)(8,"div",13)(9,"div",14),d(10,"img",15,0),s(),r(12,"div",16)(13,"p",17),m(14),s()()()()()}if(i&2){let o=e.$implicit,t=c(2);l(3),x("src",o.image,u),l(2),_(o.name),l(),S("hidden",t.alret),l(4),x("src",t.modalImg,u),l(4),_(t.textImg)}}function H(i,e){if(i&1&&(r(0,"div",3)(1,"h1",4),m(2,"All Brands"),s(),r(3,"div",5),j(4,$,15,6,null,null,B),s()()),i&2){let o=c();l(4),L(o.brandsLisst)}}var D=(()=>{let e=class e{constructor(t){this._BrandsService=t,this.isLoading=!0,this.alret=!0,this.alretTitle=!0,this.modalImg="",this.textImg=""}ngOnInit(){typeof localStorage<"u"&&localStorage.setItem("currentPage","/brands"),this.getAllBrands()}getAllBrands(){this.isLoading=!0,this._BrandsService.getAllBrandsAPI().subscribe({next:t=>{this.isLoading=!1,this.brandsLisst=t.data,console.log(this.brandsLisst)}})}hideModal(t,n){t!=n&&(this.alret=!0)}};e.\u0275fac=function(n){return new(n||e)(I(E))},e.\u0275cmp=b({type:e,selectors:[["app-brands"]],standalone:!0,features:[A],decls:2,vars:1,consts:[["eleimg",""],[1,"h-screen","row","justify-center","items-center"],[1,"loader"],[1,"contaier","mx-auto"],[1,"text-main","font-bold","m-4","text-4xl","text-center","font-sans"],[1,"flex","flex-col","lg:flex-row","flex-wrap","gap-y-3"],[1,"md:w-3/12","p-3",3,"click"],[1,"product","p-2","border"],[1,"flex","items-center","flex-col"],["alt","","ngSi","",1,"w-full",3,"src"],[1,"text-main","font-sm"],[1,"w-full","fixed","top-0","bottom-0","left-0","right-0","flex","justify-center","items-center","h-screen","z-50",3,"click"],["role","dialog","aria-modal","true",1,"fixed","inset-0","z-50","flex","items-center","justify-center","product"],[1,"bg-white","rounded-lg","shadow"],[1,"border-b","p-4","flex","items-center","justify-between"],["alt","",1,"w-full",3,"src"],[1,"p-4"],[1,"text-main"]],template:function(n,a){n&1&&w(0,V,2,0,"div",1)(1,H,6,0),n&2&&y(0,a.isLoading?0:1)},styles:[".model[_ngcontent-%COMP%]{z-index:444}.model[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover}"]});let i=e;return i})();export{D as BrandsComponent};
