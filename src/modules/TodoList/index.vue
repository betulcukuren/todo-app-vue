<template>
  <div class="todo__container">
    <span class="todo__header">{{ title }}</span>
    <div class="todo__content">
      <div class="todo__filters">
        <div class="filter__dd">
          <select class="filter__dd--select">
            <option class="filter__dd--select__item">All</option>
            <option class="filter__dd--select__item">Done</option>
            <option class="filter__dd--select__item">Not Done</option>
          </select>
        </div>
        <div class="filter__dd">
          <select class="filter__dd--select">
            <option class="filter__dd--item">All</option>
            <option class="filter__dd--item">Low</option>
            <option class="filter__dd--item">Medium</option>
            <option class="filter__dd--item">High</option>
          </select>
        </div>
        <div class="filter__dd">
          <select class="filter__dd--select">
            <option class="filter__dd--item">All</option>
            <option class="filter__dd--item">High to Low</option>
            <option class="filter__dd--item">Low to High</option>
            <option class="filter__dd--item">New to Old</option>
            <option class="filter__dd--item">Old to New</option>
          </select>
        </div>
      </div>
      <ul class="todo__list">
        <li class="todo__item" v-for="item in items" :key=item.id>
          <TodoItem
            :id=item.id
            :text=item.text
            :date=item.date
            :status=item.status
            :priority=item.priority
          />
          <div class="todo__separator"></div>
        </li>
      </ul>
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
import TodoItem from '../TodoItem/index.vue'
import items from '../../data/todo-items.json'

interface ITodoItem {
  id: number
  text: string
  date: string
  status: number
  priority: string
}

@Options({
  props: {
    title: String
  },
  components: {
    TodoItem
  },
  data () {
    return {
      items: items
    }
  }
})
export default class TodoList extends Vue {
  title!: string
  declare items: Array<ITodoItem>
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "./index.scss";
</style>
