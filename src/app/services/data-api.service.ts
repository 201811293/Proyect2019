import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Producto } from '../models/producto';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) { 
    this.productsCollection = afs.collection<Producto>('wallpappers')
    this.products = this.productsCollection.valueChanges();

  }

  private productsCollection: AngularFirestoreCollection<Producto>;
  private products: Observable<Producto[]>;
  private productDoc: AngularFirestoreDocument<Producto>;
  private product: Observable<Producto>;

  getAllProduct(){
    return this.products = this.productsCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Producto;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }
  getOneProduct(idProduct: string){
    this.productDoc = this.afs.doc<Producto>(`wallpapper/${idProduct}`);
    return this.product = this.productDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Producto;
        data.id = action.payload.id;
        return data;
      }
    }));
  }
  addProduct(){

  }
  updateProduct(){

  }
  deleteProduct(){

  }


}
