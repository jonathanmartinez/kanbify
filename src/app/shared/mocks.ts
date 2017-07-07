import { Task } from '../models/task';
import { Tag } from '../models/tag';
import { Color } from '../models/color';

export class Mocks {
  public static COLORS: Color[] = [
    {id: 1, rgb: '#73c990'}, //green
    {id: 2, rgb: '#6494ed'}, //blue
    {id: 3, rgb: '#d46770'}, //red
    {id: 4, rgb: '#c477db'}, //purple
    {id: 5, rgb: '#d19a66'}, //orange
    {id: 6, rgb: '#f06292'}, //pink
    {id: 7, rgb: '#fff176'}, //yellow
    {id: 8, rgb: '#795548'}, //brown
    {id: 9, rgb: '#4db6ac'}, //teal
    {id: 10, rgb: '#80deea'}, //aqua
  ];

  public static TAGS: Tag[] = [
    { id: 1, name: 'New Tag', color: Mocks.COLORS[0] },
  ];

  public static TAGS_DEMO: Tag[] = [
    { id: 1, name: 'Design', color: Mocks.COLORS[0] },
    { id: 2, name: 'Development', color: Mocks.COLORS[1] },
    { id: 3, name: 'Marketing', color: Mocks.COLORS[2] },
    { id: 4, name: 'Testing', color: Mocks.COLORS[3] },
    { id: 5, name: 'Meetings', color: Mocks.COLORS[4] },
  ];

  public static TASKS: Task[] = [
    { id: 1, description: 'New Task', state: 'todo', todoDate: new Date(), doingDate: null, doneDate: null, tags: [Mocks.TAGS[0]]},
  ];

  public static TASKS_DEMO: Task[] = [
    { id: 1, description: 'Design logo', state: 'todo', todoDate: new Date(), doingDate: null, doneDate: null, tags: [Mocks.TAGS[0]]},
    { id: 2, description: 'Buy domain', state: 'todo', todoDate: new Date(), doingDate: null, doneDate: null, tags: [Mocks.TAGS[0], Mocks.TAGS[1]]},
    { id: 3, description: 'Return books to the library', state: 'todo', todoDate: new Date(), doingDate: null, doneDate: null, tags: [Mocks.TAGS[0]]},
    { id: 4, description: 'Skype with Patrick', state: 'doing', todoDate: new Date(), doingDate: null, doneDate: null, tags: [Mocks.TAGS[0]]},
    { id: 5, description: 'Read briefing', state: 'doing', todoDate: new Date(), doingDate: null, doneDate: null, tags: [Mocks.TAGS[0]]},
    { id: 6, description: 'SCRUM meeting', state: 'done', todoDate: new Date(), doingDate: null, doneDate: null, tags: [Mocks.TAGS[0]]},
  ];
}