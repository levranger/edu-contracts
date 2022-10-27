import { BaseInterface } from './base.interface';
import RolesEnum from './role.enum';
import { LessonInterface } from './lesson.interface';
import { UserCourseInterface } from './user-course.interface';

export interface UserInterface extends BaseInterface {
  email: string;
  password: string;
  name: string;
  role: RolesEnum;
  lessons: LessonInterface[];
  courses: UserCourseInterface[];
}
