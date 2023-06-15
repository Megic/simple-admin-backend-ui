import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { formatToDateTime } from '/@/utils/dateUtil';
import { updateDiagnosisType } from '/@/api/iu/diagnosisType';
import { Switch } from 'ant-design-vue';
import { h } from 'vue';
const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('iu.diagnosisType.name'),
    dataIndex: 'name',
    width: 100,
  },
  {
    title: t('iu.diagnosisType.level'),
    dataIndex: 'level',
    width: 100,
  },
  {
    title: t('iu.diagnosisType.description'),
    dataIndex: 'description',
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
          updateDiagnosisType({ id: record.id, status: newStatus })
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
    label: t('iu.diagnosisType.name'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'description',
    label: t('iu.diagnosisType.description'),
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
    label: t('iu.diagnosisType.name'),
    component: 'Input',
    required: true,
  },
  {
    field: 'level',
    label: t('iu.diagnosisType.level'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'description',
    label: t('iu.diagnosisType.description'),
    component: 'Input',
    required: true,
  },
  {
    field: 'status',
    label: t('iu.diagnosisType.status'),
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
