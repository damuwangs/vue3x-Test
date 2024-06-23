<template>
  <div>    
    <Search @search="search"/>
    <Panel :listData='listData' @loadMore="loadMore"/>
  </div>
</template>
<script>
import list from "@/views/compositionAPI/list.js";
import Search from "@/views/compositionAPI/Search.vue";
import Panel from "@/views/compositionAPI/Panel.vue";
export default {
  name: "list",
  components: {
    Search,
    Panel
  },   
  setup(props, context){
    const {search, loadMore, listData} = list(props, context)
    return {
      search,
      loadMore,
      listData
    }
  }
}
</script>