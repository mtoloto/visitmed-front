import { Component, ViewEncapsulation } from '@angular/core';

import { HomeService } from './home.service';
import { fuseAnimations } from '../../../core/animations';
import { HttpClientVisitMed } from "../../../core/services/http.client/http.client";
import { Company } from '../../../core/models/company';
import { Globals } from '../../../core/global';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class HomeComponent {
    widgets: any;
    widget1SelectedYear = '2016';
    widget5SelectedDay = 'today';
    home: any = {
        company: {
            id: '',
            name: 'Carregando...'
        }
    };

    constructor(
        private analyticsDashboardService: HomeService,
        private http: HttpClientVisitMed,
        private global: Globals
    ) {

        this.http.get(this.global.company + "/home").then((res: any) => {
            this.home = res.body;
            //console.log(this.home);
        }, (err => {
            this.home.company.name = "Falha ao buscar dados"; 
            console.log(err);

        }));

        // Get the widgets from the service
        this.widgets = this.analyticsDashboardService.widgets;

        // Register the custom chart.js plugin
        this.registerCustomChartJSPlugin();
    }

    /**
     * Register a custom plugin
     */
    registerCustomChartJSPlugin() {
        (<any>window).Chart.plugins.register({
            afterDatasetsDraw: function (chart, easing) {
                // Only activate the plugin if it's made available
                // in the options
                if (
                    !chart.options.plugins.xLabelsOnTop ||
                    (chart.options.plugins.xLabelsOnTop && chart.options.plugins.xLabelsOnTop.active === false)
                ) {
                    return;
                }

                // To only draw at the end of animation, check for easing === 1
                const ctx = chart.ctx;

                chart.data.datasets.forEach(function (dataset, i) {
                    const meta = chart.getDatasetMeta(i);
                    if (!meta.hidden) {
                        meta.data.forEach(function (element, index) {

                            // Draw the text in black, with the specified font
                            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                            const fontSize = 13;
                            const fontStyle = 'normal';
                            const fontFamily = 'Roboto, Helvetica Neue, Arial';
                            ctx.font = (<any>window).Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                            // Just naively convert to string for now
                            const dataString = dataset.data[index].toString() + 'k';

                            // Make sure alignment settings are correct
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            const padding = 15;
                            const startY = 24;
                            const position = element.tooltipPosition();
                            ctx.fillText(dataString, position.x, startY);

                            ctx.save();

                            ctx.beginPath();
                            ctx.setLineDash([5, 3]);
                            ctx.moveTo(position.x, startY + padding);
                            ctx.lineTo(position.x, position.y - padding);
                            ctx.strokeStyle = 'rgba(255,255,255,0.12)';
                            ctx.stroke();

                            ctx.restore();
                        });
                    }
                });
            }
        });
    }
}

