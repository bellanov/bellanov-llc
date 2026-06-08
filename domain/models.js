class Organization {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}

class Project {
  constructor(name, description, organization) {
    this.name = name;
    this.description = description;
    this.organization = organization; // Reference to the parent organization
  }
}