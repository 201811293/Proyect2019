import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-details-wallpapper',
  templateUrl: './details-wallpapper.component.html',
  styleUrls: ['./details-wallpapper.component.css']
})
export class DetailsWallpapperComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public product: Producto;
  ngOnInit() {
    const idProduct = 'zZhScPQ89jWVB3sB4uef';
    this.dataApi.getOneProduct(idProduct).subscribe( product =>{
      console.log(product);
    })
  }

}
