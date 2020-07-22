import Address from "./Address.ts";
import {
  makeDateForComparison,
  differenceInYears,
  today,
} from "../util/date.ts";

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
    const { bornDay } = this;
    const yearsHeMakesThisYear = differenceInYears(today, bornDay);

    // see if has made years this year
    const todayForComparison = makeDateForComparison(
      today,
    );
    const bornDayForComparison = makeDateForComparison(
      bornDay,
    );

    const age = bornDayForComparison > todayForComparison
      ? yearsHeMakesThisYear - 1
      : yearsHeMakesThisYear;

    return age;
  }
}
