import Address from "./Address.ts";
import { getDifferenceInFullYears, today } from "../util/dateUtils.ts";

class Person {
  firstName: string;
  lastName: string;
  address: Address;
  phoneNumber: string;
  bornDay: Date;

  constructor(
    firstName: string,
    lastName: string,
    address: Address,
    phoneNumber: string,
    bornDay: Date,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.bornDay = bornDay;
  }

  // output: Number of years the person has
  get age(): number {
    return getDifferenceInFullYears(today, this.bornDay);
  }
}

const mikeAddress = new Address("h", "a", "n", "f", "d");
const mike = new Person(
  "power",
  "shit",
  mikeAddress,
  "sdfa",
  new Date(2007, 6, 23),
);
console.log(mike.age);
