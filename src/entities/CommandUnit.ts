import { Unit } from "./Unit.ts";
import type { NatoAlphabet } from "../data";

export interface CommandUnitDTO {
  id: NatoAlphabet;
  name: string;
}

export default class CommandUnit extends Unit {
  constructor({ id, name }: CommandUnitDTO) {
    const commander = new Unit({
      id: `${id}`,
      name: "Command",
    });

    const subordinates: Unit[] = [];

    super({ id, name, type: "hq", commander, subordinates });
  }
}
