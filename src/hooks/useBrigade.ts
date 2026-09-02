import useArmy from "./useArmy.ts";

export default function useBrigade(army?: string, brigade?: string) {
  if (!army || !brigade) {
    throw new Error("parameter missing");
  }

  const { army: selectedArmy } = useArmy(army);

  if (!brigade) {
    throw new Error("army not defined");
  }

  const selectedBrigade = selectedArmy.subordinates?.find((subordinate) => {
    return subordinate.id?.toLowerCase() === brigade;
  });

  if (!selectedBrigade) {
    throw new Error("selectedBrigade not defined");
  }

  return { army: selectedArmy, brigade: selectedBrigade };
}
