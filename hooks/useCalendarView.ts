import { useState, useCallback } from 'react';

type ViewType = 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay' | 'listWeek';

export const useCalendarView = (initialView: ViewType = 'timeGridWeek') => {
  const [currentView, setCurrentView] = useState<ViewType>(initialView);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = useCallback(() => {
    setIsNavOpen(prev => !prev);
  }, []);

  const changeView = useCallback((view: ViewType) => {
    setCurrentView(view);
    setIsNavOpen(false);
  }, []);

  return {
    currentView,
    isNavOpen,
    toggleNav,
    changeView,
  };
}; 