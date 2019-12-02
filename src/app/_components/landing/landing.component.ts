import { Component, OnInit } from '@angular/core';
import { PublicationService,
         AnswerService } from '../../_services';
import { Publication,
         Answer } from 'src/app/_models';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  publications: Array<Publication>;
  publicationsId: Array<string>;

  constructor(
    private publicationService: PublicationService,
    private answerService: AnswerService
  ) {}

  ngOnInit() {
    this.getAllPublications();
  }

  getAllPublications(): void {
    this.publicationService.getAll()
      .subscribe((res: Object) => {
        this.publications = res['publications'];
      });
  }
}
