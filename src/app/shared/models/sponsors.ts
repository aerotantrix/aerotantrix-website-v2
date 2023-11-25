export class Sponsors {
  image!: string;
  name!: string;
  tag!: string;
  url!: string;

  constructor(image: string, name: string, tag: string, url: string) {
    this.image = image;
    this.name = name;
    this.tag = tag;
    this.url = url;
  }
}
