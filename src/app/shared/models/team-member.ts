export class TeamMember {
  image!: string;
  name!: string;
  designation!: string;

  constructor(image: string, name: string, designation: string) {
    this.image = image;
    this.name = name;
    this.designation = designation;
  }
}
