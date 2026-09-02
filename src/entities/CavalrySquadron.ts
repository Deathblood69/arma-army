import { Unit } from "./Unit.ts";

export interface CavalrySquadronDTO {
  id?: string;
  name: string;
}

const combatCompanyCount = 2;

export default class CavalrySquadron extends Unit {
  constructor({ id, name }: CavalrySquadronDTO) {
    const commander = new Unit({
      id: "HHC",
      name: "Headquarters & Headquarters Troop.",
    });
    const subordinates: Unit[] = [];

    for (let i = 0; i < combatCompanyCount; i++) {
      subordinates.push(
        new Unit({
          id: `MCT${i + 1}`,
          name: "Motorized Cavalry Troop",
          type: "recon",
        }),
      );
    }

    subordinates.push(
      new Unit({ id: "MCT", name: "Dismounted Cavalry Troop", type: "recon" }),
    );
    subordinates.push(
      new Unit({ id: "FSC", name: "Forward Support Co.", color: "#ff8000" }),
    );

    super({
      id,
      name,
      color: "#ffff00",
      type: "recon",
      commander,
      subordinates,
    });
  }
}
