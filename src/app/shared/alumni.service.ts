import { Injectable } from '@angular/core';
import { Alumni } from './models/alumni';

@Injectable({
  providedIn: 'root',
})
export class AlumniService {
  constructor() {}

  getAlumni(): Alumni[] {
    return [
      new Alumni('assets/images/alumni/sharath.png', 'Dr. Srinag', 'Honeywell'),
      new Alumni(
        'assets/images/alumni/sharath.png',
        'Kushal Shekhar',
        'Deloitte'
      ),
      new Alumni(
        'assets/images/alumni/sharath.png',
        'Jeevan M N',
        'Mercedes-Benz'
      ),
      new Alumni(
        'assets/images/alumni/sharath.png',
        'Vamsi Krishna',
        'New York University'
      ),
    ];
  }
}
