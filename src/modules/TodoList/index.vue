<template>
  <div class="todo__container">
    <span class="todo__header">{{ title }}</span>
    <div class="todo__content">
      <div class="todo__filters">
        <CustomSelect :selectData=statusSelect />
        <CustomSelect :selectData=prioritySelect />
        <CustomSelect :selectData=sortSelect />
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
import { ICustomSelect, ITodoItem } from '../../store/types'
import TodoItem from '../TodoItem/index.vue'
import CustomSelect from '../../components/CustomSelect/index.vue'
import items from '../../data/todo-items.json'

@Options({
  props: {
    title: String
  },
  components: {
    TodoItem,
    CustomSelect
  },
  data () {
    return {
      items: items,
      statusSelect: {
        all: true,
        textStyled: false,
        options: [
          {
            id: 0,
            value: 'Done',
            text: 'Done',
            icon: ''
          },
          {
            id: 1,
            value: 'Not Done',
            text: 'Not Done',
            icon: ''
          }
        ]
      },
      prioritySelect: {
        all: true,
        textStyled: false,
        options: [
          {
            id: 0,
            value: 'Low',
            text: 'Low',
            icon: ''
          },
          {
            id: 1,
            value: 'Medium',
            text: 'Medium',
            icon: ''
          },
          {
            id: 2,
            value: 'High',
            text: 'High',
            icon: ''
          }
        ]
      },
      sortSelect: {
        all: false,
        textStyled: false,
        options: [
          {
            id: 0,
            value: 'High to Low',
            text: 'High to Low',
            icon: ''
          },
          {
            id: 1,
            value: 'Low to High',
            text: 'Low to High',
            icon: ''
          },
          {
            id: 2,
            value: 'New to Old',
            text: 'New to Old',
            icon: ''
          },

          {
            id: 3,
            value: 'Old to New',
            text: 'Old to New',
            icon: ''
          }
        ]
      }
    }
  }
})
export default class TodoList extends Vue {
  title!: string
  items!: Array<ITodoItem>
  statusSelect!: ICustomSelect
  prioritySelect!: ICustomSelect
  sortSelect!: ICustomSelect
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "./index.scss";
</style>
