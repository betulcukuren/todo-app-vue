<template>
  <div class="filter__dd">
    <select class="filter__dd--select" :class="{'filter__dd--select__inline': selectData.textStyled}" >
      <option class="filter__dd--select__item" v-if="selectData.all"> All </option>
      <option v-for="option in selectData.options" class="filter__dd--select__item" :key=option.text > {{ option.value }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { ICustomSelect } from '../../store/types'

@Options({
  props: {
    selectData: Object
  }
})
export default class CustomSelect extends Vue {
  selectData!: ICustomSelect
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "./index.scss";
</style>
