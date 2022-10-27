import { BaseInterface } from './base.interface';
import { CourseInterface } from './course.interface';
import { UserInterface } from './user.interface';

export interface LessonInterface extends BaseInterface {
  name: string;
  description: string;
  video: string;
  image: string;
  author: UserInterface;
  course: CourseInterface;
}
