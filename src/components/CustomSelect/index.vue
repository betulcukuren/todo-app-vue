<template>
  <div class="filter__dd" @focusout="toggleOptions">
    <button class="filter__dd--selected" :class="{'filter__dd--selected__styled': selectData.textStyled }" @click="showOptions = true">
      <img v-if="showIcon" :src="selectData.options.find(item => item.value === selected)?.icon">
      {{ selectData.options.find(item => item.value === selected)?.text }}
    </button>
    <div class="filter__dd--content" v-if="showOptions">
        <div tabindex="0" @click="onSelect" class="filter__dd--content__item" v-for="option in selectData.options" :key=option.value :data-value="option.value">
          <img class="filter__dd--content__item--icon" :src="option.icon">
          {{ option.text }}
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { ICustomSelect } from '../../store/types'

@Options({
  props: {
    selectData: Object,
    selected: String,
    onChange: Function,
    showIcon: Boolean
  },
  data () {
    return {
      showOptions: false
    }
  }
})
export default class CustomSelect extends Vue {
  selectData!: ICustomSelect
  selected!: string
  showOptions!: boolean
  onChange!: (value: string) => void
  showIcon!: boolean

  onSelect (e: any) {
    this.onChange(e.target.dataset.value)
    this.showOptions = false
  }

  toggleOptions (event: FocusEvent) {
    if ((event.currentTarget as HTMLDivElement).contains((event.relatedTarget) as HTMLDivElement)) {
      return
    }
    this.showOptions = false
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "./index.scss";
</style>
