import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { formatToDateTime } from '/@/utils/dateUtil';
import { updateInventory } from '/@/api/iu/inventory';
import { Switch } from 'ant-design-vue';
import { getProductList } from '/@/api/iu/product';
import { getWarehouseList } from '/@/api/iu/warehouse';
import { getSPE } from '/@/utils/common/fn';
import { h } from 'vue';
const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('iu.product.title'),
    dataIndex: 'genericName',
    align:'left',
    customRender: ({ record }) => {
      return record.Product.genericName
  },
  },
  {
    title: t('iu.product.specification'),
    dataIndex: 'specification',
    width: 200,
    customRender: ({ record }) => {
            return getSPE(record.Product)
        },
  },
  {
    title: t('iu.inventory.quantity'),
    dataIndex: 'quantity',
    width: 100,
  },
  {
    title: t('iu.inventory.splitQty'),
    dataIndex: 'splitQty',
    width: 100,
  },
  {
    title: t('iu.inventory.stockThreshold'),
    dataIndex: 'stockThreshold',
    width: 100,
  },
  // {
  //   title: t('iu.inventory.productId'),
  //   dataIndex: 'productId',
  //   width: 100,
  // },
  // {
  //   title: t('iu.inventory.warehouseId'),
  //   dataIndex: 'warehouseId',
  //   width: 100,
  // },
  {
    title: t('common.status'),
    dataIndex: 'status',
    width: 100,
    customRender: ({ record }) => {
      if (!Reflect.has(record, 'pendingStatus')) {
        record.pendingStatus = false;
      }
      return h(Switch, {
        checked: record.status === 1,
        checkedChildren: t('common.on'),
        unCheckedChildren: t('common.off'),
        loading: record.pendingStatus,
        onChange(checked, _) {
          record.pendingStatus = true;
          const newStatus = checked ? 1 : 2;
          updateInventory({ id: record.id, status: newStatus })
            .then(() => {
              record.status = newStatus;
            })
            .finally(() => {
              record.pendingStatus = false;
            });
        },
      });
    },
  },
  {
    title: t('common.createTime'),
    dataIndex: 'createdAt',
    width: 150,
    customRender: ({ record }) => {
      return formatToDateTime(record.createdAt);
    },
  },
];

export const searchFormSchema: FormSchema[] = [
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    show: false,
  },

  {
    field: 'splitQty',
    label: t('iu.inventory.splitQty'),
    component: 'InputNumber',
    componentProps: {
    min:0
    },
    required: true,
  },
  {
    field: 'quantity',
    label: t('iu.inventory.quantity'),
    component: 'InputNumber',
    componentProps: {
    min:0
    },
    required: true,
  },
  {
    field: 'stockThreshold',
    label: t('iu.inventory.stockThreshold'),
    component: 'InputNumber',
    componentProps: {
    min:0
    },
    required: true,
  },
  {
    field: 'productId',
    label: t('iu.inventory.productId'),
    component: 'ApiSelect',
    componentProps: {
      api: getProductList,
      params: {
        page: 1,
        pageSize: 1000,
      },
      showSearch:true,
      resultField: 'data.data',
      labelField: 'genericName',
      valueField: 'id',
    },
    required: true,
  },
  {
    field: 'warehouseId',
    label: t('iu.inventory.warehouseId'),
    component: 'ApiSelect',
    componentProps: {
      api: getWarehouseList,
      params: {
        page: 1,
        pageSize: 1000,
      },
      showSearch:true,
      resultField: 'data.data',
      labelField: 'name',
      valueField: 'id',
    },
    required: true,
  },
  {
    field: 'status',
    label: t('iu.inventory.status'),
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: t('common.on'), value: 1 },
        { label: t('common.off'), value: 2 },
      ],
    },
  },
];
