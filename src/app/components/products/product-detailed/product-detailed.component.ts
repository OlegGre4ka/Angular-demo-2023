import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from './../../../models/Product.model';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-product-detailed',
	templateUrl: './product-detailed.component.html',
	styleUrls: ['./product-detailed.component.scss'],
	providers: [NgbCarouselConfig]
})
export class ProductDetailedComponent implements OnInit {
	productDetailed: IProduct;
	images: string[] = [];
	isLoading = true;

	constructor(private route: ActivatedRoute, private productsServise: ProductsService, private router: Router,
	) {
	}

	ngOnInit(): void {
		this.productsServise.getDetailedProduct(this.route.snapshot.params['id']).subscribe(
			product => {
				this.productDetailed = product;
				this.images = product.images;
				console.log(this.route.snapshot.params['id'], this.productDetailed, this.images);
				this.isLoading = false;
			}
		);

	}

	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

	@ViewChild(NgbCarousel) carousel: NgbCarousel;

	togglePaused() {
		if (this.paused) {
			this.carousel?.cycle();
		} else {
			this.carousel?.pause();
		}
		this.paused = !this.paused;
	}

	backToAllList = () => {
		this.router.navigate(['/'])
	}
	// onSlide(slideEvent: NgbSlideEvent) {
	// 	// if (
	// 	// 	this.unpauseOnArrow &&
	// 	// 	slideEvent.paused &&
	// 	// 	(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
	// 	// ) {
	// 	// 	this.togglePaused();
	// 	// }
	// 	// if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
	// 	// 	this.togglePaused();
	// 	// }
	// }
}
