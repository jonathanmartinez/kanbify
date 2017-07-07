import { Tag } from './tag';

export class Task {
  id: number;
  description: string;
  state: string;
  todoDate: Date;
  doingDate: Date;
  doneDate: Date;
  tags: Tag[];
}