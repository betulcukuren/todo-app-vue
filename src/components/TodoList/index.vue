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
              <input type="checkbox" class="todo__item--checkbox" id="todo__item#1" />
              <label for="todo__item#1" class="todo__item--text">Fast site speed</label>
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
              <input type="checkbox" class="todo__item--checkbox" id="todo__item#2" />
              <label for="todo__item#2" class="todo__item--text">SEO friendly URLs</label>
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
              <input type="checkbox" class="todo__item--checkbox" id="todo__item#3" />
              <label for="todo__item#3" class="todo__item--text">Good internal links</label>
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
              <input type="checkbox" class="todo__item--checkbox" id="todo__item#4" />
              <label for="todo__item#4" class="todo__item--text">Structured data</label>
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
              <input type="checkbox" class="todo__item--checkbox" id="todo__item#5" />
              <label for="todo__item#5" class="todo__item--text">Social media strategy</label>
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
@Options({
  props: {
    title: String
  }
})
export default class TodoList extends Vue {
  title!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "./index.scss";
</style>
