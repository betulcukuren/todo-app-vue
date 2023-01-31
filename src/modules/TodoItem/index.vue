<template>
    <div class="todo__item--inner">
      <div class="todo__item--content">
        <Checkbox :id="'todo__item#' + slug" :checked="completeStatus" :onChange="onChange('status', slug)"/>
        <div class="item__detail">
          <div class="item__detail--text" contenteditable="true" @blur="onTextBlur(slug, $event)">{{ text }}</div>
          <div class="item__detail--date">{{ createdDate }}</div>
        </div>
      </div>
      <button class="todo__item--delete" @click="$store.dispatch('remove', slug)">
        <svg width="23" height="29" viewBox="0 0 23 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.625 0L7.1875 1.45H1.4375C0.575 1.45 0 2.03 0 2.9C0 3.77 0.575 4.35 1.4375 4.35H4.3125H18.6875H21.5625C22.425 4.35 23 3.77 23 2.9C23 2.03 22.425 1.45 21.5625 1.45H15.8125L14.375 0H8.625ZM1.4375 7.25V26.1C1.4375 27.695 2.73125 29 4.3125 29H18.6875C20.2687 29 21.5625 27.695 21.5625 26.1V7.25H1.4375ZM7.1875 10.15C8.05 10.15 8.625 10.73 8.625 11.6V24.65C8.625 25.52 8.05 26.1 7.1875 26.1C6.325 26.1 5.75 25.52 5.75 24.65V11.6C5.75 10.73 6.325 10.15 7.1875 10.15ZM15.8125 10.15C16.675 10.15 17.25 10.73 17.25 11.6V24.65C17.25 25.52 16.675 26.1 15.8125 26.1C14.95 26.1 14.375 25.52 14.375 24.65V11.6C14.375 10.73 14.95 10.15 15.8125 10.15Z" fill="#C6C6C6"/>
        </svg>
      </button>
      <CustomSelect :selected="priority" :onChange="onChange('priority', slug)" :selectData=priorityInlineSelect />
    </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { Options, Vue } from 'vue-class-component'
import { ICustomSelect } from '../../store/types'
import Checkbox from '../../components/Checkbox/index.vue'
import CustomSelect from '../../components/CustomSelect/index.vue'
import { slugify } from '../../utils/slugify'

@Options({
  props: {
    slug: String,
    text: String,
    createdDate: String,
    completeStatus: Number,
    priority: Number
  },
  components: {
    Checkbox,
    CustomSelect
  },
  data () {
    return {
      priorityInlineSelect: {
        textStyled: true,
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
          }
        ]
      }
    }
  }
})
export default class TodoItem extends Vue {
  slug!: string
  text!: string
  createdDate!: string
  completeStatus!: number
  priority!: number
  priorityInlineSelect!: ICustomSelect
  store = useStore();

  onChange (type: string, slug: string) {
    return (value: string) => {
      let prop = parseInt(value, 10)
      if (type === 'status') {
        prop = value === 'true' ? 1 : 0
      }

      this.store.dispatch('update', {
        slug,
        props: {
          [type]: prop
        }
      })
    }
  }

  onTextBlur (slug: string, event: FocusEvent) {
    const text = (event.target as HTMLDivElement).textContent?.trim() || 'Untitled task'
    this.store.dispatch('update', {
      slug,
      props: {
        text,
        slug: `${slugify(text)}-${new Date().getTime()}`
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "./index.scss";
</style>
