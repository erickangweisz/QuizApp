import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../../_services';
import { Publication } from 'src/app/_models';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  publications: Array<Publication>;

  constructor(
    private publicationService: PublicationService
  ) {}

  ngOnInit() {
    this.publicationService.getAll()
      .subscribe((res: Object) => {
        this.publications = res['publications'];
      });
  }
}
