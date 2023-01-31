<template>
    <input type="checkbox" class="checkbox" :id="id" :checked="checked" @change="onChecked"/>
    <label :for="id"></label>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
@Options({
  props: {
    id: String,
    checked: Boolean,
    onChange: Function
  }
})
export default class Checkbox extends Vue {
    id!: string
    checked!: boolean
    onChange!: (value: string) => void

    onChecked (e: any) {
      this.onChange(e.currentTarget.checked.toString())
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "./index.scss";
</style>
