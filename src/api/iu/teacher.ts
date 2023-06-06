import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '/@/api/model/baseModel';
import { TeacherInfo, TeacherListResp } from './model/teacherModel';

enum Api {
  CreateTeacher = '/iu-api/ORG/teacher/create',
  UpdateTeacher = '/iu-api/ORG/teacher/update',
  GetTeacherList = '/iu-api/ORG/teacher/list',
  DeleteTeacher = '/iu-api/ORG/teacher/delete',
  GetTeacherById = '/iu-api/ORG/teacher',
}

/**
 * @description: Get teacher list
 */

export const getTeacherList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<TeacherListResp>>(
    { url: Api.GetTeacherList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new teacher
 */
export const createTeacher = (params: TeacherInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateTeacher, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the teacher
 */
export const updateTeacher = (params: TeacherInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateTeacher, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete teachers
 */
export const deleteTeacher = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteTeacher, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get teacher By ID
 */
export const getTeacherById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<TeacherInfo>>(
    { url: Api.GetTeacherById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
