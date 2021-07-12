<template>
  <div>    
      teleport
  </div>
</template>
<script>
import teleport from "@/views/teleport/teleport.js";
export default {
  name: "teleport",
  setup(props, context){
    const {search, loadMore, listData} = teleport(props, context)
    return {
      search,
      loadMore,
      listData
    }
  }
}
</script>