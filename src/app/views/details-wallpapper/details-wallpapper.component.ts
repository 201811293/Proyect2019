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

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
  public product: Producto = {};

  ngOnInit() {
    const idProduct = this.route.snapshot.params['id'];
    this.getDetails(idProduct);
  }

  getDetails(idProduct: string): void {
    this.dataApi.getOneBook(idProduct).subscribe(book => {
      this.book = book;
    });
  }
}
