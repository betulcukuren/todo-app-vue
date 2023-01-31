<template>
  <ul class="todo__list">
    <li class="todo__item" v-for="(item) in items" :key="item.slug">
      <TodoItem
        :slug=item.slug
        :text=item.text
        :createdDate=item.createdDate
        :completeStatus=item.completeStatus
        :priority=item.priority
      />
      <div class="todo__separator"></div>
    </li>
  </ul>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { ITodoItem } from '../../store/types'
import TodoItem from '../TodoItem/index.vue'

@Options({
  props: {
    items: Array
  },
  components: {
    TodoItem
  }
})
export default class TodoList extends Vue {
  items!: Array<ITodoItem>
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "./index.scss";
</style>
