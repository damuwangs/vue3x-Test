
export default function pane(props, context) {
  const loadMore = () => {
    context.emit("loadMore")
  }
  return {
    loadMore
  }
}