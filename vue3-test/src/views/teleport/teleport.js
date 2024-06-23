import { ref, onMounted} from "vue";
export default function app(props, context) {
  let listData = ref([]) // 定义响应式变量,切记下方赋值/取值时修改的是.value属性！
  // 初始化列表
  const loadData = () => {      
    return listData.value = [{title:'标题一', author: '作者一'},{title:'标题二', author: '作者二'},{title:'标题三', author: '作者三'},{title:'标题四', author: '作者四'},{title:'标题五', author: '作者五'}]
  }
  // 加载更多
  const loadMore = () => {   
    listData.value = [...listData.value, ...[{title:'标题X', author: '作者X'}]]
  }
  // 搜索
  const search = (searchVal) => {
    if (searchVal) {
      listData.value = listData.value.filter(item => {
        if (item.title.indexOf(searchVal) >= 0) {
          return item
        } 
      })         
    } else {
      loadData()
    }
  }
  onMounted(() => {
    loadData()
  })
  return {
    listData,
    loadMore,
    search
  }
}