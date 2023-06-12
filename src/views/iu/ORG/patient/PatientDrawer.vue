<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="50%"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" />
    <BasicForm v-if="state.type==1" @register="registerStudentForm" />
    <BasicForm v-if="state.type==2" @register="registerTeacherForm" />
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref,reactive } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './patient.data';
  import * as studentData from '../student/student.data';
  import * as teacherData from '../teacher/teacher.data';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { useI18n } from 'vue-i18n';

  import { createPatient, updatePatient } from '/@/api/iu/patient';
  import { createStudent, updateStudent } from '/@/api/iu/student';
import { updateTeacher,createTeacher } from '/@/api/iu/teacher';
  export default defineComponent({
    name: 'PatientDrawer',
    components: { BasicDrawer, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const state = reactive({ type: 1 })
      const { t } = useI18n();

      //特殊处理type项
      formSchema[1]!['componentProps']!['onChange']=function (val){
        state.type = val
      }

      const [registerForm, { resetFields, setFieldsValue, validate}] = useForm({
        labelWidth: 100,
        labelAlign:'right',
        schemas: formSchema,
        showActionButtonGroup: false,
      });

    const [registerStudentForm, StudentForm] = useForm({
            labelWidth: 100,
            labelAlign:'right',
            schemas: studentData.formSchema,
            showActionButtonGroup: false,
          });

          const [registerTeacherForm, TeacherForm] = useForm({
            labelWidth: 100,
            labelAlign:'right',
            schemas: teacherData.formSchema,
            showActionButtonGroup: false,
          });

      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        resetFields();
        StudentForm.resetFields();
        setDrawerProps({ confirmLoading: false });

        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          });

          if(data.record.student){
            StudentForm.setFieldsValue({
            ...data.record.student,
          });
          }
          

        }
      });

      const getTitle = computed(() =>
        !unref(isUpdate) ? t('iu.patient.addPatient') : t('iu.patient.editPatient'),
      );

   

      async function handleSubmit() {
        const values = await validate();
        let student,teacher;
        if(state.type==1){
          student = await StudentForm.validate();
        }
        if(state.type==2){
          teacher = await TeacherForm.validate();
        }
        console.log(student)
        setDrawerProps({ confirmLoading: true });
        values['id'] = unref(isUpdate) ? Number(values['id']) : 0;
        let result =  unref(isUpdate) ?await updatePatient(values):await createPatient(values)
        //创建/更新扩展模型
        if (result.code === 0&&state.type==1) {
            student.patientId=result.data.id
            student.name=values.name
            result = student.id?await updateStudent(student):await createStudent(student)
          }

          if (result.code === 0&&state.type==2) {
            teacher.patientId=result.data.id
            teacher.name=values.name
            result = teacher.id?await updateTeacher(teacher):await createTeacher(teacher)
          }

        if (result.code === 0) {
          closeDrawer();
          emit('success');
        }
        setDrawerProps({ confirmLoading: false });
      }

      return {
        state,
        registerStudentForm,
        registerTeacherForm,
        registerDrawer,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  });
</script>
