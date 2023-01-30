<template>
    <div class="todo__item--inner">
      <div class="todo__item--content">
        <Checkbox :id="'todo__item#' + id" />
        <div class="item__detail">
          <div class="item__detail--text">{{ text }}</div>
          <div class="item__detail--date">{{ date }}</div>
        </div>
      </div>
      <select class="todo__item--status">
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Checkbox from '../../components/Checkbox/index.vue'

@Options({
  props: {
    id: Number,
    text: String,
    date: String,
    status: Number,
    priority: String
  },
  components: {
    Checkbox
  }
})
export default class TodoItem extends Vue {
  id!: number
  text!: string
  date!: string
  status!: number
  priority!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "./index.scss";
</style>
