import {Component} from '@angular/core';
import {MyTitleComponent} from './mytitle.component';
import {MyExternalComponent} from './myexternal.component';

/**
 * Shows how to use different components
 * External my-title
 * External with templateUrl
 */
@Component({
    selector: 'components-app',
    template: `<div>
                <my-title></my-title>
                <my-external></my-external>
               </div>`
})
export class AppComponent {

}