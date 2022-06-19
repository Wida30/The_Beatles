import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiscosService {

  constructor(private httpClient: HttpClient) { }

  public discoData = {
    id: "",
    author: "",
    title: "",
    year: "",
    cover: ""
  }
  public cartaData = {
    id: "test",
    author: "test",
    title: "",
    year: "",
    cover: "",
  

  }


  public getDiscos() {
    return this.httpClient.get("https://bbdd-the-beatles-f9m5dt6to-lauramdl.vercel.app/")
  }

  public clearDisco() {
    this.discoData = {
      id: "",
      author: "",
      title: "",
      year: "",
      cover: "",
      
    }
  }
  public postDisco(newDisco: any) {
    return this.httpClient.post("https://bbdd-the-beatles-f9m5dt6to-lauramdl.vercel.app/", newDisco)
  }

  public putDisco(discoID: any, editedDisco: any) {
    return this.httpClient.put("https://bbdd-the-beatles-f9m5dt6to-lauramdl.vercel.app/" + discoID, editedDisco)
  }

  public deleteDisco (discoID: any){
    this.discoData = discoID;
   return this.httpClient.delete("https://bbdd-the-beatles-f9m5dt6to-lauramdl.vercel.app/" + discoID)
    
  }
  public editItem(item: any) {
    this.discoData = item;
  }
  public soloUno(discoId:any){
    return this.httpClient.get("https://bbdd-the-beatles-f9m5dt6to-lauramdl.vercel.app/" + discoId)
  }

}


