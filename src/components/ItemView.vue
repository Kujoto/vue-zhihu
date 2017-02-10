<template>
  <div v-html="item">
  </div>
</template>

<script>
import store from '../store'
import Item from './Item.vue'

export default {

  name: 'ItemView',

  components: {
    Item
  },

  data () {
    return {
      item: {},
    }
  },

  route: {
    data ({ to }) {
      return store.fetchItem(1).then(item => ({
        item
      }))
    }
  },
}
</script>

<style lang="stylus">
@import "../variables.styl"

.item-view
  .item
    padding-left 0
    margin-bottom 30px
    .index
      display none
  .poll-options
    margin-left 30px
    margin-bottom 40px
    li
      margin 12px 0
    p
      margin 8px 0
    .subtext
      color $gray
      font-size 11px
  .itemtext
    color $gray
    margin-top 0
    margin-bottom 30px
  .itemtext p
    margin 10px 0
</style>
