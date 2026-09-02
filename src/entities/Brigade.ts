import { Unit } from "./Unit.ts";
import type { UnitType } from "../data";
import CommandUnit from "./CommandUnit.ts";

export interface BrigadeDTO {
  id?: string;
  name: string;
  type: UnitType;
  subordinates: { unit: Unit; count: number }[];
}

export default class Brigade extends Unit {
  constructor({ id, name, type, subordinates }: BrigadeDTO) {
    const commander = new CommandUnit({
      id: "Sierra",
      name: "Headquarters & Headquarters Co.",
    });

    const newSubordinates: Unit[] = [];
    subordinates.map((subordinate) => {
      for (let i = 0; i < subordinate.count; i++) {
        newSubordinates.push(subordinate.unit);
      }
    });

    super({ id, name, type, commander, subordinates: newSubordinates });
  }
}
