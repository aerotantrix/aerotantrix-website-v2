import { Injectable } from '@angular/core';
import { Contact } from './models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor() {}

  getContacts(): Contact[] {
    return [
      new Contact(
        'Large',
        'assets/images/contacts/srikanth.png',
        'Mr. N S Srikanth',
        'Club Coordinator',
        '+91 97414 90286'
      ),
      new Contact(
        'Large',
        'assets/images/contacts/Hemant.png',
        'Hemant Sahu',
        'Captain',
        '+91 70009 47530'
      ),
      new Contact(
        'Large',
        'assets/images/contacts/gmail.png',
        'Gmail',
        '',
        'aerotantrix@nie.ac.in'
      ),
      new Contact(
        'Large',
        'assets/images/contacts/instagram.png',
        'Instagram',
        '',
        ''
      ),
      // new Contact(
      //   'Large',
      //   'assets/images/contacts/github.png',
      //   'GitHub',
      //   '',
      //   'aerotantrix'
      // ),
      new Contact(
        'Large',
        'assets/images/contacts/ketto.png',
        'Ketto',
        '',
        'Support Us'
      ),
    ];
  }
}
