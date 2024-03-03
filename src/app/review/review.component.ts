import { Component } from "@angular/core";
import { review, reviews } from "../../assets/list-data/reviews";

@Component ({
    selector: 'app-review',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.css']
})

export class ReviewComponent{
    reviews = [...reviews];
}