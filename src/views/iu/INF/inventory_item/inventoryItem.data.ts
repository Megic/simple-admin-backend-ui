import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { formatToDateTime } from '/@/utils/dateUtil';
import { updateInventoryItem } from '/@/api/iu/inventoryItem';
import { Switch } from 'ant-design-vue';
import { h } from 'vue';
const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('iu.inventoryItem.splitQty'),
    dataIndex: 'splitQty',
    width: 100,
  },
  {
    title: t('iu.inventoryItem.quantity'),
    dataIndex: 'quantity',
    width: 100,
  },
  {
    title: t('iu.inventoryItem.batchNo'),
    dataIndex: 'batchNo',
    width: 100,
  },
  {
    title: t('iu.inventoryItem.factory'),
    dataIndex: 'factory',
    width: 100,
  },
  {
    title: t('iu.inventoryItem.productionDate'),
    dataIndex: 'productionDate',
    width: 100,
  },
  {
    title: t('iu.inventoryItem.expirationDate'),
    dataIndex: 'expirationDate',
    width: 100,
  },
  {
    title: t('iu.inventoryItem.unitPrice'),
    dataIndex: 'unitPrice',
    width: 100,
  },
  {
    title: t('iu.inventoryItem.inboundId'),
    dataIndex: 'inboundId',
    width: 100,
  },
  {
    title: t('iu.inventoryItem.productId'),
    dataIndex: 'productId',
    width: 100,
  },
  {
    title: t('iu.inventoryItem.warehouseId'),
    dataIndex: 'warehouseId',
    width: 100,
  },
  {
    title: t('common.status'),
    dataIndex: 'status',
    width: 50,
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
          updateInventoryItem({ id: record.id, status: newStatus })
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
    width: 70,
    customRender: ({ record }) => {
      return formatToDateTime(record.createdAt);
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'splitQty',
    label: t('iu.inventoryItem.splitQty'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'batchNo',
    label: t('iu.inventoryItem.batchNo'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'factory',
    label: t('iu.inventoryItem.factory'),
    component: 'Input',
    colProps: { span: 8 },
  },
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
    label: t('iu.inventoryItem.splitQty'),
    component: 'Input',
    required: true,
  },
  {
    field: 'quantity',
    label: t('iu.inventoryItem.quantity'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'batchNo',
    label: t('iu.inventoryItem.batchNo'),
    component: 'Input',
    required: true,
  },
  {
    field: 'factory',
    label: t('iu.inventoryItem.factory'),
    component: 'Input',
    required: true,
  },
  {
    field: 'productionDate',
    label: t('iu.inventoryItem.productionDate'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'expirationDate',
    label: t('iu.inventoryItem.expirationDate'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'unitPrice',
    label: t('iu.inventoryItem.unitPrice'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'inboundId',
    label: t('iu.inventoryItem.inboundId'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'productId',
    label: t('iu.inventoryItem.productId'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'warehouseId',
    label: t('iu.inventoryItem.warehouseId'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'status',
    label: t('iu.inventoryItem.status'),
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
