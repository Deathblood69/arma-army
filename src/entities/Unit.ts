import { AbstractEntity } from "./AbstractEntity.ts";
import type { UnitType } from "../data";

export interface UnitDTO {
  id?: string;
  name: string;
  color?: string;
  type?: UnitType;
  commander?: UnitDTO;
  subordinates?: UnitDTO[];
}

export class Unit extends AbstractEntity {
  name: string;
  color?: string;
  type?: UnitType;
  commander?: Unit;
  subordinates?: Unit[];

  constructor({ id, name, color, type, commander, subordinates }: UnitDTO) {
    super(id);
    this.name = name;
    this.color = color;
    this.type = type;
    if (commander) {
      this.commander = new Unit(commander);
    }
    if (subordinates) {
      this.subordinates = subordinates.map(
        (subordinate) => new Unit(subordinate),
      );
    }
  }
}
