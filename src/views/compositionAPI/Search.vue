<template>
  <div :class="['weui-search-bar', {'weui-search-bar_focusing':isFocus}]" id="searchBar">
    <form class="weui-search-bar__form">
      <div class="weui-search-bar__box">
        <i class="weui-icon-search"></i>
        <input
          v-model="searchValue"
          ref="inputElement"
          type="search"
          class="weui-search-bar__input"
          id="searchInput"
          placeholder="搜索"
          required
        />
        <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
      </div>
      <label @click="toggle" class="weui-search-bar__label" id="searchText">
        <i class="weui-icon-search"></i>
        <span>搜索</span>
      </label>
    </form>
    <a @click="toggle" href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
  </div>
</template>
<script>
import search from "@/views/compositionAPI/search.js";
export default {
  emits:{
    submit: () => {
      console.log('emit事件监听')
      return true
    }
  },
  setup(props, context) {
    const {searchValue, isFocus, inputElement,  toggle} = search(props, context)
    const submitForm = () => {
      context.emit('submit')
    }
    return {
      toggle,
      searchValue, 
      isFocus,
      inputElement,
      submitForm
    }
  }
}
</script>