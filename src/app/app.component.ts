import {Component} from '@angular/core';


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
