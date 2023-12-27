import express from 'express';
import validateRequest from '../../middlewares/validaterequest';
import { AcademicDepartmentValidation } from './academicDepartment.Validation';
import { AcademicDepartmentControllers } from './academicDepartment.controler';

const router = express.Router();

router.post(
  '/create-academic-department',
  // validateRequest(
  //   AcademicDepartmentValidation.createAcademicDepartmentValidationSchema,
  // ),
  AcademicDepartmentControllers.createAcademicDepartmemt,
);

router.get('/', AcademicDepartmentControllers.getAllAcademicDepartments);

router.get(
  '/:departmentId',
  AcademicDepartmentControllers.getSingleAcademicDepartment,
);

router.patch(
  '/:departmentId',
  validateRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentControllers.updateAcademicDeartment,
);

export const AcademicDepartmentRoutes = router;
