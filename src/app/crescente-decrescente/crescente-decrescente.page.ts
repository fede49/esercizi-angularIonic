import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crescente-decrescente',
  templateUrl: './crescente-decrescente.page.html',
  styleUrls: ['./crescente-decrescente.page.scss'],
})
export class CrescenteDecrescentePage implements OnInit {
   a:number [] = [];
   n:number;
   messaggio:number [];
   messaggio2:number [];
  constructor() { }
riempiArray(){
  
    this.a.push(this.n);
  }
  


decrescente(a:number []):number[]{
  for (let i=0; i< this.a.length-1; i++) {
    let indice = i;
    for (let j=i+1; j<this.a.length; j++)
       if (this.a[j] > this.a[indice]) 
          indice = j;
    
    let b = this.a[indice];  
    a[indice] = this.a[i];
    this.a[i] = b;
  }return this.a
 }

 crescente(a:number []){
  for (let i=0; i< a.length-1; i++) {
    let indice = i;
    for (let j=i+1; j<a.length; j++)
       if (a[j] < a[indice]) 
          indice = j;
    
    let b = a[indice];  
    a[indice] = a[i];
    a[i] = b;
  }return a
 }
 stampa(){
  this.messaggio = this.crescente(this.a)
  }
  stampa2(){
    this.messaggio2 = this.decrescente(this.a)
  }


  ngOnInit() {
  }

}
