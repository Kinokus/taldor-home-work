export class Movie {

  constructor(id: number, name: string, category: number, linkImdb: string, linkAdditional: string) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.linkImdb = linkImdb;
    this.linkAdditional = linkAdditional;
  }

  id: number;
  name: string;
  category: number;
  linkImdb: string;
  linkAdditional: string;
}
