export interface IIcon {
  name: string; // ex: 'calendar-blank-outline'
  color: string; // ex: '#2196F3'
}

export interface ITask {
  id: number;
  title: string;
  description?: string;
  priority: number;
  icon: IIcon;
}