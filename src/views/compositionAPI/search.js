import {reactive, toRefs, watch} from "vue";
export default function search(props, context) {
  const search = reactive({
    searchValue: "",
    isFocus: false,
    inputElement: null
  })
  const searchRefs = toRefs(search); // 定义一个新的对象，它本身不具备响应性，但是它的字段全部是ref变量
  // 切换搜索框状态的方法
  const toggle = () => {
    search.inputElement.focus() // 让点击搜索后出现的输入框自动聚焦
    search.isFocus = !search.isFocus
  }
  // 监听搜索框的值
  watch(
    () => {
      return search.searchValue
    },
    () => {
      context.emit("search", search.searchValue)
    }
  )
  return {
    ...searchRefs, // 在这里结构toRefs对象才能继续保持响应式
    toggle
  }
}