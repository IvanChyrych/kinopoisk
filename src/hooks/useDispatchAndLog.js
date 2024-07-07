import { useStore } from 'react-redux'

export function useDispatchAndLog () {
  const store = useStore()

  return (action) => {
    console.group('Action:', action.type)
    store.dispatch(action)
    console.groupEnd()
  }
}
