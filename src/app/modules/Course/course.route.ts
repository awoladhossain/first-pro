import express from 'express';
import validateRequest from '../../middlewares/validaterequest';
import { courseValidations } from './course.validation';
import { courseControllers } from './course.controller';

const router = express.Router();

router.get('/:id', courseControllers.getSingleCourse);

router.post(
  '/create-course',
  validateRequest(courseValidations.createCourseValidationSchema),
  courseControllers.createCourse,
);

router.patch(
  '/:id',
  validateRequest(courseValidations.updateCourseValidationSchema),
  courseControllers.updateCourse,
);

router.put(
  '/:courseId/assign-faculties',
  validateRequest(courseValidations.facultiesWithCourseValidationSchema),
  courseControllers.assignFacultiesWithCourse,
);

router.delete(
  '/:courseId/remove-faculties',
  validateRequest(courseValidations.facultiesWithCourseValidationSchema),
  courseControllers.removeFacultiesFromCourse,
);

router.get('/', courseControllers.getAllCourses);

router.delete('/:id', courseControllers.deleteCourse);

export const CourseRoutes = router;
