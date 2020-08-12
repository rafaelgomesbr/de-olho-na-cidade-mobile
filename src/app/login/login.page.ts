import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router 
    ) {}

  ngOnInit() {
  }
  
  register() {
   
        console.log('ok');
      }
  

 

  signIn() {
        this.router.navigate(['/tabs']);
      } 
 

  irParaTabs() {
    this.router.navigate(['/tabs']);
  }

  EsqueciSenha() {
    console.log('ok');
  }

}
