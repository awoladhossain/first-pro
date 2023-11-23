import { Student } from './student.model';
import { TStudent } from './students.interface';

const createStudentIntoDB = async (student: TStudent) => {
  if (await Student.isUserExists(student.id)) {
    throw new Error('User Already exists !');
  }

  const result = await Student.create(student); //** we use here built in static method that is provied by mongooes */

  // *** now we use here instance method that is provied by mongooes

  // const studentInstance = new Student(student)// create an instancce

  // if (await studentInstance.isUserExit(student.id)) {
  //   throw new Error('User Already exists !');
  // }

  // const result = await studentInstance.save()

  return result;
};

// *** get from db

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentsFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await Student.aggregate([{ $match: { id: id } }]);
  return result;
};

const deleteStudentsFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
  deleteStudentsFromDB,
};
