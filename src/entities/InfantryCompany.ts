import { Unit } from "./Unit.ts";
import InfantrySection from "./InfantrySection.ts";
import CommandUnit from "./CommandUnit.ts";
import type { NatoAlphabet } from "../data";

export interface InfantryCompanyDTO {
  name: NatoAlphabet;
}

const sectionPerCompany = 3;
const startingCount = 1;

export default class InfantryCompany extends Unit {
  constructor({ name }: InfantryCompanyDTO) {
    const commander = new CommandUnit({
      id: name,
      name: "Company Command",
    });

    const subordinates: Unit[] = [];
    for (
      let sectionNumber = 0;
      sectionNumber < sectionPerCompany;
      sectionNumber++
    ) {
      subordinates.push(
        new InfantrySection({
          id: `${name} ${startingCount + sectionNumber}`,
          name: `Combat Section ${sectionNumber + 1}`,
        }),
      );
    }

    subordinates.push(
      new Unit({
        id: `${name} ${sectionPerCompany + 1}`,
        name: `Mortar Section`,
        type: "mortar",
      }),
    );

    subordinates.push(
      new Unit({
        id: `${name} ${sectionPerCompany + 2}`,
        name: `Recon Section`,
        type: "recon",
      }),
    );

    subordinates.push(
      new Unit({
        id: `${name} ${sectionPerCompany + 2}`,
        name: `Medical Section`,
        type: "medical",
      }),
    );

    super({
      id: name,
      name: `${name} Company`,
      type: "infantry",
      commander,
      subordinates,
    });
  }
}
