<template>
  <div class="todo__filters">
    <CustomSelect :selectData=statusSelect />
    <CustomSelect :selectData=prioritySelect />
    <CustomSelect :selectData=sortSelect />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { ICustomSelect } from '../../store/types'
import CustomSelect from '../../components/CustomSelect/index.vue'

@Options({
  props: {
    options: Array
  },
  components: {
    CustomSelect
  },
  data () {
    return {
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
  statusSelect!: ICustomSelect
  prioritySelect!: ICustomSelect
  sortSelect!: ICustomSelect
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "./index.scss";
</style>
