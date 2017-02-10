<template>
  <div class="news-view" :class="{ loading: !items.length }">
    <!-- item list -->
    <item
      v-for="item in items"
      :item="item"
      track-by="id">
    </item>
    <!-- navigation -->
    <div class="nav" v-show="items.length > 0">
      <a v-if="page > 1" :href="'#/news/' + (page - 1)">上一页</a>
      <a v-if="page < 4" :href="'#/news/' + (page + 1)">下一页</a>
    </div>
  </div>
</template>

<script>
import store from '../store'
import Item from './Item.vue'

export default {

  name: 'NewsView',

  components: {
    Item
  },

  data () {
    return {
      page: 1,
      items: []
    }
  },

  route: {
    data ({ to }) {
      const page = +to.params.page
      document.title = 'Vue.js 知乎日报'
      return store.fetchItems(page).then(items => ({
        page,
        items
      }))
    }
  },
}
</script>

<style lang="stylus">
.news-view
  padding-left 5px
  padding-right 15px
  &.loading:before
    content "Loading..."
    position absolute
    top 16px
    left 20px
  .nav
    padding 10px 10px 10px 40px
    margin-top 10px
    border-top 2px solid #008bed
    a
      margin-right 10px
      &:hover
        text-decoration underline
</style>
