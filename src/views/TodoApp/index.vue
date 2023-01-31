<template>
  <div class="todo__container">
    <span class="todo__header">{{ title }}</span>
    <div class="todo__content">
      <Filter />
      <TodoList :items=$store.getters.filteredTodoItems />
      <div class="todo__footer">
        <button class="todo__add" @click="$store.dispatch('addTask', title)">
          <div class="todo__add--horizontal"></div>
          <div class="todo__add--vertical"></div>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'
import TodoList from '../../modules/TodoList/index.vue'
import Filter from '../../modules/Filter/index.vue'

@Options({
  props: {
    title: String
  },
  components: {
    TodoList,
    Filter
  }
})
export default class TodoApp extends Vue {
  title!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "./index.scss";
</style>
