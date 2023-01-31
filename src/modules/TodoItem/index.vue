<template>
    <div class="todo__item--inner">
      <div class="todo__item--content">
        <Checkbox :id="'todo__item#' + slug" :checked="completeStatus" :onChange="onChange('completeStatus', slug)"/>
        <div class="item__detail">
          <div class="item__detail--text" contenteditable="true" @blur="onTextBlur(slug, $event)">{{ text }}</div>
          <div class="item__detail--date">{{ createdDate }}</div>
        </div>
      </div>
      <button class="todo__item--delete" @click="$store.dispatch('remove', slug)">
        <img :src="deleteIcon" />
      </button>
      <CustomSelect :selected="priority" :showIcon="true" :onChange="onChange('priority', slug)" :selectData=priorityInlineSelect />
    </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { Options, Vue } from 'vue-class-component'
import { ICustomSelect } from '../../store/types'
import Checkbox from '../../components/Checkbox/index.vue'
import CustomSelect from '../../components/CustomSelect/index.vue'
import { slugify } from '../../utils/slugify'
import * as Icons from '../../assets/svg'

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
            icon: Icons.lowSVG
          },
          {
            value: 1,
            text: 'Medium',
            icon: Icons.mediumSVG
          },
          {
            value: 2,
            text: 'High',
            icon: Icons.highSVG
          }
        ]
      },
      deleteIcon: Icons.deleteSVG
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
  deleteIcon!: string
  store = useStore();

  onChange (type: string, slug: string) {
    return (value: string) => {
      let prop = parseInt(value, 10)
      if (type === 'completeStatus') {
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
