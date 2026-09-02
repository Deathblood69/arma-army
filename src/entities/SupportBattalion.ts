import { Unit } from "./Unit.ts";

export interface SupportBattalionDTO {
  id?: string;
  name: string;
}

export default class SupportBattalion extends Unit {
  constructor({ id, name }: SupportBattalionDTO) {
    const commander = new Unit({
      id: "HHC",
      name: "Headquarters & Headquarters Co.",
    });
    const subordinates: Unit[] = [];

    subordinates.push(
      new Unit({ id: "DC", name: "Distribution Company", type: "logistic" }),
    );
    subordinates.push(
      new Unit({
        id: "FMC",
        name: "Field Maintenance Company",
        type: "maintenance",
      }),
    );
    subordinates.push(
      new Unit({ id: "MC", name: "Medical Company", type: "medical" }),
    );

    super({ id, name, color: "#ff8000", type: "hq", commander, subordinates });
  }
}
