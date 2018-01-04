import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

@Injectable()
export class RegistrarProvider {

  constructor(private storage: Storage, private datepipe: DatePipe) {}

  public insert( registrar: Resgistrar){
      let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
      return this.save(key, registrar);

  }
  
  public save(key: string, registrar: Registrar){
     this.storage.set()

  }
}
 export class Registrar {
   lugar: string;
   descricao: string;
   birth: Date;
 }