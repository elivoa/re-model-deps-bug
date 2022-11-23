import { useModel } from '@umijs/max'
import { useState } from 'react'

export default () => {
  const [test, setTest] = useState()

  const c = useModel('c')
  const b = useModel('b')
  const a = useModel('a')

  return { test }
}
