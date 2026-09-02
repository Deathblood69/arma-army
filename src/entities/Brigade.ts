import { Unit } from "./Unit.ts";
import { NUMBER_PARTICULE, type UnitType } from "../data";
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
        newSubordinates.push({
          ...subordinate.unit,
          id: `${subordinate.unit.id}-${i + 1}`,
          name: `${i + 1}${NUMBER_PARTICULE[i] ?? NUMBER_PARTICULE[NUMBER_PARTICULE.length - 1]} ${subordinate.unit.name}`,
        });
      }
    });

    super({ id, name, type, commander, subordinates: newSubordinates });
  }
}
