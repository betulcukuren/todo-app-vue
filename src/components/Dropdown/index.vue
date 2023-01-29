<template>
    <div class="filter__dd">
      <select class="filter__dd--content" name={{ this.name }}>
        <option class="filter-dd--item">Fast site speed</option>
        <option class="filter-dd--item">SEO friendly URLs</option>
        <option class="filter-dd--item">Good internal links</option>
        <option class="filter-dd--item">Structured data</option>
        <option class="filter-dd--item">Social media links</option>
      </select>    
    </div>
  </template>
  
  <script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  
  @Options({
    props: {
      name: String
    }
  })
  export default class Dropdown extends Vue {
    name!: String
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
    @import "./index.scss";
  </style>
  

  <!--
            <option class="filter-dd--item" v-for="option in this.options" :value="option.value">
          <span> {{ option.icon }} </span>
          <span> {{ option.name }} </span> 
        </option>
  -->