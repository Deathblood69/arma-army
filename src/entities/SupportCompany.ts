import { Unit } from "./Unit.ts";
import type { NatoAlphabet } from "../data";

export interface SupportCompanyDTO {
  id: NatoAlphabet;
  name: string;
  color: string;
}

export default class SupportCompany extends Unit {
  constructor({ id, name, color }: SupportCompanyDTO) {
    const commander = new Unit({
      id: `${id}`,
      name: "Company Command",
    });

    const subordinates: Unit[] = [];
    subordinates.push(
      new Unit({
        id: `${id} 1`,
        name: `Distribution Section`,
        type: "logistic",
      }),
    );

    subordinates.push(
      new Unit({
        id: `${id} 2`,
        name: `Maintenance Section`,
        type: "maintenance",
      }),
    );

    subordinates.push(
      new Unit({
        id: `${id} 2`,
        name: `Medical Section`,
        type: "medical",
      }),
    );

    super({
      id: id,
      name: `${name} Company`,
      type: "infantry",
      color,
      commander,
      subordinates,
    });
  }
}
