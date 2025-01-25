import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MetaService } from '../../core/services/meta-tags.service';

@Component({
  selector: 'app-why-us',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss',
  standalone: true
})
export class WhyUsComponent {

  constructor( private readonly metaService: MetaService) {
    const metaDetails = {
      title: 'Why choose our Royal रसोई ?  | The Taste you deserve',
      description: 'Experience the Royal रसोई difference today. Let’s make healthy eating a delicious journey!',
      image: 'https://ucarecdn.com/e7306f47-376f-4c0b-9ea8-d6af7ee80e68/whyus.jpg',
      url: 'https://royalrasoyi.com/why-us',
      type: 'website'
    };
  
     this.metaService.updateMetaTags('why-us', metaDetails);
  }

}
