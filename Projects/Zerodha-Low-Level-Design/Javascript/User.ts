export class User {
  constructor(
    public id: number,
    public name: string,
  ) {
    this.id = id;
    this.name = name;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }
}
