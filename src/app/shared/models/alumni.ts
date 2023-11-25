export class Alumni {
  image!: string;
  name!: string;
  currentlyAt!: string;

  constructor(image: string, name: string, currentlyAt: string) {
    this.image = image;
    this.name = name;
    this.currentlyAt = currentlyAt;
  }
}
