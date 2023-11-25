export class Contact {
  size!: string;
  image!: string;
  name!: string;
  tag1!: string;
  tag2!: string;

  constructor(
    size: string,
    image: string,
    name: string,
    tag1: string,
    tag2: string
  ) {
    this.size = size;
    this.image = image;
    this.name = name;
    this.tag1 = tag1;
    this.tag2 = tag2;
  }
}
