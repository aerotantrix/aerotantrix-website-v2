import { Injectable } from '@angular/core';
import { Alumni } from './models/alumni';

@Injectable({
  providedIn: 'root',
})
export class AlumniService {
  constructor() {}

  getAlumni(): Alumni[] {
    return [
      new Alumni('assets/images/alumni/sharath.png', 'Srinag Sir', 'Honeywell'),
      new Alumni(
        'assets/images/alumni/sharath.png',
        'Kushal Shekhar',
        'Deloitte'
      ),
      new Alumni(
        'assets/images/alumni/sharath.png',
        'Vamsi Krishna',
        'New York University'
      ),
      new Alumni(
        'assets/images/alumni/sharath.png',
        'Jeevan M N',
        'Mercedes-Benz'
      ),
    ];
  }
}
