<template>
    <div class="todo__item--inner">
      <div class="todo__item--content">
        <Checkbox :id="'todo__item#' + id" />
        <div class="item__detail">
          <div class="item__detail--text">{{ text }}</div>
          <div class="item__detail--date">{{ date }}</div>
        </div>
      </div>
      <CustomSelect :selectData=priorityInlineSelect />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { ICustomSelect } from '../../store/types'
import Checkbox from '../../components/Checkbox/index.vue'
import CustomSelect from '../../components/CustomSelect/index.vue'

@Options({
  props: {
    id: Number,
    text: String,
    date: String,
    status: Number,
    priority: String
  },
  components: {
    Checkbox,
    CustomSelect
  },
  data () {
    return {
      priorityInlineSelect: {
        all: false,
        textStyled: true,
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
      }
    }
  }
})
export default class TodoItem extends Vue {
  id!: number
  text!: string
  date!: string
  status!: number
  priority!: string
  priorityInlineSelect!: ICustomSelect
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "./index.scss";
</style>
