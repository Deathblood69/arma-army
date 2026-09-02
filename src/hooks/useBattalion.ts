import useBrigade from "./useBrigade.ts";

export default function useBattalion(
  army?: string,
  brigade?: string,
  battalion?: string,
) {
  if (!army || !brigade || !battalion) {
    throw new Error("parameter missing");
  }

  const { army: selectedArmy, brigade: selectedBrigade } = useBrigade(
    army,
    brigade,
  );

  if (!selectedBrigade) {
    throw new Error("selectedBrigade not defined");
  }

  const selectedBattalion = selectedBrigade.subordinates?.find(
    (subordinate) => {
      return subordinate.id?.toLowerCase() === battalion;
    },
  );

  if (!selectedBattalion) {
    throw new Error("selectedBattalion not defined");
  }

  return {
    army: selectedArmy,
    brigade: selectedBrigade,
    battalion: selectedBattalion,
  };
}
