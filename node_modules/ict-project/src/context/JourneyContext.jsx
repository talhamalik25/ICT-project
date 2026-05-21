import { createContext, useContext, useState, useCallback } from 'react';

const JourneyContext = createContext(null);

export function JourneyProvider({ children }) {
  const [selectedDegreeId, setSelectedDegreeId] = useState(null);
  const [selectedSpecId, setSelectedSpecId] = useState(null);
  const [activeSemester, setActiveSemester] = useState(1);

  const selectDegree = useCallback((id) => {
    setSelectedDegreeId(id);
    setSelectedSpecId(null);
    setActiveSemester(1);
  }, []);

  const selectSpecialization = useCallback((id) => {
    setSelectedSpecId(id);
    setActiveSemester(1);
  }, []);

  const resetJourney = useCallback(() => {
    setSelectedDegreeId(null);
    setSelectedSpecId(null);
    setActiveSemester(1);
  }, []);

  return (
    <JourneyContext.Provider
      value={{
        selectedDegreeId,
        selectedSpecId,
        activeSemester,
        setActiveSemester,
        selectDegree,
        selectSpecialization,
        resetJourney,
      }}
    >
      {children}
    </JourneyContext.Provider>
  );
}

export function useJourney() {
  const ctx = useContext(JourneyContext);
  if (!ctx) throw new Error('useJourney must be used within JourneyProvider');
  return ctx;
}
