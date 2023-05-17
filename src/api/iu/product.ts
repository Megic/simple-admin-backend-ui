import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '/@/api/model/baseModel';
import { ProductInfo, ProductListResp } from './model/productModel';

enum Api {
  CreateProduct = '/iu-api/INF/product/create',
  UpdateProduct = '/iu-api/INF/product/update',
  GetProductList = '/iu-api/INF/product/list',
  DeleteProduct = '/iu-api/INF/product/delete',
  GetProductById = '/iu-api/INF/product',
}

/**
 * @description: Get product list
 */

export const getProductList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<ProductListResp>>(
    { url: Api.GetProductList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new product
 */
export const createProduct = (params: ProductInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateProduct, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the product
 */
export const updateProduct = (params: ProductInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateProduct, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete products
 */
export const deleteProduct = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteProduct, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get product By ID
 */
export const getProductById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<ProductInfo>>(
    { url: Api.GetProductById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
