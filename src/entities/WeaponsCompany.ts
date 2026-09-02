import { Unit } from "./Unit.ts";
import type { NatoAlphabet } from "../data";

export interface WeaponsCompanyDTO {
  id: NatoAlphabet;
  name: string;
}

const sectionPerCompany = 2;
const startingCount = 1;

export default class WeaponsCompany extends Unit {
  constructor({ id, name }: WeaponsCompanyDTO) {
    const commander = new Unit({
      id: `${id}`,
      name: "Company Command",
    });

    const subordinates: Unit[] = [];
    for (
      let sectionNumber = 0;
      sectionNumber < sectionPerCompany;
      sectionNumber++
    ) {
      subordinates.push(
        new Unit({
          id: `${id} ${startingCount + sectionNumber}`,
          name: `Weapons Section ${sectionNumber + 1}`,
          type: "weapon",
        }),
      );
    }

    subordinates.push(
      new Unit({
        id: `${id} ${sectionPerCompany + 1}`,
        name: `Mortar Section`,
        type: "mortar",
      }),
    );

    super({
      id: id,
      name: `${name} Company`,
      type: "infantry",
      commander,
      subordinates,
    });
  }
}
