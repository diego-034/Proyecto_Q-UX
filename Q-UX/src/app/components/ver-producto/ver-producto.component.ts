import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../../services/products/products.service';
import { CarritoComprasService } from '../../services/carrito/carrito-compras.service';



@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent implements OnInit {

  product: any = {};
  nombre:string;
  id: any;
  loading: boolean;
  error: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private productsService: ProductsService,
              private carritoComprasService: CarritoComprasService) {
    this.loading = true;
    this.error = false;
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      this.id = params.id
      try {
        this.productsService.selectProduct(this.id)
          .subscribe((data: any) => {
            this.product = data.data[0];
            this.loading = false
          }, (err) => { // Captura de algun error
            this.error = true;
            this.loading = false;
          })
      } catch (error) {
        console.log(error)
      }
    });
  }

    /* Añadir al carrito, Guardar en el localStorage */

    addCarrito() {

      var id = this.product.IdProducto,
      llave = id.toString();
  
      this.carritoComprasService.set(this.product);
  
    }
}
