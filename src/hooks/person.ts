import type { Person } from '@/types'
import { ref } from 'vue'

export default function () {
  let personlist = ref<Person[]>([
    { id: 'sjcis01', name: '张三', age: 12 },
    { id: 'sjcis02', name: '李四', age: 15 },
    { id: 'sjcis03', name: '王无', age: 18 }
  ])

  let changeAge = (person: Person) => {
    console.log('进入修改年龄函数')
    person.age++
  }

  return { personlist, changeAge }
}
