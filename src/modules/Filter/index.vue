<template>
  <div class="todo__filters">
    <CustomSelect
      :selected="$store.getters.getFilters.status"
      :selectData="statusSelect"
      :onChange="onChange('filter', 'status')"
    />
    <CustomSelect
      :selected="$store.getters.getFilters.priority"
      :selectData="prioritySelect"
      :onChange="onChange('filter', 'priority')"
    />
    <CustomSelect
      :selectData=sortSelect
      :onChange="onChange('sort')"
    />
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
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
        textStyled: false,
        options: [
          {
            value: 1,
            text: 'Done',
            icon: ''
          },
          {
            value: 0,
            text: 'Not Done',
            icon: ''
          },
          {
            value: -1,
            text: 'All',
            icon: ''
          }
        ]
      },
      prioritySelect: {
        textStyled: false,
        options: [
          {
            value: 0,
            text: 'Low',
            icon: ''
          },
          {
            value: 1,
            text: 'Medium',
            icon: ''
          },
          {
            value: 2,
            text: 'High',
            icon: ''
          },
          {
            value: -1,
            text: 'All',
            icon: ''
          }
        ]
      },
      sortSelect: {
        textStyled: false,
        options: [
          {
            value: 'priority-desc',
            text: 'High to Low',
            icon: ''
          },
          {
            value: 'priority-asc',
            text: 'Low to High',
            icon: ''
          },
          {
            value: 'date-desc',
            text: 'New to Old',
            icon: ''
          },

          {
            value: 'date-asc',
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
  store = useStore();

  onChange (type: string, status?: string) {
    return (value: string) => {
      this.store.dispatch(type, {
        value,
        ...status ? { type: status } : {}
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "./index.scss";
</style>
