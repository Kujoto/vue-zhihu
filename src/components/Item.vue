<template>
  <div class="item">
    <p>
      <a class="title" :href="href" target="_blank">{{{item.title}}}</a>
    </p>
    <p class="subtext">
      <span>
      {{item.ga_prefix | fromNow}}前 
      </span>
    </p>
  </div>
</template>

<script>
export default {

  name: 'Item',

  props: {
    item: Object,
    index: Number
  },

  computed: {
    href () {
      return this.item.url || ('#/item/' + this.item.id)
    },
  }
}
</script>

<style lang="stylus">
@import "../variables.styl"

.item
  padding 2px 0 2px 10px
  position relative
  transition background-color .2s ease
  p
    margin 2px 0
  .title:visited
      color $gray
  .index
    color $gray
    position absolute
    width 30px
    text-align right
    left 0
    top 4px
  .domain, .subtext
    font-size 11px
    color $gray
    a
      color $gray
  .subtext a:hover
    text-decoration underline
  .subtext
      text-align right
</style>
