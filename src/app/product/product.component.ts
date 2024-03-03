import { Component } from "@angular/core";
import { products } from "../../assets/list-data/products";

@Component ({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})

export class ProductComponent {
    products = [...products];

    share() {
        window.alert('The product has been shared!');
    }
}