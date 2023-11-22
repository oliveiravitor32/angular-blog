import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string = '../../../assets/placeholder.png';
  contentTitle: string = 'Title';
  contentDescription: string = 'Failed to load news...';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponents(this.id);
  }

  setValuesToComponents(id: string | null) {
    const result = dataFake.filter((news) => news.newsId.toString() == id)[0];
    if (result != undefined) {
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photo;
    }
  }
}
