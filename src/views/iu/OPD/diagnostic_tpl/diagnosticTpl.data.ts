import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { formatToDateTime } from '/@/utils/dateUtil';
import { updateDiagnosticTpl } from '/@/api/iu/diagnosticTpl';
import { Switch } from 'ant-design-vue';
import { h } from 'vue';
const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('iu.diagnosticTpl.name'),
    dataIndex: 'name',
    width: 100,
  },
  {
    title: t('iu.diagnosticTpl.type'),
    dataIndex: 'type',
    width: 100,
  },
  {
    title: t('iu.diagnosticTpl.symptom'),
    dataIndex: 'symptom',
    width: 100,
  },
  {
    title: t('iu.diagnosticTpl.diagnosisType'),
    dataIndex: 'diagnosisType',
    width: 100,
  },
  {
    title: t('iu.diagnosticTpl.treat'),
    dataIndex: 'treat',
    width: 100,
  },
  {
    title: t('iu.diagnosticTpl.attentionName'),
    dataIndex: 'attentionName',
    width: 100,
  },
  {
    title: t('iu.diagnosticTpl.attentionId'),
    dataIndex: 'attentionId',
    width: 100,
  },
  {
    title: t('iu.diagnosticTpl.orders'),
    dataIndex: 'orders',
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
          updateDiagnosticTpl({ id: record.id, status: newStatus })
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
  {
    field: 'name',
    label: t('iu.diagnosticTpl.name'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'symptom',
    label: t('iu.diagnosticTpl.symptom'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'diagnosisType',
    label: t('iu.diagnosticTpl.diagnosisType'),
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
    field: 'name',
    label: t('iu.diagnosticTpl.name'),
    component: 'Input',
    required: true,
  },
  {
    field: 'type',
    label: t('iu.diagnosticTpl.type'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'symptom',
    label: t('iu.diagnosticTpl.symptom'),
    component: 'Input',
    required: true,
  },
  {
    field: 'diagnosisType',
    label: t('iu.diagnosticTpl.diagnosisType'),
    component: 'Input',
    required: true,
  },
  {
    field: 'treat',
    label: t('iu.diagnosticTpl.treat'),
    component: 'Input',
    required: true,
  },
  {
    field: 'attentionName',
    label: t('iu.diagnosticTpl.attentionName'),
    component: 'Input',
    required: true,
  },
  {
    field: 'attentionId',
    label: t('iu.diagnosticTpl.attentionId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'orders',
    label: t('iu.diagnosticTpl.orders'),
    component: 'Input',
    required: true,
  },
  {
    field: 'status',
    label: t('iu.diagnosticTpl.status'),
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
