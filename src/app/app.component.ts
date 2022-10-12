import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'myApp';
    year = new Date().getFullYear();
    date = new Date().toLocaleString();
        
}
