import {Component} from 'angular2/core';
import {MyTitleComponent} from './mytitle.component'

/**
 * Shows how to use different components
 * External my-title
 * External with templateUrl
 */
@Component({
    selector: 'components-app',
    template: `<section>
                <my-title></my-title>
               </section>
            `
})
export class AppComponent {

}
