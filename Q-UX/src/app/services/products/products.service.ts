import { Injectable } from '@angular/core';

//HttpClient dependencia para ahcer las peticiones
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  response = null
  //Url para las peticiones a la API de laravel
  url = `http://127.0.0.1:8000/api/products`;

  //Constructor par ainyectar las dependencias
  constructor(private http: HttpClient) { }

  //Peticion GET para obtener todos los productos
  getProducts() {
    try {
      /* Devuelve un objeto -- No es el objeto json que devuelve la api Este objeto se le aplica el metodo subscribe 
      y ahi nos muestra el json de la API */
      return this.http.get(this.url);
    } catch (error) {
      console.log(error)
    }
  }

  //Peticion POST a la API para añadir producto
  addProducts(FormData: Object) {
    try {

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('Token-TKN')}`  
        })
      };
      return this.http.post(this.url, FormData, httpOptions);
        
    } catch (error) {
      console.log(error)
      return null
    }
  }

  //Peticion de datos por id a la API
  selectProduct(value: number){
    try{
      return this.http.get(this.url+"/"+value)
    }catch(error){
      console.error(error);
    }
  }

  updateProducts(value:number, FormData:Object) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('Token-TKN')}`  
      })
    };
    
    try {
       return this.http.put(this.url+"/"+value, FormData, httpOptions)
    }catch(error) {
      console.log(error)
    }
  }

  //Petición DELETE a la API con el Id del Producto que se recibe en value
  deleteProducts(value:number) {
    try {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('Token-TKN')}`  
        })
      };
      return this.http.delete(this.url + '/' + value, httpOptions);
    
    } catch (error) {
      console.log(error)
      return error
    }
  }
}
