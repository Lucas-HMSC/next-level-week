interface HabitProps {
  completed: number;
}

export function Habit({ completed }: HabitProps) {
  return (
    <h1>{completed} Habits</h1>
  );
};