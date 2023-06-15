import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { formatToDateTime } from '/@/utils/dateUtil';
import { updateSchoolOutpatient } from '/@/api/iu/schoolOutpatient';
import { Switch } from 'ant-design-vue';
import { h } from 'vue';
const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('iu.schoolOutpatient.no'),
    dataIndex: 'no',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.patientType'),
    dataIndex: 'patientType',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.patientKey'),
    dataIndex: 'patientKey',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.patientName'),
    dataIndex: 'patientName',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.patientSex'),
    dataIndex: 'patientSex',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.patientAge'),
    dataIndex: 'patientAge',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.patientClass'),
    dataIndex: 'patientClass',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.patientGrade'),
    dataIndex: 'patientGrade',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.patientSchoolSection'),
    dataIndex: 'patientSchoolSection',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.patientFaculty'),
    dataIndex: 'patientFaculty',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.patientDeptName'),
    dataIndex: 'patientDeptName',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.patientDeptKey'),
    dataIndex: 'patientDeptKey',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.doctorName'),
    dataIndex: 'doctorName',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.doctorKey'),
    dataIndex: 'doctorKey',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.roomName'),
    dataIndex: 'roomName',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.roomId'),
    dataIndex: 'roomId',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.deptName'),
    dataIndex: 'deptName',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.deptKey'),
    dataIndex: 'deptKey',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.time'),
    dataIndex: 'time',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.height'),
    dataIndex: 'height',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.weight'),
    dataIndex: 'weight',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.diastolic'),
    dataIndex: 'diastolic',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.systolic'),
    dataIndex: 'systolic',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.breathe'),
    dataIndex: 'breathe',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.pulse'),
    dataIndex: 'pulse',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.oxygen'),
    dataIndex: 'oxygen',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.temperature'),
    dataIndex: 'temperature',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.examine'),
    dataIndex: 'examine',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.diagnosisType'),
    dataIndex: 'diagnosisType',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.symptom'),
    dataIndex: 'symptom',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.treat'),
    dataIndex: 'treat',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.attentionName'),
    dataIndex: 'attentionName',
    width: 100,
  },
  {
    title: t('iu.schoolOutpatient.attentionId'),
    dataIndex: 'attentionId',
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
          updateSchoolOutpatient({ id: record.id, status: newStatus })
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
    field: 'no',
    label: t('iu.schoolOutpatient.no'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'patientKey',
    label: t('iu.schoolOutpatient.patientKey'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'patientName',
    label: t('iu.schoolOutpatient.patientName'),
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
    field: 'no',
    label: t('iu.schoolOutpatient.no'),
    component: 'Input',
    required: true,
  },
  {
    field: 'patientType',
    label: t('iu.schoolOutpatient.patientType'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'patientKey',
    label: t('iu.schoolOutpatient.patientKey'),
    component: 'Input',
    required: true,
  },
  {
    field: 'patientName',
    label: t('iu.schoolOutpatient.patientName'),
    component: 'Input',
    required: true,
  },
  {
    field: 'patientSex',
    label: t('iu.schoolOutpatient.patientSex'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'patientAge',
    label: t('iu.schoolOutpatient.patientAge'),
    component: 'Input',
    required: true,
  },
  {
    field: 'patientClass',
    label: t('iu.schoolOutpatient.patientClass'),
    component: 'Input',
    required: true,
  },
  {
    field: 'patientGrade',
    label: t('iu.schoolOutpatient.patientGrade'),
    component: 'Input',
    required: true,
  },
  {
    field: 'patientSchoolSection',
    label: t('iu.schoolOutpatient.patientSchoolSection'),
    component: 'Input',
    required: true,
  },
  {
    field: 'patientFaculty',
    label: t('iu.schoolOutpatient.patientFaculty'),
    component: 'Input',
    required: true,
  },
  {
    field: 'patientDeptName',
    label: t('iu.schoolOutpatient.patientDeptName'),
    component: 'Input',
    required: true,
  },
  {
    field: 'patientDeptKey',
    label: t('iu.schoolOutpatient.patientDeptKey'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'doctorName',
    label: t('iu.schoolOutpatient.doctorName'),
    component: 'Input',
    required: true,
  },
  {
    field: 'doctorKey',
    label: t('iu.schoolOutpatient.doctorKey'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'roomName',
    label: t('iu.schoolOutpatient.roomName'),
    component: 'Input',
    required: true,
  },
  {
    field: 'roomId',
    label: t('iu.schoolOutpatient.roomId'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'deptName',
    label: t('iu.schoolOutpatient.deptName'),
    component: 'Input',
    required: true,
  },
  {
    field: 'deptKey',
    label: t('iu.schoolOutpatient.deptKey'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'time',
    label: t('iu.schoolOutpatient.time'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'height',
    label: t('iu.schoolOutpatient.height'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'weight',
    label: t('iu.schoolOutpatient.weight'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'diastolic',
    label: t('iu.schoolOutpatient.diastolic'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'systolic',
    label: t('iu.schoolOutpatient.systolic'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'breathe',
    label: t('iu.schoolOutpatient.breathe'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'pulse',
    label: t('iu.schoolOutpatient.pulse'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'oxygen',
    label: t('iu.schoolOutpatient.oxygen'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'temperature',
    label: t('iu.schoolOutpatient.temperature'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'examine',
    label: t('iu.schoolOutpatient.examine'),
    component: 'Input',
    required: true,
  },
  {
    field: 'diagnosisType',
    label: t('iu.schoolOutpatient.diagnosisType'),
    component: 'Input',
    required: true,
  },
  {
    field: 'symptom',
    label: t('iu.schoolOutpatient.symptom'),
    component: 'Input',
    required: true,
  },
  {
    field: 'treat',
    label: t('iu.schoolOutpatient.treat'),
    component: 'Input',
    required: true,
  },
  {
    field: 'attentionName',
    label: t('iu.schoolOutpatient.attentionName'),
    component: 'Input',
    required: true,
  },
  {
    field: 'attentionId',
    label: t('iu.schoolOutpatient.attentionId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'status',
    label: t('iu.schoolOutpatient.status'),
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
