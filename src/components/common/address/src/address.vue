<template>
    <RegionGroup language="cn" :city="true" :area="true" :town="true" v-model="region" @change="change" />
</template>

<script lang="ts">
  import { defineComponent, computed, ref, watch, unref, watchEffect } from 'vue';
  import { RegionGroup } from 'v-region'
  import { propTypes } from '/@/utils/propTypes';

  export default defineComponent({
    name: 'address',
    components: { RegionGroup },
    props: {
      value: propTypes.array,
    },
    emits: ['score-change', 'change'],
    setup(props, { emit }) {
      // const innerValueRef = ref('');
      // const { prefixCls } = useDesign('strength-meter');

      // const getPasswordStrength = computed(() => {
      //   const { disabled } = props;
      //   if (disabled) return -1;
      //   const innerValue = unref(innerValueRef);
      //   const score = innerValue ? zxcvbn(unref(innerValueRef)).score : -1;
      //   emit('score-change', score);
      //   return score;
      // });
      const region = ref({
  province: '广东省',
  city: '',
  area: '',
  town: ''
})
function change (data) {
  console.log(data)
}
      // function handleChange(e) {
      //   innerValueRef.value = e.target.value;
      // }

      // watchEffect(() => {
      //   innerValueRef.value = props.value || '';
      // });

      // watch(
      //   () => unref(innerValueRef),
      //   (val) => {
      //     emit('change', val);
      //   },
      // );

      return {
        region,change
      };
    },
  });
</script>
<style lang="less" scoped>

</style>
