import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '/@/api/model/baseModel';
import { StudentInfo, StudentListResp } from './model/studentModel';

enum Api {
  CreateStudent = '/iu-api/ORG/student/create',
  UpdateStudent = '/iu-api/ORG/student/update',
  GetStudentList = '/iu-api/ORG/student/list',
  DeleteStudent = '/iu-api/ORG/student/delete',
  GetStudentById = '/iu-api/ORG/student',
}

/**
 * @description: Get student list
 */

export const getStudentList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<StudentListResp>>(
    { url: Api.GetStudentList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new student
 */
export const createStudent = (params: StudentInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateStudent, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the student
 */
export const updateStudent = (params: StudentInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateStudent, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete students
 */
export const deleteStudent = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteStudent, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get student By ID
 */
export const getStudentById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<StudentInfo>>(
    { url: Api.GetStudentById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
