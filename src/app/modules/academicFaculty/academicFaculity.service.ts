import { academicFacultyM } from './academicFaculity.model';
import { TAcademicFaculty } from './academicFaculty.interface';

const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await academicFacultyM.create(payload);
  return result;
};

const getAllAcademicFaculitesFromDB = async () => {
  const result = await academicFacultyM.find();
  return result;
};

const getSingleAcademicFacultyFromDB = async (id: string) => {
  const result = await academicFacultyM.findById(id);
  return result;
};

const updateacademicFacultyIntoDB = async (
  id: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const result = await academicFacultyM.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicFaculityService = {
  createAcademicFacultyIntoDB,
  getAllAcademicFaculitesFromDB,
  getSingleAcademicFacultyFromDB,
  updateacademicFacultyIntoDB,
};
