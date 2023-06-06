import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { formatToDateTime } from '/@/utils/dateUtil';
import { updateInbound } from '/@/api/iu/inbound';
import { Switch } from 'ant-design-vue';
import { h } from 'vue';
const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('iu.inbound.type'),
    dataIndex: 'type',
    width: 100,
  },
  {
    title: t('iu.inbound.batchNo'),
    dataIndex: 'batchNo',
    width: 100,
  },
  {
    title: t('iu.inbound.factory'),
    dataIndex: 'factory',
    width: 100,
  },
  {
    title: t('iu.inbound.serialNo'),
    dataIndex: 'serialNo',
    width: 100,
  },
  {
    title: t('iu.inbound.productionDate'),
    dataIndex: 'productionDate',
    width: 100,
  },
  {
    title: t('iu.inbound.expirationDate'),
    dataIndex: 'expirationDate',
    width: 100,
  },
  {
    title: t('iu.inbound.unitPrice'),
    dataIndex: 'unitPrice',
    width: 100,
  },
  {
    title: t('iu.inbound.quantity'),
    dataIndex: 'quantity',
    width: 100,
  },
  {
    title: t('iu.inbound.remark'),
    dataIndex: 'remark',
    width: 100,
  },
  {
    title: t('iu.inbound.inboundDate'),
    dataIndex: 'inboundDate',
    width: 100,
  },
  {
    title: t('iu.inbound.originalOutboundId'),
    dataIndex: 'originalOutboundId',
    width: 100,
  },
  {
    title: t('iu.inbound.productId'),
    dataIndex: 'productId',
    width: 100,
  },
  {
    title: t('iu.inbound.warehouseId'),
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
          updateInbound({ id: record.id, status: newStatus })
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
    field: 'type',
    label: t('iu.inbound.type'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'batchNo',
    label: t('iu.inbound.batchNo'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'factory',
    label: t('iu.inbound.factory'),
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
    field: 'type',
    label: t('iu.inbound.type'),
    component: 'Input',
    required: true,
  },
  {
    field: 'batchNo',
    label: t('iu.inbound.batchNo'),
    component: 'Input',
    required: true,
  },
  {
    field: 'factory',
    label: t('iu.inbound.factory'),
    component: 'Input',
    required: true,
  },
  {
    field: 'serialNo',
    label: t('iu.inbound.serialNo'),
    component: 'Input',
    required: true,
  },
  {
    field: 'productionDate',
    label: t('iu.inbound.productionDate'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'expirationDate',
    label: t('iu.inbound.expirationDate'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'unitPrice',
    label: t('iu.inbound.unitPrice'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'quantity',
    label: t('iu.inbound.quantity'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'remark',
    label: t('iu.inbound.remark'),
    component: 'Input',
    required: true,
  },
  {
    field: 'inboundDate',
    label: t('iu.inbound.inboundDate'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'originalOutboundId',
    label: t('iu.inbound.originalOutboundId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'productId',
    label: t('iu.inbound.productId'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'warehouseId',
    label: t('iu.inbound.warehouseId'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'status',
    label: t('iu.inbound.status'),
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
