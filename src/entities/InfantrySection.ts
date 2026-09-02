import { Unit } from "./Unit.ts";

export interface InfantrySectionDTO {
  id: string;
  name: string;
}

const soliderPerSquad = 4;

export default class InfantrySection extends Unit {
  constructor({ id, name }: InfantrySectionDTO) {
    const commander = new Unit({
      id: `${id}-1`,
      name: "Section Command",
      type: "hq",
    });

    const subordinates: Unit[] = [];
    for (let squadNumber = 0; squadNumber < soliderPerSquad; squadNumber++) {
      subordinates.push(
        new Unit({
          id: `${id}-${squadNumber + 2}`,
          name: `Squad ${squadNumber + 1}`,
          type: "infantry",
        }),
      );
    }

    subordinates.push(
      new Unit({
        id: `${id}-${soliderPerSquad + 2}`,
        name: `Weapons Squad`,
        type: "weapon",
      }),
    );

    super({
      id,
      name,
      type: "infantry",
      commander,
      subordinates,
    });
  }
}
