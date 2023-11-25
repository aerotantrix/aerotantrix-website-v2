import { AlumniService } from './../../shared/alumni.service';
import { Component } from '@angular/core';
import { Alumni } from 'src/app/shared/models/alumni';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.scss'],
})
export class AlumniComponent {
  alumni!: Alumni[];

  constructor(private alumniService: AlumniService) {
    this.alumni = this.alumniService.getAlumni();
  }
}
