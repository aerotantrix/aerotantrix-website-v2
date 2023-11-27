import { Injectable } from '@angular/core';
import { Alumni } from './models/alumni';

@Injectable({
  providedIn: 'root',
})
export class AlumniService {
  constructor() {}

  getAlumni(): Alumni[] {
    return [
      new Alumni(
        'assets/images/alumni/srinag.png',
        'Dr. P Srinag',
        'Honeywell'
      ),
      new Alumni(
        'assets/images/alumni/kushal.png',
        'Kushal Shekhar',
        'Deloitte'
      ),
      new Alumni(
        'assets/images/alumni/jeevan.png',
        'Jeevan M N',
        'Mercedes-Benz'
      ),
      new Alumni(
        'assets/images/alumni/vamsi.png',
        'Vamsi Krishna',
        'New York University'
      ),
      new Alumni(
        'assets/images/alumni/laxminarayan.png',
        'Shenoy Laxminarayan',
        'Technische Universität Dresden'
      ),
    ];
  }
}
