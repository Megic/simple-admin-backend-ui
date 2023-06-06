import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { formatToDateTime } from '/@/utils/dateUtil';
import { updateStudent } from '/@/api/iu/student';
import { Switch } from 'ant-design-vue';
import { h } from 'vue';
const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('iu.student.patientId'),
    dataIndex: 'patientId',
    width: 100,
  },
  {
    title: t('iu.student.name'),
    dataIndex: 'name',
    width: 100,
  },
  {
    title: t('iu.student.no'),
    dataIndex: 'no',
    width: 100,
  },
  {
    title: t('iu.student.studentNo'),
    dataIndex: 'studentNo',
    width: 100,
  },
  {
    title: t('iu.student.pname'),
    dataIndex: 'pname',
    width: 100,
  },
  {
    title: t('iu.student.phone'),
    dataIndex: 'phone',
    width: 100,
  },
  {
    title: t('iu.student.pname2'),
    dataIndex: 'pname2',
    width: 100,
  },
  {
    title: t('iu.student.phone2'),
    dataIndex: 'phone2',
    width: 100,
  },
  {
    title: t('iu.student.isStay'),
    dataIndex: 'isStay',
    width: 100,
  },
  {
    title: t('iu.student.cansport'),
    dataIndex: 'cansport',
    width: 100,
  },
  {
    title: t('iu.student.class'),
    dataIndex: 'class',
    width: 100,
  },
  {
    title: t('iu.student.grade'),
    dataIndex: 'grade',
    width: 100,
  },
  {
    title: t('iu.student.schoolSection'),
    dataIndex: 'schoolSection',
    width: 100,
  },
  {
    title: t('iu.student.faculty'),
    dataIndex: 'faculty',
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
          updateStudent({ id: record.id, status: newStatus })
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
    label: t('iu.student.name'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'no',
    label: t('iu.student.no'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'studentNo',
    label: t('iu.student.studentNo'),
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
    field: 'patientId',
    label: t('iu.student.patientId'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'name',
    label: t('iu.student.name'),
    component: 'Input',
    required: true,
  },
  {
    field: 'no',
    label: t('iu.student.no'),
    component: 'Input',
    required: true,
  },
  {
    field: 'studentNo',
    label: t('iu.student.studentNo'),
    component: 'Input',
    required: true,
  },
  {
    field: 'pname',
    label: t('iu.student.pname'),
    component: 'Input',
    required: true,
  },
  {
    field: 'phone',
    label: t('iu.student.phone'),
    component: 'Input',
    required: true,
  },
  {
    field: 'pname2',
    label: t('iu.student.pname2'),
    component: 'Input',
    required: true,
  },
  {
    field: 'phone2',
    label: t('iu.student.phone2'),
    component: 'Input',
    required: true,
  },
  {
    field: 'isStay',
    label: t('iu.student.isStay'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'cansport',
    label: t('iu.student.cansport'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'class',
    label: t('iu.student.class'),
    component: 'Input',
    required: true,
  },
  {
    field: 'grade',
    label: t('iu.student.grade'),
    component: 'Input',
    required: true,
  },
  {
    field: 'schoolSection',
    label: t('iu.student.schoolSection'),
    component: 'Input',
    required: true,
  },
  {
    field: 'faculty',
    label: t('iu.student.faculty'),
    component: 'Input',
    required: true,
  },
  {
    field: 'status',
    label: t('iu.student.status'),
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
