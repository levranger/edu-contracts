import { BaseInterface } from "./base.interface";
import { LessonInterface } from "./lesson.interface";
export interface CourseInterface extends BaseInterface {
    name: string;
    description: string;
    image: string;
    authorId: number;
    lessons: LessonInterface[];
}
