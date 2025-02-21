export interface Person {
  id: string
  name: string
  age: number
  tel?: string
  car?: Car
}

export interface News {
  id: string
  title: string
  content: string
}

export interface Car {
  name: string
  color: string
}
