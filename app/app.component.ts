/**
 * Created by user on 12/9/2016.
 */
import {Component} from "@angular/core";
@Component({
  selector: 'my-app',
  styleUrls: ['app/app.component.css'],
  template: `<h1>{{title}}</h1>
<nav>
    <a routerLink="/products">Products</a>
    <a routerLink="/dashboard">Dashboard</a>
</nav>
    <router-outlet></router-outlet>
`
})

export class AppComponent{
  title = 'List of Products';
}
