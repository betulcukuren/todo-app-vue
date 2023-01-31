import { createStore } from 'vuex'
import { UPDATE_ITEMS, UPDATE_FILTERS, UPDATE_SORT } from './actionTypes'
import { ITodoItem } from './types'
import todoItems from '../data/todo-items.json'

export default createStore({
  state: {
    todoItems,
    filters: {
      status: -1,
      priority: -1
    },
    sort: {
      criteria: 'priority',
      direction: 'desc'
    }
  },
  getters: {
    todoItems: function (state) {
      return state.todoItems
    },
    filteredTodoItems: function (state) {
      return state.todoItems.filter((item) => {
        if (state.filters.status !== -1) {
          return state.filters.status === item.completeStatus
        }
        return item
      }).filter((item) => {
        if (state.filters.priority !== -1) {
          return state.filters.priority === item.priority
        }
        return item
      }).sort((a: ITodoItem, b: ITodoItem) => {
        if (state.sort.criteria === 'priority') {
          if (state.sort.direction === 'asc') {
            return a.priority - b.priority
          } else {
            return b.priority - a.priority
          }
        } else {
          if (state.sort.direction === 'asc') {
            return new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime()
          } else {
            return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
          }
        }
      })
    },
    getFilters: function (state) {
      return state.filters
    }
  },
  mutations: {
    [UPDATE_ITEMS]: (state, payload) => {
      state.todoItems = payload
    },
    [UPDATE_FILTERS]: (state, payload) => {
      state.filters = payload
    },
    [UPDATE_SORT]: (state, payload) => {
      state.sort = payload
    }
  },
  actions: {
    add (context) {
      context.commit(UPDATE_ITEMS, [...context.state.todoItems, {
        text: 'Untitled task',
        slug: 'untitled-text-' + new Date().getTime(),
        completeStatus: 0,
        priority: 0,
        createdDate: new Date().toLocaleDateString('tr')
      }])
    },
    remove (context, payload) {
      context.commit(UPDATE_ITEMS, context.state.todoItems.filter((item) => payload !== item.slug))
    },
    filter (context, payload) {
      const newFilters = {
        ...context.state.filters,
        [payload.type]: parseInt(payload.value, 10)
      }
      context.commit(UPDATE_FILTERS, newFilters)
    },
    sort (context, payload) {
      const newSort = {
        criteria: payload.value.split('-')[0],
        direction: payload.value.split('-')[1]
      }
      context.commit(UPDATE_SORT, newSort)
    },
    update (context, payload) {
      const newItems = context.state.todoItems.map((item) => {
        if (item.slug === payload.slug) {
          return {
            ...item,
            ...payload.props
          }
        }
        return item
      })
      context.commit(UPDATE_ITEMS, newItems)
    }
  },
  modules: {
  }
})
