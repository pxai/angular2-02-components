import {Component} from 'angular2/core';

/**
 * MyTitle
 * This is reusable component
 */
@Component({
    selector: 'my-title',
    template: `<header><h1>{{title}}</h1></header>`
})
export class MyTitleComponent { 
    private title : string = 'This is My Title component';
}
