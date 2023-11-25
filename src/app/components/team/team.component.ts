import { Component } from '@angular/core';
import { TeamMember } from 'src/app/shared/models/team-member';
import { TeamMembersService } from 'src/app/shared/team-members.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  teamMembers!: TeamMember[];

  constructor(private teamMembersService: TeamMembersService) {
    this.teamMembers = this.teamMembersService.getTeamMembers();
  }
}
