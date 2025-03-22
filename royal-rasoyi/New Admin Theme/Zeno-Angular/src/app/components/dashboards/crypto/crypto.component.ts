import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/sharedmodule';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper'
import { register } from 'swiper/element';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ApexChartComponent } from '../../../@spk/apex-chart/apex-chart.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkNgSelectComponent } from '../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkCryptoCard1Component } from '../../../@spk/reusable-dashboards/spk-crypto-dashboard/spk-crypto-card1/spk-crypto-card1.component';
import { SpkCryptoCard2Component } from '../../../@spk/reusable-dashboards/spk-crypto-dashboard/spk-crypto-card2/spk-crypto-card2.component';
Swiper.use([Autoplay, Navigation, Pagination]);
register();

@Component({
  selector: 'app-crypto',
  standalone: true,
  imports: [NgApexchartsModule,NgbModule,NgSelectModule,SpkCryptoCard1Component,SpkCryptoCard2Component,SpkNgSelectComponent,
	SharedModule,CommonModule,SpkReusableTablesComponent,ApexChartComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './crypto.component.html',
  styleUrl: './crypto.component.scss'
})
export class CryptoComponent {
	@ViewChild('swiperContainer') swiperContainer!: ElementRef;

	ngAfterViewInit(): void {
		const swiperEl = this.swiperContainer.nativeElement;
	
		Object.assign(swiperEl, {
		  slidesPerView: 6,
		  spaceBetween: 10,
		 
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			500: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1400: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			1600: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
			1800: {
				slidesPerView: 6,
				spaceBetween: 20,
			},
		  },
	  });
	}

	thumbsSwiper: any;
	setThumbsSwiper(swiper: any) {
		this.thumbsSwiper = swiper;
	  }

chartOptions:any={
	series: [{
		data: [{
			x: new Date(1538778600000),
			y: [6629.81, 6650.5, 6623.04, 6633.33],
		}, {
			x: new Date(1538780400000),
			y: [6632.01, 6643.59, 6620, 6630.11],
		}, {
			x: new Date(1538782200000),
			y: [6630.71, 6648.95, 6623.34, 6635.65],
		}, {
			x: new Date(1538784000000),
			y: [6635.65, 6651, 6629.67, 6638.24],
		}, {
			x: new Date(1538785800000),
			y: [6638.24, 6640, 6620, 6624.47],
		}, {
			x: new Date(1538787600000),
			y: [6624.53, 6636.03, 6621.68, 6624.31],
		}, {
			x: new Date(1538789400000),
			y: [6624.61, 6632.2, 6617, 6626.02],
		}, {
			x: new Date(1538791200000),
			y: [6627, 6627.62, 6584.22, 6603.02],
		}, {
			x: new Date(1538793000000),
			y: [6605, 6608.03, 6598.95, 6604.01],
		}, {
			x: new Date(1538794800000),
			y: [6604.5, 6614.4, 6602.26, 6608.02],
		}, {
			x: new Date(1538796600000),
			y: [6608.02, 6610.68, 6601.99, 6608.91],
		}, {
			x: new Date(1538798400000),
			y: [6608.91, 6618.99, 6608.01, 6612],
		}, {
			x: new Date(1538800200000),
			y: [6612, 6615.13, 6605.09, 6612],
		}, {
			x: new Date(1538802000000),
			y: [6612, 6624.12, 6608.43, 6622.95],
		}, {
			x: new Date(1538803800000),
			y: [6623.91, 6623.91, 6615, 6615.67],
		}, {
			x: new Date(1538805600000),
			y: [6618.69, 6618.74, 6610, 6610.4],
		}, {
			x: new Date(1538807400000),
			y: [6611, 6622.78, 6610.4, 6614.9],
		}, {
			x: new Date(1538809200000),
			y: [6614.9, 6626.2, 6613.33, 6623.45],
		}, {
			x: new Date(1538811000000),
			y: [6623.48, 6627, 6618.38, 6620.35],
		}, {
			x: new Date(1538812800000),
			y: [6619.43, 6620.35, 6610.05, 6615.53],
		}, {
			x: new Date(1538814600000),
			y: [6615.53, 6617.93, 6610, 6615.19],
		}, {
			x: new Date(1538816400000),
			y: [6615.19, 6621.6, 6608.2, 6620],
		}, {
			x: new Date(1538818200000),
			y: [6619.54, 6625.17, 6614.15, 6620],
		}, {
			x: new Date(1538820000000),
			y: [6620.33, 6634.15, 6617.24, 6624.61],
		}, {
			x: new Date(1538821800000),
			y: [6625.95, 6626, 6611.66, 6617.58],
		}, {
			x: new Date(1538823600000),
			y: [6619, 6625.97, 6595.27, 6598.86],
		}, {
			x: new Date(1538825400000),
			y: [6598.86, 6598.88, 6570, 6587.16],
		}, {
			x: new Date(1538827200000),
			y: [6588.86, 6600, 6580, 6593.4],
		}, {
			x: new Date(1538829000000),
			y: [6593.99, 6598.89, 6585, 6587.81],
		}, {
			x: new Date(1538830800000),
			y: [6587.81, 6592.73, 6567.14, 6578],
		}, {
			x: new Date(1538832600000),
			y: [6578.35, 6581.72, 6567.39, 6579],
		}, {
			x: new Date(1538834400000),
			y: [6579.38, 6580.92, 6566.77, 6575.96],
		}, {
			x: new Date(1538836200000),
			y: [6575.96, 6589, 6571.77, 6588.92],
		}, {
			x: new Date(1538838000000),
			y: [6588.92, 6594, 6577.55, 6589.22],
		}, {
			x: new Date(1538839800000),
			y: [6589.3, 6598.89, 6589.1, 6596.08],
		}, {
			x: new Date(1538841600000),
			y: [6597.5, 6600, 6588.39, 6596.25],
		}, {
			x: new Date(1538843400000),
			y: [6598.03, 6600, 6588.73, 6595.97],
		}, {
			x: new Date(1538845200000),
			y: [6595.97, 6602.01, 6588.17, 6602],
		}, {
			x: new Date(1538847000000),
			y: [6602, 6607, 6596.51, 6599.95],
		}, {
			x: new Date(1538848800000),
			y: [6600.63, 6601.21, 6590.39, 6591.02],
		}, {
			x: new Date(1538850600000),
			y: [6591.02, 6603.08, 6591, 6591],
		}, {
			x: new Date(1538852400000),
			y: [6591, 6601.32, 6585, 6592],
		}, {
			x: new Date(1538854200000),
			y: [6593.13, 6596.01, 6590, 6593.34],
		}, {
			x: new Date(1538856000000),
			y: [6593.34, 6604.76, 6582.63, 6593.86],
		}, {
			x: new Date(1538857800000),
			y: [6593.86, 6604.28, 6586.57, 6600.01],
		}, {
			x: new Date(1538859600000),
			y: [6601.81, 6603.21, 6592.78, 6596.25],
		}, {
			x: new Date(1538861400000),
			y: [6596.25, 6604.2, 6590, 6602.99],
		}, {
			x: new Date(1538863200000),
			y: [6602.99, 6606, 6584.99, 6587.81],
		}, {
			x: new Date(1538865000000),
			y: [6587.81, 6595, 6583.27, 6591.96],
		}, {
			x: new Date(1538866800000),
			y: [6591.97, 6596.07, 6585, 6588.39],
		}, {
			x: new Date(1538868600000),
			y: [6587.6, 6598.21, 6587.6, 6594.27],
		}, {
			x: new Date(1538870400000),
			y: [6596.44, 6601, 6590, 6596.55],
		}, {
			x: new Date(1538872200000),
			y: [6598.91, 6605, 6596.61, 6600.02],
		}, {
			x: new Date(1538874000000),
			y: [6600.55, 6605, 6589.14, 6593.01],
		}, {
			x: new Date(1538875800000),
			y: [6593.15, 6605, 6592, 6603.06],
		}, {
			x: new Date(1538877600000),
			y: [6603.07, 6604.5, 6599.09, 6603.89],
		}, {
			x: new Date(1538879400000),
			y: [6604.44, 6604.44, 6600, 6603.5],
		}, {
			x: new Date(1538881200000),
			y: [6603.5, 6603.99, 6597.5, 6603.86],
		}, {
			x: new Date(1538883000000),
			y: [6603.85, 6605, 6600, 6604.07],
		}, {
			x: new Date(1538884800000),
			y: [6604.98, 6606, 6604.07, 6606],
		}, {
			x: new Date(1538868600000),
			y: [6587.6, 6598.21, 6587.6, 6594.27],
		}, {
			x: new Date(1538870400000),
			y: [6596.44, 6601, 6590, 6596.55],
		}, {
			x: new Date(1538872200000),
			y: [6598.91, 6605, 6596.61, 6600.02],
		},{
			x: new Date(1538778600000),
			y: [6629.81, 6650.5, 6623.04, 6633.33],
		}, {
			x: new Date(1538780400000),
			y: [6632.01, 6643.59, 6620, 6630.11],
		}, {
			x: new Date(1538782200000),
			y: [6630.71, 6648.95, 6623.34, 6635.65],
		}, {
			x: new Date(1538784000000),
			y: [6635.65, 6651, 6629.67, 6638.24],
		}, {
			x: new Date(1538785800000),
			y: [6638.24, 6640, 6620, 6624.47],
		}, ],
	}, ],
	chart: {
		type: "candlestick",
		borderRadius: 20,
		height: 365,
		toolbar: {
			show: false,
		},
		zoom: {
			enabled: false
		  },
	},
	plotOptions: {
		candlestick: {
      colors: {
        upward: "rgb(227, 84, 212)",
        downward: "var(--primary-color)",
			},
		},
	},
	title: {
		align: "left",
	},
	grid: {
		borderColor: "#f1f1f1",
		strokeDashArray: 3,
	},
	xaxis: {
		type: "datetime",
		axisBorder: {
			show: false,
			color: "rgba(119, 119, 142, 0.05)",
			offsetX: 0,
			offsetY: 0,
		},
		axisTicks: {
			show: false,
			borderType: "solid",
			color: "rgba(119, 119, 142, 0.05)",
			width: 6,
			offsetX: 0,
			offsetY: 0,
		},
	},
	yaxis: {
		tooltip: {
			enabled: true,
		},
	},
}
chartOptions1:any={
	series: [{
		data: [98, 110, 80, 145, 105, 112, 87, 148, 102]
	}],
	chart: {
		height: 40,
		width: 150,
		type: 'area',
		fontFamily: 'Montserrat, sans-serif',
		foreColor: '#5d6162',
		zoom: {
			enabled: false
		},
		sparkline: {
			enabled: true
		}
	},
	tooltip: {
		enabled: true,
		theme: "dark",
		x: {
			show: false
		},
		y: {
			title: {
				formatter: function () {
					return ''
				}
			}
		},
		marker: {
			show: false
		}
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'smooth',
		width: [1.5],
	},
	fill: {
		type: 'gradient',
		gradient: {
			opacityFrom: 0.5,
			opacityTo: 0.2,
			stops: [0, 60],
			colorStops: [
				[
					{
						offset: 0,
						color: 'var(--primary04)',
						opacity: 1
					},
					{
						offset: 60,
						color: 'var(--primary02)',
						opacity: 1
					},
					{
						offset: 100,
						color: 'rgba(121, 97, 245, 0)',
						opacity: 1
					}
				],
			]
		},
	},
	title: {
		text: undefined,
	},
	grid: {
		borderColor: 'transparent',
	},
	xaxis: {
		crosshairs: {
			show: false,
		}
	},
	colors: ["var(--primary-color)"],
}
chartOptions2:any={ 
	series: [{
		data: [98, 110, 80, 145, 105, 112, 87, 148, 102]
	}],
	chart: {
		height: 40,
		width: 150,
		type: 'area',
		fontFamily: 'Montserrat, sans-serif',
		foreColor: '#5d6162',
		zoom: {
			enabled: false
		},
		sparkline: {
			enabled: true
		}
	},
	tooltip: {
		enabled: true,
		theme: "dark",
		x: {
			show: false
		},
		y: {
			title: {
				formatter: function () {
					return ''
				}
			}
		},
		marker: {
			show: false
		}
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'smooth',
		width: [1.5],
	},
	title: {
		text: undefined,
	},
	grid: {
		borderColor: 'transparent',
	},
	xaxis: {
		crosshairs: {
			show: false,
		}
	},
	colors: ["rgb(133, 204, 65)"],
	fill: {
		type: 'gradient',
		gradient: {
			opacityFrom: 0.5,
			opacityTo: 0.2,
			stops: [0, 60],
			colorStops: [
				[
					{
						offset: 0,
						color: 'rgba(133, 204, 65, 0.4)',
						opacity: 1
					},
					{
						offset: 60,
						color: 'rgba(133, 204, 65, 0.2)',
						opacity: 1
					},
					{
						offset: 100,
						color: 'rgba(133, 204, 65, 0)',
						opacity: 1
					}
				],
			]
		},
	},
}
chartOptions3:any={ 
	series: [{
		data: [98, 110, 80, 145, 105, 112, 87, 148, 102]
	}],
	chart: {
		height: 40,
		width: 150,
		type: 'area',
		fontFamily: 'Montserrat, sans-serif',
		foreColor: '#5d6162',
		zoom: {
			enabled: false
		},
		sparkline: {
			enabled: true
		}
	},
	tooltip: {
		enabled: true,
		theme: "dark",
		x: {
			show: false
		},
		y: {
			title: {
				formatter: function () {
					return ''
				}
			}
		},
		marker: {
			show: false
		}
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'smooth',
		width: [1.5],
	},
	title: {
		text: undefined,
	},
	grid: {
		borderColor: 'transparent',
	},
	xaxis: {
		crosshairs: {
			show: false,
		}
	},
	colors: ["rgb(40, 200, 235)"],
	fill: {
		type: 'gradient',
		gradient: {
			opacityFrom: 0.5,
			opacityTo: 0.2,
			stops: [0, 60],
			colorStops: [
				[
					{
						offset: 0,
						color: 'rgba(40, 200, 235, 0.4)',
						opacity: 1
					},
					{
						offset: 60,
						color: 'rgba(40, 200, 235, 0.2)',
						opacity: 1
					},
					{
						offset: 100,
						color: 'rgba(40, 200, 235, 0)',
						opacity: 1
					}
				],
			]
		},
	},

}
chartOptions4:any={ 
	series: [{
		data: [98, 110, 80, 145, 105, 112, 87, 148, 102]
	}],
	chart: {
		height: 40,
		width: 150,
		type: 'area',
		fontFamily: 'Montserrat, sans-serif',
		foreColor: '#5d6162',
		zoom: {
			enabled: false
		},
		sparkline: {
			enabled: true
		}
	},
	tooltip: {
		enabled: true,
		theme: "dark",
		x: {
			show: false
		},
		y: {
			title: {
				formatter: function () {
					return ''
				}
			}
		},
		marker: {
			show: false
		}
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'smooth',
		width: [1.5],
	},
	title: {
		text: undefined,
	},
	grid: {
		borderColor: 'transparent',
	},
	xaxis: {
		crosshairs: {
			show: false,
		}
	},
	colors: ["rgb(244, 110, 244)"],
	
	fill: {
		type: 'gradient',
		gradient: {
			opacityFrom: 0.5,
			opacityTo: 0.2,
			stops: [0, 60],
			colorStops: [
				[
					{
						offset: 0,
						color: 'rgba(244, 110, 244, 0.4)',
						opacity: 1
					},
					{
						offset: 60,
						color: 'rgba(244, 110, 244, 0.2)',
						opacity: 1
					},
					{
						offset: 100,
						color: 'rgba(244, 110, 244, 0)',
						opacity: 1
					}
				],
			]
		},
	},
}
chartOptions5:any={
	series: [
		{
			data: [
				{
					x: new Date(1538778600000),
					y: [6629.81, 6650.5, 6623.04, 6633.33],
				},
				{
					x: new Date(1538780400000),
					y: [6632.01, 6643.59, 6620, 6630.11],
				},
				{
					x: new Date(1538782200000),
					y: [6630.71, 6648.95, 6623.34, 6635.65],
				},
				{
					x: new Date(1538784000000),
					y: [6635.65, 6651, 6629.67, 6638.24],
				},
				{
					x: new Date(1538785800000),
					y: [6638.24, 6640, 6620, 6624.47],
				},
				{
					x: new Date(1538787600000),
					y: [6624.53, 6636.03, 6621.68, 6624.31],
				},
				{
					x: new Date(1538789400000),
					y: [6624.61, 6632.2, 6617, 6626.02],
				},
				{
					x: new Date(1538791200000),
					y: [6627, 6627.62, 6584.22, 6603.02],
				},
				{
					x: new Date(1538793000000),
					y: [6605, 6608.03, 6598.95, 6604.01],
				},
				{
					x: new Date(1538794800000),
					y: [6604.5, 6614.4, 6602.26, 6608.02],
				},
				{
					x: new Date(1538796600000),
					y: [6608.02, 6610.68, 6601.99, 6608.91],
				},
				{
					x: new Date(1538798400000),
					y: [6608.91, 6618.99, 6608.01, 6612],
				},
				{
					x: new Date(1538800200000),
					y: [6612, 6615.13, 6605.09, 6612],
				},
				{
					x: new Date(1538802000000),
					y: [6612, 6624.12, 6608.43, 6622.95],
				},
				{
					x: new Date(1538803800000),
					y: [6623.91, 6623.91, 6615, 6615.67],
				},
				{
					x: new Date(1538805600000),
					y: [6618.69, 6618.74, 6610, 6610.4],
				},
				{
					x: new Date(1538807400000),
					y: [6611, 6622.78, 6610.4, 6614.9],
				},
				{
					x: new Date(1538809200000),
					y: [6614.9, 6626.2, 6613.33, 6623.45],
				},
				{
					x: new Date(1538811000000),
					y: [6623.48, 6627, 6618.38, 6620.35],
				},
				{
					x: new Date(1538812800000),
					y: [6619.43, 6620.35, 6610.05, 6615.53],
				},
				{
					x: new Date(1538814600000),
					y: [6615.53, 6617.93, 6610, 6615.19],
				},
				{
					x: new Date(1538816400000),
					y: [6615.19, 6621.6, 6608.2, 6620],
				},
				{
					x: new Date(1538818200000),
					y: [6619.54, 6625.17, 6614.15, 6620],
				},
				{
					x: new Date(1538820000000),
					y: [6620.33, 6634.15, 6617.24, 6624.61],
				},
				{
					x: new Date(1538821800000),
					y: [6625.95, 6626, 6611.66, 6617.58],
				},
				{
					x: new Date(1538823600000),
					y: [6619, 6625.97, 6595.27, 6598.86],
				},
				{
					x: new Date(1538825400000),
					y: [6598.86, 6598.88, 6570, 6587.16],
				},
				{
					x: new Date(1538827200000),
					y: [6588.86, 6600, 6580, 6593.4],
				},
				{
					x: new Date(1538829000000),
					y: [6593.99, 6598.89, 6585, 6587.81],
				},
				{
					x: new Date(1538830800000),
					y: [6587.81, 6592.73, 6567.14, 6578],
				},
				{
					x: new Date(1538832600000),
					y: [6578.35, 6581.72, 6567.39, 6579],
				},
				{
					x: new Date(1538834400000),
					y: [6579.38, 6580.92, 6566.77, 6575.96],
				},
				{
					x: new Date(1538836200000),
					y: [6575.96, 6589, 6571.77, 6588.92],
				},
				{
					x: new Date(1538838000000),
					y: [6588.92, 6594, 6577.55, 6589.22],
				},
				{
					x: new Date(1538839800000),
					y: [6589.3, 6598.89, 6589.1, 6596.08],
				},
				{
					x: new Date(1538841600000),
					y: [6597.5, 6600, 6588.39, 6596.25],
				},
				{
					x: new Date(1538843400000),
					y: [6598.03, 6600, 6588.73, 6595.97],
				},
				{
					x: new Date(1538845200000),
					y: [6595.97, 6602.01, 6588.17, 6602],
				},
				{
					x: new Date(1538847000000),
					y: [6602, 6607, 6596.51, 6599.95],
				},
				{
					x: new Date(1538848800000),
					y: [6600.63, 6601.21, 6590.39, 6591.02],
				},
				{
					x: new Date(1538850600000),
					y: [6591.02, 6603.08, 6591, 6591],
				},
				{
					x: new Date(1538852400000),
					y: [6591, 6601.32, 6585, 6592],
				},
				{
					x: new Date(1538854200000),
					y: [6593.13, 6596.01, 6590, 6593.34],
				},
				{
					x: new Date(1538856000000),
					y: [6593.34, 6604.76, 6582.63, 6593.86],
				},
				{
					x: new Date(1538857800000),
					y: [6593.86, 6604.28, 6586.57, 6600.01],
				},
				{
					x: new Date(1538859600000),
					y: [6601.81, 6603.21, 6592.78, 6596.25],
				},
				{
					x: new Date(1538861400000),
					y: [6596.25, 6604.2, 6590, 6602.99],
				},
				{
					x: new Date(1538863200000),
					y: [6602.99, 6606, 6584.99, 6587.81],
				},
				{
					x: new Date(1538865000000),
					y: [6587.81, 6595, 6583.27, 6591.96],
				},
				{
					x: new Date(1538866800000),
					y: [6591.97, 6596.07, 6585, 6588.39],
				},
				{
					x: new Date(1538868600000),
					y: [6587.6, 6598.21, 6587.6, 6594.27],
				},
				{
					x: new Date(1538870400000),
					y: [6596.44, 6601, 6590, 6596.55],
				},
				{
					x: new Date(1538872200000),
					y: [6598.91, 6605, 6596.61, 6600.02],
				},
				{
					x: new Date(1538874000000),
					y: [6600.55, 6605, 6589.14, 6593.01],
				},
				{
					x: new Date(1538875800000),
					y: [6593.15, 6605, 6592, 6603.06],
				},
				{
					x: new Date(1538877600000),
					y: [6603.07, 6604.5, 6599.09, 6603.89],
				},
				{
					x: new Date(1538879400000),
					y: [6604.44, 6604.44, 6600, 6603.5],
				},
				{
					x: new Date(1538881200000),
					y: [6603.5, 6603.99, 6597.5, 6603.86],
				},
				{
					x: new Date(1538883000000),
					y: [6603.85, 6605, 6600, 6604.07],
				},
				{
					x: new Date(1538884800000),
					y: [6604.98, 6606, 6604.07, 6606],
				},
			],
		},
	],
	chart: {
		type: "candlestick",
		height: 370,
		toolbar: {
			show: false,
		},
		zoom: {
			enabled: false
		  },
	},
	tooltip: {
		enabled: true,
		theme: "dark",
	},
	plotOptions: {
		candlestick: {
			colors: {
				upward: 'rgb(133, 204, 65)',
				downward: 'rgb(250, 75, 66)'
			},
		},
	},
	grid: {
		borderColor: "#f1f1f1",
		strokeDashArray: 3,
	},
	title: {
		align: "left",
	},
	xaxis: {
		type: "datetime",
		labels: {
			rotate: -90,
			style: {
				colors: "rgb(107 ,114 ,128)",
				fontSize: "12px",
			},
		},
	},
	yaxis: {
		tooltip: {
			enabled: true,
			theme: "dark",
		},
		labels: {
			style: {
				colors: "rgb(107 ,114 ,128)",
				fontSize: "10px",
			},
			formatter: function (e:any) {
				return "$" + e
			}
		},
	},
}
chartOptions6:any={
	chart: {
		type: "line",
		height: 20,
		width: 120,
		sparkline: {
			enabled: true,
		},
		dropShadow: {
			enabled: true,
			enabledOnSeries: undefined,
			top: 0,
			left: 0,
			blur: 3,
			color: "#000",
			opacity: 0.1,
		},
	},
	stroke: {
		show: true,
		curve: "smooth",
		lineCap: "butt",
		colors: undefined,
		width: 1.3,
		dashArray: 0,
	},
	fill: {
		gradient: {
			enabled: false,
		},
	},
	tooltip: {
		enabled: false,
	},
	series: [
		{
			name: "Value",
			data: [
				0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
				61, 27, 54, 43, 19, 46,
			],
		},
	],
	yaxis: {
		min: 0,
		show: false,
		axisBorder: {
			show: false,
		},
	},
	xaxis: {
		axisBorder: {
			show: false,
		},
	},
	colors: ["rgb(185, 78, 237)"],
 }
 chartOptions7:any={
	...this.chartOptions6,
	colors: ["rgb(69, 214, 91)"],
 }
 chartOptions8:any={
	...this.chartOptions6,
	colors: ["rgb(243, 156, 18)"],
 }
 chartOptions9:any={
	...this.chartOptions6,
	colors: ["rgb(52, 152, 219)"],
 }
 chartOptions10:any={
	...this.chartOptions6,
	colors: ["rgb(46, 204, 113)"],
 }
 chartOptions11:any={
	...this.chartOptions6,
	colors: ["rgb(231, 76, 60)"],
 }

 cryptoData = [
    {
      logoUrl: './assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg',
      name: 'Bitcoin',
      price: '$34,563',
      percentageChange: '+0.57%',
      isPositive: true
    },
    {
      logoUrl: './assets/images/crypto-currencies/crypto-icons/solana-sol-logo.svg',
      name: 'Solana',
      price: '$34,563',
      percentageChange: '-0.045%',
      isPositive: false
    },
    {
      logoUrl: './assets/images/crypto-currencies/crypto-icons/binance-usd-busd-logo.svg',
      name: 'Binance',
      price: '$34,563',
      percentageChange: '-0.12%',
      isPositive: false
    },
    {
      logoUrl: './assets/images/crypto-currencies/crypto-icons/cardano-ada-logo.svg',
      name: 'Cardano',
      price: '$34,563',
      percentageChange: '+0.23%',
      isPositive: true
    },
    {
      logoUrl: './assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg',
      name: 'Etherium',
      price: '$34,563',
      percentageChange: '+1.78%',
      isPositive: true
    },
    {
      logoUrl: './assets/images/crypto-currencies/crypto-icons/tether-usdt-logo.svg',
      name: 'Tether',
      price: '$34,563',
      percentageChange: '-0.27%',
      isPositive: false
    },
    {
      logoUrl: './assets/images/crypto-currencies/crypto-icons/xrp-xrp-logo.svg',
      name: 'XRP',
      price: '$34,563',
      percentageChange: '+0.34%',
      isPositive: true
    }
  ];

  cryptoData1 = [
    {
      logoUrl: './assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg',
      name: 'Bitcoin',
      symbol: 'BTC',
      priceChange: '0.41%',
      textColor: 'success',
      value: '0.8531 BTC',
      usdPrice: '29471.02 USD',
      chartOptions: this.chartOptions1
    },
    {
      logoUrl: './assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg',
      name: 'Etherium',
      symbol: 'ETH',
      priceChange: '1.18%',
      textColor: 'success',
      value: '3.28353 ETH',
      usdPrice: '5965.91 USD',
      chartOptions: this.chartOptions2
    },
    {
      logoUrl: './assets/images/crypto-currencies/crypto-icons/tether-usdt-logo.svg',
      name: 'Tether',
      symbol: 'USDT',
      priceChange: '-0.05%',
      textColor: 'danger',
      value: '302.1442 USDT',
      usdPrice: '302.1442 USD',
      chartOptions: this.chartOptions3
    },
    {
      logoUrl: './assets/images/crypto-currencies/crypto-icons/xrp-xrp-logo.svg',
      name: 'XRP',
      symbol: 'XRP',
      priceChange: '0.01%',
      textColor: 'success',
      value: '2452.234 XRP',
      usdPrice: '1385.24 USD',
      chartOptions: this.chartOptions4
    }
  ];
  Crypto=[
    {label:'BTC',value:1},
    {label:'ETH',value:2},
    {label:'XRP',value:3},
    {label:'DASH',value:4},
    {label:'NEO',value:5},  
    {label:'LTC',value:6},
    {label:'BSD',value:7},
  ]
  Crypto1=[
    {label:'USD',value:1},
    {label:'AED',value:2},
    {label:'AUD',value:3},
    {label:'ARS',value:4},
    {label:'AZN',value:5},  
    {label:'BGN',value:6},
    {label:'BRL',value:7},
  ]
  handleSelectChange(value: any | any[]) {
}
transactions = [
    {
      name: 'Emiley Jackson',
      crypto: 'Bitcoin - (0.0092312)',
      date: '24,Nov 2023',
      time: '04:24PM',
      status: 'Sent',
      avatarUrl: './assets/images/faces/4.jpg',
      statusClass: 'text-danger'
    },
    {
      name: 'Jackie Shraff',
      crypto: 'Etherium - (0.9207702)',
      date: '25,Jan 2024',
      time: '11:57PM',
      status: 'Received',
      avatarUrl: './assets/images/faces/15.jpg',
      statusClass: 'text-success'
    },
    {
      name: 'Toni Stark',
      crypto: 'Tether - (0.83092333)',
      date: '16,Jan 2024',
      time: '02:28AM',
      status: 'Received',
      avatarUrl: './assets/images/faces/11.jpg',
      statusClass: 'text-success'
    },
    {
      name: 'Jessica May',
      crypto: 'Solana - (0.0092363)',
      date: '31,Dec 2023',
      time: '10:08AM',
      status: 'Processing',
      avatarUrl: './assets/images/faces/5.jpg',
      statusClass: 'text-info'
    },
    {
      name: 'Lieonel Marsi',
      crypto: 'Cardano - (1.00009023)',
      date: '18,Jan 2024',
      time: '06:05PM',
      status: 'Received',
      avatarUrl: './assets/images/faces/12.jpg',
      statusClass: 'text-success'
    },
    {
      name: 'Christian Ronan',
      crypto: 'Binance - (22.345332)',
      date: '12,Dec 2023',
      time: '12:23PM',
      status: 'Received',
      avatarUrl: './assets/images/faces/10.jpg',
      statusClass: 'text-danger'
    }
  ];

  BalanceData = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      amount: '2.5 BTC',
      price: '$96,000',
      change: '+3.50%',
      image: './assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg',
      priceChangeClass: 'text-success'
    },
    {
      name: 'Tether',
      symbol: 'USDT',
      amount: '10,000 USDT',
      price: '$1.00',
      change: '-0.20%',
      image: './assets/images/crypto-currencies/crypto-icons/tether-usdt-logo.svg',
      priceChangeClass: 'text-danger'
    },
    {
      name: 'Dogecoin',
      symbol: 'DOGE',
      amount: '50,000 DOGE',
      price: '$0.25',
      change: '+5.80%',
      image: './assets/images/crypto-currencies/crypto-icons/dogecoin-doge-logo.svg',
      priceChangeClass: 'text-success'
    },
    {
      name: 'Solana',
      symbol: 'SOL',
      amount: '100 SOL',
      price: '$150.00',
      change: '-1.75%',
      image: './assets/images/crypto-currencies/crypto-icons/solana-sol-logo.svg',
      priceChangeClass: 'text-danger'
    },
    {
      name: 'Binance Coin',
      symbol: 'BNB',
      amount: '20 BNB',
      price: '$300.00',
      change: '+2.00%',
      image: './assets/images/crypto-currencies/crypto-icons/binance-usd-busd-logo.svg',
      priceChangeClass: 'text-success'
    },
    {
      name: 'USD Coin',
      symbol: 'USDC',
      amount: '5,000 USDC',
      price: '$1.00',
      change: '+0.10%',
      image: './assets/images/crypto-currencies/crypto-icons/usd-coin-usdc-logo.svg',
      priceChangeClass: 'text-success'
    }
  ];
  InvestmentsData = [
	{
	  pair: 'BTC/USD',
	  change: 2.04,
	  amount: '$15,245',
	  amountInUSD: '340.5',
	  fromCurrency: 'USD',
	  toCurrency: 'BTC',
	  exchangeRate: '1.00 = 0.0000121',
	  iconClass: 'crypto-investments',
	  icon: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path d="M14.075,24v-3.188c3.779-0.207,6.305-1.167,6.642-4.756c0.264-2.88-1.084-4.165-3.223-4.682l0.001-0.002c1.289-0.665,2.109-1.846,1.919-3.811c-0.249-2.688-2.438-3.589-5.339-3.84V0h-2.256v3.619c-0.586,0-1.186,0.015-1.787,0.03V0.001H7.776v3.722c-0.829,0.025-1.795,0.013-4.526,0v2.422c1.781-0.032,2.715-0.147,2.929,1.004V17.34c-0.136,0.914-0.861,0.782-2.475,0.753L3.25,20.796c4.113,0,4.526,0.015,4.526,0.015v3.188h2.256v-3.143c0.615,0.015,1.216,0.015,1.787,0.015V24H14.075z M10.077,6.306c1.274,0,5.259-0.399,5.259,2.275c0,2.555-3.985,2.26-5.259,2.26V6.306z M10.077,18.106v-4.992c1.523,0,6.188-0.428,6.188,2.496C16.265,18.431,11.6,18.106,10.077,18.106z"></path></svg>`,
	  status: 'Completed',
	  statusClass:'success',
	  iconBgClass:'primary'
	},
	{
	  pair: 'ETH/USD',
	  change: 3.05,
	  amount: '$10,283',
	  amountInUSD: '340.5',
	  fromCurrency: 'USD',
	  toCurrency: 'ETH',
	  exchangeRate: '1.00 = 0.0475',
	  iconClass: 'crypto-investments',
	  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M65.7 96.4V128l39.2-55.1zM103.4 62.7L65.7 0v45.6zM65.7 49.2v38.9l37.4-21.9zM24.7 62.7L62.4 0v45.6zM62.4 49.2v38.9L24.9 66.2zM62.3 96.4V128L23.1 72.9z"></path></svg>`,
	  status: 'Cancelled',
	  statusClass:'danger',
	  badgeCalss:'success',
	  iconBgClass: 'secondary'
	},
	{
	  pair: 'BSD/USD',
	  change: 0.45,
	  amount: '$2,150',
	  amountInUSD: '340.5',
	  fromCurrency: 'USD',
	  toCurrency: 'LTC',
	  exchangeRate: '1.00 = 0.0291',
	  iconClass: 'crypto-investments',
	  icon: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 32 32" viewBox="0 0 32 32"><path d="M21.022 3.305c.481 2.917 8.449 5.085 3.016 13.286-.086.129-.294.079-.314-.075-.435-3.378-1.004-5.469-3.349-6.963-.052-.033-.112-.048-.171-.033-.869.218-3.112 1.461-4.123 2.863-.052.072-.137.107-.224.09-1.878-.37-3.788-1.111-4.744-2.376-.068-.09-.186-.123-.284-.067-1.344.768-2.697 2.537-2.82 6.577-.005.169-.232.23-.314.082C4.249 10.48 6.491 6.091 11.736 4.097c.135-.051.281.034.312.175.456 2.061 2.844 3.936 3.67 4.532.132.095.303.015.332-.145.457-2.496 2.757-4.809 4.665-5.559C20.858 3.045 20.997 3.154 21.022 3.305zM16.5 21H15v-1h1.5c.275 0 .5.224.5.5S16.775 21 16.5 21zM18 23.5c0 .276-.225.5-.5.5.146 0-2.347 0-2.5 0v-1c-.103 0 2.321 0 2.5 0C17.775 23 18 23.224 18 23.5z"></path><path d="M16,14c-4.418,0-8,3.582-8,8s3.582,8,8,8s8-3.582,8-8S20.418,14,16,14z M17.35,26H17v1.5h-1V26h-1v1.5h-1V26h-0.5
                                                                    c-0.276,0-0.5-0.224-0.5-0.5c0-0.154,0-7.246,0-7c0-0.276,0.224-0.5,0.5-0.5H14v-1.5h1V18h1v-1.5h1v1.551
                                                                    c1.45,0.296,2.406,1.837,1.829,3.34c0.767,0.485,1.258,1.37,1.159,2.364C19.857,25.058,18.66,26,17.35,26z"></path></svg>`,
	  status: 'Pending',
	  statusClass:'warning',
	  badgeCalss:'danger',
	  iconBgClass: 'danger'
	  
	},
	{
	  pair: 'ADA/USD',
	  change: 0.8,
	  amount: '$7,500',
	  amountInUSD: '340.5',
	  fromCurrency: 'USD',
	  toCurrency: 'ADA',
	  exchangeRate: '1.00 = 1.5',
	  iconClass: 'crypto-investments',
	  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M3 99.8C5 94 6.8 88.6 8.8 83.1c.2-.5 1.2-1 1.8-1 3.3-.1 6.6 0 9.9 0h64.6c1.7 0 2.5-.5 3-2.2 3.6-10.6 7.3-21.2 11-31.8.2-.6.3-1.1.6-2H21.4c2-5.9 3.9-11.4 5.9-16.9.2-.4 1-.8 1.5-.8 2-.1 3.9 0 5.9 0 26.5 0 53 .2 79.6-.1 7.9-.1 16.3 6 12.9 17.6-2.5 8.7-5.8 17.1-8.7 25.6-1 2.9-2 5.9-3 8.7-3.7 10.2-11.2 16.3-21.5 19.2-.9.3-1.9.3-2.9.3H5.2c-.6.1-1.3.1-2.2.1z"></path><path d="M52.6 55.6c-2 5.6-3.9 10.9-5.9 16-.1.4-.9.7-1.4.7H.8c-.2 0-.4-.1-.8-.3 1.9-5.2 3.7-10.3 5.7-15.4.2-.5 1-1 1.5-1h45.4z"></path></svg>`,
	  status: 'Completed',
	  statusClass:'success',
	  badgeCalss:'success',
	  iconBgClass: 'success'
	},
	{
	  pair: 'RIPPLE/USD',
	  change: 0.45,
	  amount: '$5,134',
	  amountInUSD: '340.5',
	  fromCurrency: 'USD',
	  toCurrency: 'XRP',
	  exchangeRate: '1.00 = 0.75',
	  iconClass: 'crypto-investments',
	  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M123 26.8c0 12.5-9.3 24.6-22.9 26.2-2.4.3-4.9.3-7.3.8-7.8 1.6-11.2 11.1-6 17.1 2.1 2.5 5.1 3.4 8.3 3.7 3.3.4 6.8.5 9.9 1.6 10.1 3.4 15.9 10.7 17.6 21.2 2.3 14.2-7.3 27-20.6 30-14.5 3.3-29.5-6.5-32.1-21.1-1.2-6.4.1-12.3 3-17.9 1.2-2.4 2.2-4.7 2.1-7.5-.2-4.4-3-8-7.4-9.5-3.8-1.3-8.1-.1-10.8 3.2-1.7 2.1-3.1 4.5-4.8 6.6-6.9 8.3-15.9 11.2-26.3 8.9-10.5-2.5-17.3-9.3-19.9-19.7C2 55.6 11.4 40.6 26.4 37.8c11-2.1 20 1.5 26.8 10.5 1.4 1.9 2.7 4.1 4.4 5.7 5.5 5.5 15.4 2.8 17.3-4.7.7-2.9.1-5.7-1.3-8.4-2.5-4.8-4.3-9.9-4.1-15.4C69.9 12.8 80 1.9 92.6.2c14.2-1.8 27.3 7.5 30 21.7.2 1.6.3 3.3.4 4.9z"></path></svg>`,
	  status: 'Completed',
	  statusClass:'success',
	  badgeCalss:'danger',
	  iconBgClass: 'warning'
	},
	{
	  pair: 'LTC/USD',
	  change: 2.13,
	  amount: '$3,750',
	  amountInUSD: '340.5',
	  fromCurrency: 'USD',
	  toCurrency: 'SOL',
	  exchangeRate: '1.00 = 0.027',
	  iconClass: 'crypto-investments',
	  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M18.629 74.359c.934 3.61 4.17 6.009 7.707 6.009.654 0 1.318-.082 1.98-.254L36 78.124V120a8 8 0 0 0 8 8h53.652c4.418 0 8.831-3.484 9.856-7.782l2.289-8.436c1.024-4.298-1.727-7.782-6.145-7.782H65V70.054l12.374-3.204a8 8 0 0 0 5.74-9.75l-1.036-8.995c-.937-3.622-4.144-6.037-7.633-6.037-.63 0-1.27.08-1.908.244L65 44.264V8c0-4.418-4.582-8-9-8H44a8 8 0 0 0-8 8v44.334l-12.667 3.28a8 8 0 0 0-5.74 9.75l1.036 8.995zm5.707-14.873L40 55.431V8c0-2.206 1.794-4 4-4h12c2.43 0 5 2.056 5 4V49.431l12.54-3.246c.298-.078.603-.117.905-.117 1.677 0 3.166 1.147 3.697 2.816l1.1 9.218a4.005 4.005 0 0 1-2.87 4.876L61 66.958V108h42.652c.887 0 1.588.269 1.974.758.379.48.481 1.204.292 2.046l-2.27 8.367-.017.06-.014.06c-.598 2.508-3.386 4.709-5.965 4.709H44c-2.206 0-4-1.794-4-4V72.956l-12.687 3.286c-.32.083-.65.126-.977.126-1.723 0-3.241-1.136-3.77-2.79l-1.1-9.216a4.005 4.005 0 0 1 2.87-4.876z"></path><circle cx="48" cy="46" r="2"></circle><circle cx="74" cy="116.083" r="2"></circle><path d="M48 118h17a2 2 0 000-4H50V84.5a2 2 0 00-4 0V116a2 2 0 002 2zM48 40a2 2 0 002-2V14h3a2 2 0 000-4h-5a2 2 0 00-2 2v26a2 2 0 002 2z"></path></svg>`,
	  status: 'Cancelled',
	  statusClass:'danger',
	  badgeCalss:'success',
	  iconBgClass: 'info'
	}
  ];

  constructor(private sanitizer:DomSanitizer) {}

  getSanitizedSVG(icon: string): SafeHtml {
	return this.sanitizer.bypassSecurityTrustHtml(icon);
  } 

  CurrencyPricesHeader = [
	{header:''},
	{header:'#'},
	{header:'Currency Name'},
	{header:'Price'},
	{header:'24h %'},
	{header:'7d %'},
	{header:'Circulating supply'},
	{header:'Volume'},
	{header:'Market Cap'},
	{header:'1 Week change'},
  ]

  cryptos = [
    {
      rank: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$34,283.53',
      change24h: '39.23%',
      change7d: '16.78%',
      supply: '19,528,893 BTC',
      marketCap: '$17,031,617,150',
      chartOptions:this.chartOptions6, 
	  volume: '$669,649,033,571',
      icon: './assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg'
    },
    {
      rank: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$1,800.81',
      change24h: '58.63%',
      change7d: '12.43%',
      supply: '120,269,517 ETH',
      marketCap: '$7,487,642,074',
      chartOptions:this.chartOptions7, 
	  volume: '$216,466,869,907',
      icon: './assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg'
    },
    {
      rank: 3,
      name: 'Tether - USDT',
      symbol: 'USDT',
      price: '$1.00',
      change24h: '49.30%',
      change7d: '25.63%',
      supply: '84,605,973,813 USDT',
      marketCap: '$28,979,751,192',
      chartOptions:this.chartOptions8, 
	  volume: '$84,641,938,780',
      icon: './assets/images/crypto-currencies/crypto-icons/tether-usdt-logo.svg'
    },
    {
      rank: 4,
      name: 'Solana - SOL',
      symbol: 'SOL',
      price: '$35.97',
      change24h: '144.58%',
      change7d: '53.26%',
      supply: '419,294,203 SOL',
      marketCap: '$1,332,401,692',
      chartOptions:this.chartOptions9, 
	  volume: '$15,083,616,607',
      icon: './assets/images/crypto-currencies/crypto-icons/solana-sol-logo.svg'
    },
    {
      rank: 5,
      name: 'Cardano - ADA',
      symbol: 'ADA',
      price: '$0.3008',
      change24h: '51.15%',
      change7d: '37.25%',
      supply: '35,243,310,843 ADA',
      marketCap: '$230,065,465',
      chartOptions:this.chartOptions10, 
	  volume: '$10,600,249,889',
      icon: './assets/images/crypto-currencies/crypto-icons/cardano-ada-logo.svg'
    },
    {
      rank: 6,
      name: 'Binance - BNB',
      symbol: 'BNB',
      price: '$227.36',
      change24h: '25.85%',
      change7d: '15.57%',
      supply: '151,703,773 BNB',
      marketCap: '$277,569,562',
      chartOptions:this.chartOptions11, 
	  volume: '$34,488,924,548',
      icon: './assets/images/crypto-currencies/crypto-icons/binance-usd-busd-logo.svg'
    }
  ];

}
