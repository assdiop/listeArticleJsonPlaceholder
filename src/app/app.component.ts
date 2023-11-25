import { Component } from '@angular/core';
import { JsonplaceholderService } from './services/jsonplaceholder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vt-angular';

  users!: any[];
  photos!: any[];
  searchMe!: string;

  constructor(private jsonplaceholderService: JsonplaceholderService) { }

  ngOnInit() {
    this.jsonplaceholderService.getUsers().subscribe(users => {
      this.users = users;
    });
    this.jsonplaceholderService.getPhotos().subscribe(photos => {
      this.photos = photos;
    });
  }
  rechercher() {
    this.users.filter(ele => ele.name == this.searchMe)
  }
}
