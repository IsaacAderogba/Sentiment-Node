class Topic {
  name: string;
  description: string;
  imageURL: string;

  constructor(name: string, description: string, imageURL: string) {
    this.name = name;
    this.description = description;
    this.imageURL = imageURL;
  }

  toJson() {
    return {
      name: this.name,
      description: this.description,
      imageURL: this.imageURL
    };
  }
}

export const topics = [
  new Topic("Technology", "Lorem ipsum lorem ipsum", "url"),
  new Topic("Autonomous Machines", "Lorem ipsum lorem ipsum", "url"),
  new Topic("Analysis", "Lorem ipsum lorem ipsum", "url"),
  new Topic("Development", "Lorem ipsum lorem ipsum", "url"),
  new Topic("Big Tech", "Lorem ipsum lorem ipsum", "url"),
  new Topic("Intelligence", "Lorem ipsum lorem ipsum", "url"),
  new Topic("Software Development", "Lorem ipsum lorem ipsum", "url"),
  new Topic("Product", "Lorem ipsum lorem ipsum", "url")
];
