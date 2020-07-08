import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Product } from '../model/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private dbPath = '/producto'

    productsRef: AngularFirestoreCollection<Product> = null;

    constructor(private db: AngularFirestore) {
        this.productsRef = db.collection(this.dbPath);
    }

    createProduct(product: Product): void {
        this.productsRef.add({ ...product })
    }

    updateProduct(key: string, value: any): Promise<void> {
        return this.productsRef.doc(key).update(value)
    }

    deleteProduct(key: string): Promise<void> {
        return this.productsRef.doc(key).delete();
    }

    getProductList(): AngularFirestoreCollection<Product> {
        return this.productsRef;
    }

    deleteAll() {
        this.productsRef.get().subscribe(
            querySnapshot => {
                querySnapshot.forEach((doc) => {
                    doc.ref.delete();
                });
            },
            error => {
                console.log('Error: ', error);
            });
    }
}