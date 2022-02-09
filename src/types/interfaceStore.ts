import React from "react"
import {Item, User, Coach, Company, Service, Article} from "../types/typesStore"

export default interface AppStoreState {

    // #region 'General TYPES'
  
    // #region 'General State types'
    items : Item[]
    initialItems: Item[]
    users: User[]
    companies: Company[]
  
    newsLetterEmail: string
    signInStatus: boolean
    signInData: User[]
    signInUserName: string
    signUpStatus: boolean
  
    paymentStatus: boolean
    paymentData: object[]
  
    favoriteClickSpan: number
    bagClickSpan: number
  
    userCatcher: User[]
    userName: string
  
    selectType: string
    category: string
    searchTerm: string
    searchOnCategory: string
  
    selectedModal: string
    // #endregion
  
    // #region 'General state functions types'
    handleButtonAddBasket: (product: Item) => void
    handleOnSubmitForm: (formValue: string) => void
    handleOnChangeSearchSelect: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleOnChangeSearchTerm: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleOnClickCategory : (liValue: string) => void
    handleOnChangeSelect : (selectValue: string) => void
    handleOffersEvent: () => void
    handleSignInStatus: () => void
    handleFormNewsletter: (e: React.FormEvent<HTMLInputElement>) => void
    setSignInStatus: () => void
    handleButtonRemoveBasket: (product: Item) => void
    handleButtonRemoveFavorite: (product: Item) => void
    handleButtonAddFavorite: (product: Item) => void
    handleButtonAddBagRemoveFavorite: (product: Item) => void
    setUsers: (array: User[]) => void
    setItems: (array: Item[]) => void 
    setInitialItems: (array: Item[]) => void
    handleOnChangeBasketSelect: (value: string, objectBasket: Item) => void
    // #endregion
    
    // #endregion
  
    // #region 'Contact TYPES'
    
    // #region 'Contact state general types'
    nameContactUs: string
    emailContactUs: string
    subjectContactUs: string
    phoneContactUs: string
    textAreaContactUs: string
    // #endregion
  
    // #region Contact functions general types'
    handleTextAreaChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleSubjectChange: (e:React.ChangeEvent<HTMLInputElement>) => void
    handlePhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleContactSubmit: (e: React.FormEvent<HTMLInputElement>) => void
    // #endregion
  
    // #endregion
  
    // #region 'Sign-in TYPES'
    
    // #region 'Sign-in state general types'
    passwordSignIn: string
    userNameSignIn: string
    // #endregion
  
    // #region 'Sign-in functions general types'
    getUser: (userNameParam: string, passwordParam: string) => User | undefined
    handleUserNameChangeSignIn: (e: React.ChangeEvent<HTMLInputElement>) => void
    handlePasswordChangeSignIn: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleFormSubmitSignIn: (e: React.FormEvent<HTMLInputElement>) => void
    // #endregion
    
    // #endregion
  
    // #region 'Sign-up TYPES'
    
    // #region 'Sign-up state general types'
    userNameSignUp: string
    fullNameSignUp: string
    passwordSignUp: string
    emailSignUp: string
    // #endregion
  
    // #region 'Sign-up functions general types'
    handleEmailChangeSignUp: (e: React.ChangeEvent<HTMLInputElement>) => void
    handlePasswordChangeSignUp: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleUserNameChangeSignUp: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleFullNameChangeSignUp: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleFormSubmitSignUp: (e: React.FormEvent<HTMLInputElement>) => void
    // #endregion
  
    // #endregion
  
    // #region 'Payment TYPES'
    
    // #region 'payment state general types'
    addressPayment: string
    fullNamePayment: string
    zipCodePayment: string
    emailPayment: string
    // #endregion
  
    // #region 'payment functions general types'
    handleEmailChangePayment: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleZipCodeChangePayment: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleAddressChangePayment: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleFullNameChangePayment: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleFormSubmitPayment: (e: React.FormEvent<HTMLInputElement>) => void
    // #endregion
  
    // #endregion
  
    // #region 'Blog TYPES'
    
    // #region 'blog functions general types'
      articles: Article[]
      setArticles: (array: Article[]) => void
      // #endregion
  
    // #endregion
  
    // #region 'Teams TYPES'
  
    // #region 'teams coaches functions general types'
    coaches: Coach[]
    setCoaches: (array: Coach[]) => void
    // #endregion
  
    // #endregion
  
    // #region 'Services TYPES'
    services: Service[]
    setServices: (array: Service[]) => void
    // #endregion
  
    // #region 'Team-item TYPES'
    teamItem: Coach | null
    setTeamItem: (object: Coach) => void
    // #endregion
  
    // #region 'Blog-item TYPES'
    blogItem: Article | null
    setBlogItem: (object: Article) => void
    // #endregion
  
    // #region 'Service-item TYPES'
    serviceItem: Service | null
    setServiceItem: (object: Service) => void
    // #endregion
  
    // #region 'Company-item TYPES'
    companyItem: Company | null
    setCompanyItem: (object: Company) => void
    // #endregion
  
    // #region 'Companies TYPES'
    setCompanies: (array: Company[]) => void
    // #endregion
  
    // #region 'Product-item TYPES'
    productItem: Item | null
    setProductItem: (object: Item) => void
    initialRelatedItems: Item[]
    setInitialRelatedItems: (array: Item[]) => void
    // #endregion
  
    // #region 'Other types'
    postsFooter: Article[]
    setPostsFooter: (array: Article[]) => void
    formTouch: []
    setFormTouch: (array: []) => void
    categoryClicked: boolean
    setCategoryClicked: () => void
    // #endregion
  
}