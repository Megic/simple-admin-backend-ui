import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { formatToDateTime } from '/@/utils/dateUtil';
import { updateAbsence } from '/@/api/iu/absence';
import { Switch } from 'ant-design-vue';
import { h } from 'vue';
const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('iu.absence.studentName'),
    dataIndex: 'studentName',
    width: 100,
  },
  {
    title: t('iu.absence.studentNo'),
    dataIndex: 'studentNo',
    width: 100,
  },
  {
    title: t('iu.absence.isStay'),
    dataIndex: 'isStay',
    width: 100,
  },
  {
    title: t('iu.absence.class'),
    dataIndex: 'class',
    width: 100,
  },
  {
    title: t('iu.absence.grade'),
    dataIndex: 'grade',
    width: 100,
  },
  {
    title: t('iu.absence.schoolSection'),
    dataIndex: 'schoolSection',
    width: 100,
  },
  {
    title: t('iu.absence.faculty'),
    dataIndex: 'faculty',
    width: 100,
  },
  {
    title: t('iu.absence.checkDay'),
    dataIndex: 'checkDay',
    width: 100,
  },
  {
    title: t('iu.absence.dailyDay'),
    dataIndex: 'dailyDay',
    width: 100,
  },
  {
    title: t('iu.absence.reportDay'),
    dataIndex: 'reportDay',
    width: 100,
  },
  {
    title: t('iu.absence.onsetDay'),
    dataIndex: 'onsetDay',
    width: 100,
  },
  {
    title: t('iu.absence.absenceDay'),
    dataIndex: 'absenceDay',
    width: 100,
  },
  {
    title: t('iu.absence.temperature'),
    dataIndex: 'temperature',
    width: 100,
  },
  {
    title: t('iu.absence.backDay'),
    dataIndex: 'backDay',
    width: 100,
  },
  {
    title: t('iu.absence.backFiles'),
    dataIndex: 'backFiles',
    width: 100,
  },
  {
    title: t('iu.absence.diagnosis'),
    dataIndex: 'diagnosis',
    width: 100,
  },
  {
    title: t('iu.absence.doctorName'),
    dataIndex: 'doctorName',
    width: 100,
  },
  {
    title: t('iu.absence.doctorKey'),
    dataIndex: 'doctorKey',
    width: 100,
  },
  {
    title: t('iu.absence.isolationId'),
    dataIndex: 'isolationId',
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
          updateAbsence({ id: record.id, status: newStatus })
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
    field: 'studentName',
    label: t('iu.absence.studentName'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'studentNo',
    label: t('iu.absence.studentNo'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'class',
    label: t('iu.absence.class'),
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
    field: 'studentName',
    label: t('iu.absence.studentName'),
    component: 'Input',
    required: true,
  },
  {
    field: 'studentNo',
    label: t('iu.absence.studentNo'),
    component: 'Input',
    required: true,
  },
  {
    field: 'isStay',
    label: t('iu.absence.isStay'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'class',
    label: t('iu.absence.class'),
    component: 'Input',
    required: true,
  },
  {
    field: 'grade',
    label: t('iu.absence.grade'),
    component: 'Input',
    required: true,
  },
  {
    field: 'schoolSection',
    label: t('iu.absence.schoolSection'),
    component: 'Input',
    required: true,
  },
  {
    field: 'faculty',
    label: t('iu.absence.faculty'),
    component: 'Input',
    required: true,
  },
  {
    field: 'checkDay',
    label: t('iu.absence.checkDay'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'dailyDay',
    label: t('iu.absence.dailyDay'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'reportDay',
    label: t('iu.absence.reportDay'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'onsetDay',
    label: t('iu.absence.onsetDay'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'absenceDay',
    label: t('iu.absence.absenceDay'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'temperature',
    label: t('iu.absence.temperature'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'backDay',
    label: t('iu.absence.backDay'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'backFiles',
    label: t('iu.absence.backFiles'),
    component: 'Input',
    required: true,
  },
  {
    field: 'diagnosis',
    label: t('iu.absence.diagnosis'),
    component: 'Input',
    required: true,
  },
  {
    field: 'doctorName',
    label: t('iu.absence.doctorName'),
    component: 'Input',
    required: true,
  },
  {
    field: 'doctorKey',
    label: t('iu.absence.doctorKey'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'isolationId',
    label: t('iu.absence.isolationId'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'status',
    label: t('iu.absence.status'),
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
