import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MetaService } from '../../core/services/meta-tags.service';

@Component({
  selector: 'app-why-us',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss'
})
export class WhyUsComponent {

  constructor( private readonly metaService: MetaService, private readonly cdr: ChangeDetectorRef) {
    const metaDetails = {
      title: 'Why choose our Royal रसोई ?  | The Taste you deserve',
      description: 'Experience the Royal रसोई difference today. Let’s make healthy eating a delicious journey!',
      image: 'https://royalrasoyi.com/assets/images/why-us.jpg',
      url: 'https://royalrasoyi.com/',
      type: 'website'
    };
  
     this.metaService.updateMetaTags('WhyUs', metaDetails);
  }

}
