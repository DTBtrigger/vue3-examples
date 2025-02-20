export interface Person {
  id: string
  name: string
  age: number
  tel?: string
  car?: Car
}

export interface Car {
  name: string
  color: string
}
