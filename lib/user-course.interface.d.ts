import { BaseInterface } from "./base.interface";
import { CourseInterface } from "./course.interface";
import { UserInterface } from "./user.interface";
export interface UserCourseInterface extends BaseInterface {
    userId: number;
    course: CourseInterface;
    user: UserInterface;
    courseId: number;
    isActive: boolean;
}
