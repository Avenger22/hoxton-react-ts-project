// #region 'General Types custom ones'
export type Item = {id: number, name: string, price: string, stock: number, type: string, date: string, quantity: number, description: string, favorite: boolean}
export type User = {id: number, fullName: string, password: string, email: string, userName: string, signedIn: boolean}
export type Company = {id: number, name: string, desc: string, image: string}
export type Article = {id: number, image: string, title: string, desc: string, user: string, category: string, date: string, paragraph: string, header1: string}
export type Coach = {id: number, image: string, title: string, desc: string, user: string, category: string, date: string, paragraph: string, header1: string}
export type Service = {id: number, image: string, name: string, desc: string}
// #endregion