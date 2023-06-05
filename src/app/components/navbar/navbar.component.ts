import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
navbg : any;

@HostListener('document:scroll') scrollover(){
  if(document.body.scrollTop>0 || document.documentElement.scrollTop > 0){
    this.navbg  = {
      'background-color':'#111111'
    }
  }else{
    this.navbg  = {
      'background-color':'transparent'
    }
  }
}
}
