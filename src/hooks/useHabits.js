import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import * as habitService from "../service/habitService";

export const useHabits = () => {
  const { user } = useAuth();
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    if (user) {
      setHabits(habitService.getHabits(user));
    } else {
      setHabits([]);
    }
  }, [user]);

  const addHabit = (habit) => {
    const updated = habitService.addHabit(user, habit);
    setHabits(updated);
  };

  const deleteHabit = (id) => {
    const updated = habitService.deleteHabit(user, id);
    setHabits(updated);
  };

  const toggleHabit = (id) => {
    const updated = habitService.toggleHabit(user, id);
    setHabits(updated);
  };

  return {
    habits,
    addHabit,
    deleteHabit,
    toggleHabit,
  };
};