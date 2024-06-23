<template>
  <div class="weui-panel weui-panel_access">
    <div v-for="(n,index) in listData" :key="index" class="weui-panel__bd">
      <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title" v-text="n.title"></h4>
          <p class="weui-media-box__desc" v-text="n.author"></p>
        </div>
      </a>
    </div>
    <div @click="loadMore" class="weui-panel__ft">
      <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
        <div class="weui-cell__bd">查看更多</div>
        <span class="weui-cell__ft"></span>
      </a>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs} from "vue";
import pane from "@/views/compositionAPI/pane.js";
export default {
  props:['listData'],
  setup(props, context) {
    const {loadMore} = pane(props, context)
    const state = reactive({
    })     
    return {
      ...toRefs(state),
      loadMore
    }
  }
}
</script>