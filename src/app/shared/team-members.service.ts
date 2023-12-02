import { Injectable } from '@angular/core';
import { TeamMember } from './models/team-member';

@Injectable({
  providedIn: 'root',
})
export class TeamMembersService {
  constructor() {}

  getTeamMembers(): TeamMember[] {
    return [
      new TeamMember(
        'assets/images/team-members/Hemant.png',
        'Hemant Sahu',
        'Captain'
      ),
      new TeamMember(
        'assets/images/team-members/Stuthi.png',
        'Stuthi Jaisimha',
        'Team Manager'
      ),
      new TeamMember(
        'assets/images/team-members/sharath.png',
        'Sharath C. Nirmala',
        'R&D Lead'
      ),
      new TeamMember(
        'assets/images/team-members/kanishk.png',
        'Kanishk Raj',
        'Fabrication Lead'
      ),
      new TeamMember(
        'assets/images/team-members/Keerthan.png',
        'Keerthan P',
        'Operations & Marketing Lead'
      ),
      new TeamMember(
        'assets/images/team-members/shreyas.png',
        'Shreyas Aradhya',
        'Electronics Lead'
      ),
      new TeamMember(
        'assets/images/team-members/ATUL.png',
        'Atul Kumar',
        'Core Member'
      ),
      new TeamMember(
        'assets/images/team-members/channnakeshava.png',
        'Channakeshava M',
        'Core Member'
      ),
      new TeamMember(
        'assets/images/team-members/Shravya.png',
        'Shravya Aravind',
        'Core Member'
      ),
      new TeamMember(
        'assets/images/team-members/vivek.png',
        'Vivek Rao',
        'Core Member'
      ),
      new TeamMember(
        'assets/images/team-members/ABHISHEK.png',
        'Abhishek M.B.',
        'Core Member'
      ),
      new TeamMember(
        'assets/images/team-members/DARSHAN.png',
        'Darshan Y',
        'Core Member'
      ),
      new TeamMember(
        'assets/images/team-members/Nidhi.png',
        'Nidhi Prashant Patil',
        'Core Member'
      ),
      new TeamMember(
        'assets/images/team-members/SAATWIK.png',
        'Saathwik',
        'Core Member'
      ),
      new TeamMember(
        'assets/images/team-members/aditi.png',
        'Aditi',
        'Core Member'
      ),
      new TeamMember(
        'assets/images/team-members/akshay.png',
        'Akshay S P',
        'Core Member'
      ),
      new TeamMember(
        'assets/images/team-members/veeresh.png',
        'C N Veeresh',
        'Core Member'
      ),
      new TeamMember(
        'assets/images/team-members/gururaj.png',
        'Gururaj',
        'Core Member'
      ),
      new TeamMember(
        'assets/images/team-members/tharun.png',
        'Tharun S Gowda',
        'Core Member'
      ),
    ];
  }
}
