<template>
  <div class="todo__container">
    <span class="todo__header">{{ title }}</span>
    <div class="todo__content">
      <Filter />
      <TodoList :items=items />
      <div class="todo__footer">
        <div class="todo__add">
          <div class="todo__add--horizontal"></div>
          <div class="todo__add--vertical"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { ITodoItem } from '../../store/types'
import TodoList from '../../modules/TodoList/index.vue'
import Filter from '../../modules/Filter/index.vue'
import items from '../../data/todo-items.json'

@Options({
  props: {
    title: String
  },
  components: {
    TodoList,
    Filter
  },
  data () {
    return {
      items: items
    }
  }
})
export default class TodoApp extends Vue {
  title!: string
  items!: Array<ITodoItem>
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "./index.scss";
</style>
