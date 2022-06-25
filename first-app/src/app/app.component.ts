import { Component } from '@angular/core';
import {Post} from './posts/post.model';


@Component({
  //it detects this app-root element and swaps it with the content of our component.
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
