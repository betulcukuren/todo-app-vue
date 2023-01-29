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
        <li class="todo__item">
          <div class="todo__item--inner">
            <div class="todo__item--content">
              <Checkbox id="todo__item#1" />
              <div class="item__detail">
                <div class="item__detail--text">Fast site speed</div>
                <div class="item__detail--date">08.02.2023</div>
              </div>
            </div>
            <select class="todo__item--status">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
        </div>
        </li>
        <div class="todo__separator"></div>
        <li class="todo__item">
          <div class="todo__item--inner">
            <div class="todo__item--content">
              <Checkbox id="todo__item#2" />
              <div class="item__detail">
                <div class="item__detail--text">SEO friendly URLs</div>
                <div class="item__detail--date">08.02.2023</div>
              </div>
            </div>
            <select class="todo__item--status">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
        </li>
        <div class="todo__separator"></div>
        <li class="todo__item">
          <div class="todo__item--inner">
            <div class="todo__item--content">
              <Checkbox id="todo__item#3" />
              <div class="item__detail">
                <div class="item__detail--text">Good internal links</div>
                <div class="item__detail--date">08.02.2023</div>
              </div>
            </div>
            <select class="todo__item--status">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
        </li>
        <div class="todo__separator"></div>
        <li class="todo__item">
          <div class="todo__item--inner">
            <div class="todo__item--content">
              <Checkbox id="todo__item#4" />
              <div class="item__detail">
                <div class="item__detail--text">Structured data</div>
                <div class="item__detail--date">08.02.2023</div>
              </div>
            </div>
            <select class="todo__item--status">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
        </li>
        <div class="todo__separator"></div>
        <li class="todo__item">
          <div class="todo__item--inner">
            <div class="todo__item--content">
              <Checkbox id="todo__item#5" />
              <div class="item__detail">
                <div class="item__detail--text">Social media strategy</div>
                <div class="item__detail--date">08.02.2023</div>
              </div>
            </div>
            <select class="todo__item--status">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
        </li>
        <div class="todo__separator"></div>
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
import Checkbox from '../../components/Checkbox/index.vue'

@Options({
  props: {
    title: String
  },
  components: {
    Checkbox
  }
})
export default class TodoList extends Vue {
  title!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "./index.scss";
</style>
