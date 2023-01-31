export interface IOptions {
  id: number
  value: string
  text: string
  icon: string
}

export interface ICustomSelect {
  textStyled: boolean
  options: Array<IOptions>
}

export interface ITodoItem {
  text: string
  date: string
  status: number
  priority: number
}
