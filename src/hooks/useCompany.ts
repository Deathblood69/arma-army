import useBattalion from "./useBattalion.ts";

export default function useCompany(
  army?: string,
  brigade?: string,
  battalion?: string,
  company?: string,
) {
  if (!army || !brigade || !battalion) {
    throw new Error("parameter missing");
  }

  const {
    army: selectedArmy,
    brigade: selectedBrigade,
    battalion: selectedBattalion,
  } = useBattalion(army, brigade, battalion);

  if (!selectedBrigade) {
    throw new Error("selectedBrigade not defined");
  }

  const selectedCompany = selectedBattalion.subordinates?.find(
    (subordinate) => {
      return subordinate.id?.toLowerCase() === company;
    },
  );

  if (!selectedCompany) {
    throw new Error("selectedCompany not defined");
  }

  return {
    army: selectedArmy,
    brigade: selectedBrigade,
    battalion: selectedCompany,
    company: selectedCompany,
  };
}
