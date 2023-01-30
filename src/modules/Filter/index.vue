<template>
  <div class="filter__dd">
    <select class="filter__dd--select">
      <option class="filter__dd--select__item" v-if="customSelect.all"> All </option>
      <option v-for="option in customSelect.options" class="filter__dd--select__item" :key=option.text > {{ option.value }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

interface IOptions {
  id: number
  value: string
  text: string
  icon: string
}

interface ICustomSelect {
  all: boolean,
  options: Array<IOptions>
}

@Options({
  props: {
    options: Array
  }
})
export default class TodoList extends Vue {
  customSelect!: ICustomSelect
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "./index.scss";
</style>
