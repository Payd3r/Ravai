export const useCardExclusion = () => {
  return {
    isCardExcluded: () => false,
    filterExcludedProjects: <T extends { id: string }>(projects: T[]) => projects,
    resetExclusions: () => undefined,
    excludedCards: [] as string[]
  };
};
