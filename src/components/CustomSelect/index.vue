<template>
  <div class="filter__dd">
    <select class="filter__dd--select" @change="onSelect" :class="{'filter__dd--select__styled': selectData.textStyled}" >
      <option v-for="option in selectData.options" class="filter__dd--select__item" :selected="option.value === selected" :value="option.value" :key=option.value > {{ option.text }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { ICustomSelect } from '../../store/types'

@Options({
  props: {
    selectData: Object,
    selected: String,
    onChange: Function
  }
})
export default class CustomSelect extends Vue {
  selectData!: ICustomSelect
  selected!: string
  onChange!: (value: string) => void

  onSelect (e: any) {
    this.onChange(e.target.value)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "./index.scss";
</style>
