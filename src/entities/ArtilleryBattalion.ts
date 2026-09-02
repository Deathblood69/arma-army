import { Unit } from "./Unit.ts";

export interface ArtilleryBattalionDTO {
  id?: string;
  name: string;
}

const combatCompanyCount = 2;

export default class ArtilleryBattalion extends Unit {
  constructor({ id, name }: ArtilleryBattalionDTO) {
    const commander = new Unit({
      id: "HHC",
      name: "Headquarters & Headquarters Battery",
    });
    const subordinates: Unit[] = [];

    subordinates.push(
      new Unit({ id: "FB", name: "Fires Battery (155 mm)", type: "artillery" }),
    );

    for (let i = 0; i < combatCompanyCount; i++) {
      subordinates.push(
        new Unit({
          id: `FB${i + 1}`,
          name: "Fires Battery (105 mm)",
          type: "mortar",
        }),
      );
    }

    subordinates.push(
      new Unit({ id: "FB", name: "Target Acquisition Platoon", type: "radar" }),
    );
    subordinates.push(
      new Unit({ id: "FSC", name: "Forward Support Co.", color: "#ff8000" }),
    );

    super({
      id,
      name,
      color: "#ff0000",
      type: "artillery",
      commander,
      subordinates,
    });
  }
}
