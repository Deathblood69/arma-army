import { ARMIES, type ArmyType } from "../data";

export default function useArmy(army?: string) {
  if (!army) {
    throw new Error("parameter missing");
  }

  const side = army as ArmyType;

  return { army: ARMIES[side], side };
}
