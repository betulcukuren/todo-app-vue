export interface IOptions {
  value: string
  text: string
  icon: string
}

export interface ICustomSelect {
  textStyled: boolean
  options: Array<IOptions>
}

export interface ITodoItem {
  slug: string,
  text: string
  createdDate: string
  completeStatus: number
  priority: number
}
