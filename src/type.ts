export interface Itask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isComplated: boolean;
  priority: "High"| "Medume" | "Low";
}
