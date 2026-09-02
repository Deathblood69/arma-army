import { Unit } from "./Unit.ts";

export interface EngineerBattalionDTO {
  id?: string;
  name: string;
}

const combatCompanyCount = 2;

export default class EngineerBattalion extends Unit {
  constructor({ id, name }: EngineerBattalionDTO) {
    const commander = new Unit({
      id: "HHC",
      name: "Headquarters & Headquarters Co.",
    });
    const subordinates: Unit[] = [];

    subordinates.push(
      new Unit({
        id: "BSC",
        name: "Brigade Signal Co.",
        type: "communication",
      }),
    );
    subordinates.push(
      new Unit({ id: "MIC", name: "Military Intelligence Company" }),
    );

    for (let i = 0; i < combatCompanyCount; i++) {
      subordinates.push(
        new Unit({
          id: `CEC${i + 1}`,
          name: "Combat Engineer Co.",
          type: "engineer",
        }),
      );
    }
    subordinates.push(
      new Unit({ id: "FSC", name: "Forward Support Co.", color: "#ff8000" }),
    );

    super({ id, name, color: "#ffffff", type: "hq", commander, subordinates });
  }
}
