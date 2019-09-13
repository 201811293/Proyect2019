import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Producto } from '../../models/producto';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-wallpapper',
  templateUrl: './details-wallpapper.component.html',
  styleUrls: ['./details-wallpapper.component.css']
})
export class DetailsWallpapperComponent implements OnInit {
  producto;
  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
  public product: Producto;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.producto = this.product[+params.get('id')];
   
    });
    
  }

  getDetails(idProduct: string): void {
    //console.log('detalles product', idProduct)
    //this.dataApi.getOneProduct(idProduct).subscribe(product => {
      
    //});
  }
}
