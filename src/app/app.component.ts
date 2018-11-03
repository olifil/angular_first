import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    new Post('Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis turpis ac sapien pulvinar congue. Donec imperdiet efficitur velit quis sollicitudin. Duis vehicula metus at gravida vestibulum.'),
    new Post('Mon deuxième post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis turpis ac sapien pulvinar congue. Donec imperdiet efficitur velit quis sollicitudin. Duis vehicula metus at gravida vestibulum.'),
    new Post('Mon troisième post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis turpis ac sapien pulvinar congue. Donec imperdiet efficitur velit quis sollicitudin. Duis vehicula metus at gravida vestibulum.')
  ];

}

class Post {
  
  title: string;
  content: string;
  created_at: Date;
  loveIts: number = 0;

  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.created_at = new Date();
  }
}
