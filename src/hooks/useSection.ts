import useCompany from "./useCompany.ts";

export default function useSection(
  army?: string,
  brigade?: string,
  battalion?: string,
  company?: string,
  section?: string,
) {
  if (!army || !brigade || !battalion) {
    throw new Error("parameter missing");
  }

  const {
    army: selectedArmy,
    brigade: selectedBrigade,
    battalion: selectedBattalion,
    company: selectedCompany,
  } = useCompany(army, brigade, battalion, company);

  if (!selectedCompany) {
    throw new Error("selectedCompany not defined");
  }

  const selectedSection = selectedCompany.subordinates?.find((subordinate) => {
    return subordinate.id?.toLowerCase() === section;
  });

  if (!selectedSection) {
    throw new Error("selectedCompany not defined");
  }

  return {
    army: selectedArmy,
    brigade: selectedBrigade,
    battalion: selectedBattalion,
    company: selectedCompany,
    section: selectedSection,
  };
}
