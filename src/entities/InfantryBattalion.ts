import { Unit } from "./Unit.ts";
import InfantryCompany from "./InfantryCompany.ts";
import CommandUnit from "./CommandUnit.ts";
import WeaponsCompany from "./WeaponsCompany.ts";
import type { NatoAlphabet } from "../data";
import SupportCompany from "./SupportCompany.ts";

export interface InfantryBattalionDTO {
  id?: string;
  name: string;
}

const combatCompanyCount = 3;

const companyNames: NatoAlphabet[] = [
  "Alpha",
  "Bravo",
  "Charlie",
  "Delta",
  "Echo",
  "Foxtrot",
];

export default class InfantryBattalion extends Unit {
  constructor({ id, name }: InfantryBattalionDTO) {
    const commander = new CommandUnit({
      id: "Hotel",
      name: "Headquarters & Headquarters Co.",
    });
    const subordinates: Unit[] = [];

    for (
      let companyNumber = 0;
      companyNumber < combatCompanyCount;
      companyNumber++
    ) {
      const name = companyNames[companyNumber];
      const company = new InfantryCompany({ name });
      subordinates.push(company);
    }

    subordinates.push(
      new WeaponsCompany({
        id: "Whisky",
        name: "Weapons",
      }),
    );
    subordinates.push(
      new SupportCompany({
        id: "Lima",
        name: "Forward Support Co.",
        color: "#ff8000",
      }),
    );

    super({ id, name, type: "infantry", commander, subordinates });
  }
}
