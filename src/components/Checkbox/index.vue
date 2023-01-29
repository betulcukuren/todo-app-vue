<template>
    <input type="checkbox" class="checkbox" :id="id" />
    <label :for="id"></label>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
@Options({
  props: {
    id: String
  }
})
export default class Checkbox extends Vue {
    id!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "./index.scss";
</style>
