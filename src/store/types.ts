export interface IOptions {
  id: number
  value: string
  text: string
  icon: string
}

export interface ICustomSelect {
  all: boolean
  textStyled: boolean
  options: Array<IOptions>
}

export interface ITodoItem {
  id: number
  text: string
  date: string
  status: number
  priority: string
}
