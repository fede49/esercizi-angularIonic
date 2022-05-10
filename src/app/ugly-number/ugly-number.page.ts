import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ugly-number',
  templateUrl: './ugly-number.page.html',
  styleUrls: ['./ugly-number.page.scss'],
})
export class UglyNumberPage implements OnInit {
 n:number;
 risultato:number=0
  constructor() { }


   isUnglyNumber(n:number):boolean { //creato funzione per vedere se n e divisibile per i numeri primi 2,3,5 se e divisibile e un numero "brutto" e ritorna vero
    
      while(n !== 1){
        if(n % 2 === 0){
           n /= 2;          
        } else if(n % 3 === 0) {
           n /= 3;
        } else if(n % 5 === 0) {
              n /= 5;
        } else {
           return false;
        }
     }
     return true;
  }
  
  uN(n:number):void{ // creato seconda funzione per trovare la posizione del numero "brutto"
    let i=1
    let conta=1
  while (n > conta){  
    i++
    if (this.isUnglyNumber(i))
    conta++
  }this.risultato=i
}

  ngOnInit() {
  }

}
