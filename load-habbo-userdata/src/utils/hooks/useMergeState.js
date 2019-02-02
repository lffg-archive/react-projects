import { useState } from 'react'

export default function useMergeState(initial = {}) {
  const [state, set] = useState(initial)
  return [
    state,
    (updater) =>
      set((prev) =>
        typeof updater === 'function'
          ? { ...prev, ...updater(prev) }
          : { ...prev, ...updater }
      )
  ]
}
