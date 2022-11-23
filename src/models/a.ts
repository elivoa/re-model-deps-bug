import { useState } from 'react'
import { useModel } from '@umijs/max'

export default () => {
  const [test, setTest] = useState()

  const b = useModel('b')
  const c = useModel('c')

  return { test }
}
