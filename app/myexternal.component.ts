import {Component} from 'angular2/core';

/**
 * MyExternal
 * This is reusable component that loads content from
 * another file
 */
@Component({
    selector: 'my-external',
    templateUrl: 'app/external.html'
})
export class MyExternalComponent { 
    private title : string = 'Overrides other titles';
    private subtitle : string = 'This is in a external template';
}
