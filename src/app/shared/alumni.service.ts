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
        'Kushal Shekhar Pradhan',
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
      new Alumni(
        'assets/images/alumni/maithily.png',
        'Maithily Ramesh Puranik',
        'Deloitte'
      ),
      new Alumni(
        'assets/images/alumni/sohan.png',
        'Sohan Purushan',
        'Larsen & Toubro'
      ),
      new Alumni(
        'assets/images/alumni/tejas.png',
        'Tejas Basavaraj',
        'VÆRIDION'
      ),
      new Alumni(
        'assets/images/alumni/shridhar.png',
        'Sharath Shridhar Hegde',
        'Altair'
      ),
      new Alumni(
        'assets/images/alumni/naseel.png',
        'Naseel Sinan',
        'The University of Manchester'
      ),
      new Alumni(
        'assets/images/alumni/vaishnavi.png',
        'Vaishnavi',
        'Indian Airforce'
      ),
    ];
  }
}
