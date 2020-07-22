class Address {
  country: string;
  state: string;
  city: string;
  street: string;
  postalCode: string;

  constructor(
    country: string,
    state: string,
    city: string,
    street: string,
    postalCode: string
  ) {
    this.country = country;
    this.state = state;
    this.city = city;
    this.street = street;
    this.postalCode = postalCode;
  }
}

export default Address;
