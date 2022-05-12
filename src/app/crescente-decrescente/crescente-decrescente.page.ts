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
  


decrescente():number[]{
  for (let i=0; i< this.a.length-1; i++) {
    let indice = i;
    for (let j=i+1; j<this.a.length; j++)
       if (this.a[j] > this.a[indice]) 
          indice = j;
    
    let b = this.a[indice];  
    this.a[indice] = this.a[i];
    this.a[i] = b;
  }return this.a
 }

 crescente():number[]{
  for (let i=0; i< this.a.length-1; i++) {
    let indice = i;
    for (let j=i+1; j<this.a.length; j++)
       if (this.a[j] < this.a[indice]) 
          indice = j;
    
    let b = this.a[indice];  
    this.a[indice] = this.a[i];
    this.a[i] = b;
  }return this.a
 }
 stampa(){
  this.messaggio = this.crescente()
  }
  stampa2(){
    this.messaggio2 = this.decrescente()
  }


  ngOnInit() {
  }

}
