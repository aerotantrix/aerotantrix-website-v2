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
        'assets/images/team-members/sharath.png',
        'Hemant Sahu',
        'Captain'
      ),
      new TeamMember(
        'assets/images/team-members/sharath.png',
        'Stuthi Jaisimha',
        'Team Manager'
      ),
      new TeamMember(
        'assets/images/team-members/sharath.png',
        'Sharath C. Nirmala',
        'R&D Lead'
      ),
      new TeamMember(
        'assets/images/team-members/sharath.png',
        'Kanishk Raj',
        'Fabrication Lead'
      ),
      new TeamMember(
        'assets/images/team-members/sharath.png',
        'Keerthan P',
        'Operations & Marketing Lead'
      ),
      new TeamMember(
        'assets/images/team-members/sharath.png',
        'Shreyas Aradhya',
        'Electronics Lead'
      ),
      new TeamMember(
        'assets/images/team-members/sharath.png',
        'Atul Kumar',
        'Core Member'
      ),
      new TeamMember(
        'assets/images/team-members/sharath.png',
        'Channakeshava',
        'Core Member'
      ),
      new TeamMember(
        'assets/images/team-members/sharath.png',
        'Shravya Aravind',
        'Core Member'
      ),
      new TeamMember(
        'assets/images/team-members/sharath.png',
        'Vivek Rao',
        'Core Member'
      ),
      new TeamMember(
        'assets/images/team-members/sharath.png',
        'Abhishek M.B.',
        'Core Member'
      ),
      new TeamMember(
        'assets/images/team-members/sharath.png',
        'Darshan Y.',
        'Core Member'
      ),
      new TeamMember(
        'assets/images/team-members/sharath.png',
        'Nidhi Patil',
        'Core Member'
      ),
      new TeamMember(
        'assets/images/team-members/sharath.png',
        'Vivek Rao',
        'Core Member'
      ),
    ];
  }
}
