import { Component } from '@angular/core';
import { Suma } from './Entidades/suma';
import { Usuario } from './Usuario/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
 //miSuma:Suma;
 miLogin:Usuario;
  
 constructor(){
   //this.miSuma = new Suma();
   this.miLogin = new Usuario();
 }

}
