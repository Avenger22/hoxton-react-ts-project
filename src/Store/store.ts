import create from 'zustand'
import React from 'react'

type items = {id: number, name: string, price: string, stock: number, type: string, date: string, quantity: number, description: string, favorite: boolean}[]
type initialItems = {id: number, name: string, price: string, stock: number, type: string, date: string, quantity: number, description: string, favorite: boolean}[]
type users = {id: number, fullName: string, password: string, email: string, userName: string, signedIn: boolean}[]
type companies = {id: number, name: string, desc: string, image: string}[]
type articles = {id: number, image: string, title: string, desc: string, user: string, category: string, date: string, paragraph: string, header1: string}[]
type coaches = {id: number, image: string, title: string, desc: string, user: string, category: string, date: string, paragraph: string, header1: string}[]
type services = {id: number, image: string, name: string, desc: string}[]

interface AppStoreState {

  // #region 'General State types'
  items : items
  initialItems: initialItems
  users: users
  companies: companies

  newsLetterEmail: string
  pageNumber: number
  itemsPerPage: number

  signInStatus: boolean
  signInData: object[]
  signInUserName: string
  signUpStatus: boolean

  paymentStatus: boolean
  paymentData: object[]

  favoriteClickSpan: number
  bagClickSpan: number

  userCatcher: object[]
  userName: string

  selectType: string
  category: string
  searchTerm: string
  searchOnCategory: string

  selectedModal: string
  // #endregion

  // #region 'General state functions types'
  handleButtonAddBasket: (product: object) => void
  handleOnSubmitForm: (formValue: string) => void
  handleOnChangeSearchSelect: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleOnChangeSearchTerm: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleOnClickCategory : (liValue: string) => void
  handleChangingPageNumber: (selected: number) => void
  handleOnChangeSelect: (selectValue: string) => void
  handleOnChangeSelectPerPage: (selectValue: string) => void
  handleOffersEvent: () => void
  handleSignInStatus: () => void
  handleFormNewsletter: (e: React.FormEvent<HTMLInputElement>) => void
  setSignInStatus: () => void
  bagItemsFiltered: () => object[]
  handleButtonRemoveBasket: (product: object) => void
  handleButtonRemoveFavorite: (product: object) => void
  handleButtonAddFavorite: (product: object) => void
  handleButtonAddBagRemoveFavorite: (product: object) => void
  setUsers: (array: object[]) => void
  setItems: (array: object[]) => void 
  setInitialItems: (array: object[]) => void
  handleOnChangeBasketSelect: (value: string, objectBasket: object) => void
  // #endregion

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

  // #region 'Sign-in state general types'
  passwordSignIn: string
  userNameSignIn: string
  // #endregion

  // #region 'Sign-in functions general types'
  getUser: (userNameParam: string, passwordParam: string) => object
  handleUserNameChangeSignIn: (e: React.ChangeEvent<HTMLInputElement>) => void
  handlePasswordChangeSignIn: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleFormSubmitSignIn: (e: React.FormEvent<HTMLInputElement>) => void
  // #endregion
  
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

  // #region 'blog functions general types'
    articles: articles[]
    setArticles: (array: articles[]) => void
    // #endregion

  // #region 'teams coaches functions general types'
  coaches: coaches[]
  setCoaches: (array: coaches[]) => void
  // #endregion

  // #region 'services functions general types'
  services: services[]
  setServices: (array: services[]) => void
  // #endregion

  // #region 'team-item functions general types'
  teamItem: coaches
  setTeamItem: (object: coaches) => void
  // #endregion

  // #region 'blog-item functions general types'
  blogItem: articles
  setBlogItem: (object: articles) => void
  // #endregion

  // #region 'service-item functions general types'
  serviceItem: services
  setServiceItem: (object: services) => void
  // #endregion

  // #region 'company-item functions general types'
  companyItem: companies
  setCompanyItem: (object: companies) => void
  // #endregion

  // #region 'companies functions general types'
  setCompanies: (array: companies[]) => void
  // #endregion

  // #region 'product-item functions general types'
  productItem: items
  setProductItem: (object: items) => void
  initialRelatedItems: initialItems[]
  setInitialRelatedItems: (array: initialItems[]) => void
  // #endregion

  // #region 'other functions general types'
  postsFooter: object[]
  setPostsFooter: (array: object[]) => void
  formTouch: []
  setFormTouch: (array: []) => void
  categoryClicked: boolean
  setCategoryClicked: () => void
  // #endregion

}

export const useStore = create<AppStoreState>((set, get) => ({

  // #region 'GENERAL STATE

  // #region 'General state most important'
  items: [],
  initialItems: [],
  users: [],

  companies: [],
  newsLetterEmail: '',
  pageNumber: 0,
  itemsPerPage: 8,
  
  signInStatus: false,
  signInData: [],
  signInUserName: '',
  signUpStatus: false,
  signUpData: [],

  paymentStatus: false,
  paymentData: [],

  favoriteClickSpan: 0,
  bagClickSpan: 0,

  userCatcher: [],
  userName: '',

  selectType: 'Default',
  category: 'Default',
  searchTerm: '',
  searchOnCategory: 'Default',

  selectedModal: '',
  // #endregion

  // #region 'General Functions for state'
  handleButtonAddBasket: function(product) {

    const {signInStatus, bagClickSpan} = get()

    if (signInStatus === true) {

      let itemsCopy = JSON.parse(JSON.stringify(get().items))
      const index = itemsCopy.findIndex(target => target.id === product.id)

      const item = itemsCopy[index]

      if (item.stock > 0) {

        const newItem = {
            ...item,
            quantity: item.quantity ? item.quantity + 1 : 1,
            stock: item.stock - 1
        }

        itemsCopy[index] = newItem

        set({bagClickSpan: bagClickSpan + 1})
        set({items: itemsCopy})

      }

      else {
        alert('You cannot add an item in the bag with no stock')
      }

    }

    else {
      alert('You need to be signed in to add to bag')
    }

  },

  handleOnSubmitForm: function (formValue) {
    set({searchTerm: formValue}) 
  },

  handleOnChangeSearchSelect: function (e) {

    if (get().searchTerm === '') {
        alert('you cant select based on categories without a search string')
        const value = 'Default'
        set({searchOnCategory: value})
    }

    else {
        set({searchOnCategory: e.target.value})
    }

  },

  handleOnChangeSearchTerm: function(e) {
    set({searchTerm: e.target.value})
  },

  handleOnClickCategory: function (liValue) {
    set({category: liValue})
  },

  handleChangingPageNumber: function (selected) {
    set({pageNumber: selected})
  },

  handleOnChangeSelect: function(selectValue) {
    set({selectType: selectValue})
  },

  handleOnChangeSelectPerPage: function(selectValue) {
      set({itemsPerPage: parseInt(selectValue)})
  },

  handleOffersEvent: function() {
    set({category: 'offers'})
  },

  handleSignInStatus: function() {
    const {signInStatus} = get()
    set({signInStatus: !signInStatus})
  },

  handleFormNewsletter: function (e) {    
    const valueForm = e.target.newsLetter.value
    set({newsLetterEmail: valueForm})
  },

  setSignInStatus: function () {
    const {signInStatus} = get()
    set({signInStatus: !signInStatus})
  },

  bagItemsFiltered: function () {
    const {items} = get()
    return items.filter(item => item?.quantity > 0)
  },

  favoriteItemsFiltered : function () {
    const {items} = get()
    items.filter(item => item?.favorite === true)
  },

  handleButtonRemoveBasket: function (product) {
    
    const { items, bagClickSpan } = get()

    let itemsCopy = JSON.parse(JSON.stringify(items));
    const index = itemsCopy.findIndex(target => target.id === product.id)

    const item = itemsCopy[index]

    set({bagClickSpan: bagClickSpan - item.quantity})

    const newItem = {
      ...item,
      quantity: 0,
      stock: item.stock + 1
    }

    itemsCopy[index] = newItem

    set({items: itemsCopy})

  },

  handleButtonRemoveFavorite: function (product) {
    
    const { items, favoriteClickSpan } = get()

    let itemsCopy = JSON.parse(JSON.stringify(items));
    const index = itemsCopy.findIndex(target => target.id === product.id)

    const item = itemsCopy[index]

    const newItem = {
      ...item,
      favorite: false
    }

    itemsCopy[index] = newItem

    set({favoriteClickSpan: favoriteClickSpan - 1})
    set({items: itemsCopy})

  },

  handleButtonAddFavorite: function (product) {
  
    const { signInStatus, items, favoriteClickSpan } = get()

    if (signInStatus === true) {

        let itemsCopy = JSON.parse(JSON.stringify(items))
        const index = itemsCopy.findIndex(target => target.id === product.id)

        const item = itemsCopy[index]

        if (item.favorite === false) {
          
          const newItem = {
              ...item,
              favorite: !item.favorite
          }

          itemsCopy[index] = newItem

          set({favoriteClickSpan: favoriteClickSpan + 1})
          set({items: itemsCopy})

        }

      else {
        alert("You cannot add this item to Wishlist when it is already there")
      }

    }

    else {
      alert('You need to be signed in to add to wishlist')
    }

  },

  handleButtonAddBagRemoveFavorite: function (product) {

    const {items, bagClickSpan, favoriteClickSpan} = get()

    let itemsCopy = JSON.parse(JSON.stringify(items))
    const index = itemsCopy.findIndex(target => target.id === product.id)

    const item = itemsCopy[index]

    const newItem = {
        ...item,
        quantity: item.quantity ? item.quantity + 1 : 1,
        favorite: false
    }

    itemsCopy[index] = newItem

    set({bagClickSpan: bagClickSpan + 1})
    set({favoriteClickSpan: favoriteClickSpan - 1})
    set({items: itemsCopy})

  },

  setUsers: function(array)  {
    set({users: array})
  },

  setItems: function(array)  {
    set({items: array})
  },

  setInitialItems: function(array)  {
    set({initialItems: array})
  },

  handleOnChangeBasketSelect: function (value, objectBasket) {
        
    const {items, bagClickSpan} = get()

    let productsCopy = JSON.parse(JSON.stringify(items))
    const index = productsCopy.findIndex(target => target.id === objectBasket.id)

    const item = productsCopy[index]

    if (parseInt(value) <= item.stock) {
        
        const newItem = { ...item, quantity: parseInt(value) }

        if (newItem.quantity === 0) {
            set({bagClickSpan: 0})
        }
        
        productsCopy[index] = newItem
        set({items: productsCopy})

      }

    else {

      alert("You cannot have more than the stock of the item")
      
      const newItem = { ...item, quantity: 1 }
      productsCopy[index] = newItem
      set({items: productsCopy})

    }

  },
  // #endregion

  // #endregion

  // #region 'CONTACT US STATE'

  // #region 'Contact Us page state'
  nameContactUs: '',
  emailContactUs: '',
  subjectContactUs: '',
  phoneContactUs: '',
  textAreaContactUs: '',
  formContactUs: [],
  // #endregion

  // #region 'Functions for Contact us State'
  handleTextAreaChange: function (e) {
    set({textArea: e.target.value})
  },

  handleNameChange: function (e) {
    set({nameContactUs: e.target.value})
  },

  handleEmailChange: function (e) {
    set({emailContactUs: e.target.value})
  },

  handleSubjectChange: function (e) {
    set({subjectContactUs: e.target.value})
  },

  handlePhoneChange: function (e) {
    set({phoneContactUs: e.target.value})
  },

  handleContactSubmit: function(e) {

    const {phoneContactUs, emailContactUs, subjectContactUs, textAreaContactUs, nameContactUs, formContactUs} = get()
    
    const array = [
        {
            email: emailContactUs, 
            subject: subjectContactUs,
            textArea: textAreaContactUs,
            fullName: nameContactUs,
            phone: phoneContactUs
        }
    ]

    const newArray = [...formContactUs, array]

    e.target.reset()
    set({formContactUs: newArray})

  },
  // #endregion
  
  // #endregion

  // #region 'SIGN-IN STATE'

  // #region 'sign-in general state'
  passwordSignIn: '',
  userNameSignIn: '',
  // #endregion

  // #region 'sign-in general functions'
  getUser: function (userNameParam, passwordParam) {
    const {users} = get()
    return users.find(user => user.userName === userNameParam && user.password === passwordParam)
  },

  handleUserNameChangeSignIn: function (e) {
    set({userNameSignIn: e.target.value})
    set({signInUserName: e.target.value})
  },

  handlePasswordChangeSignIn: function (e) {
    set({passwordSignIn: e.target.value})
  },

  handleFormSubmitSignIn: function (e) {
    
    const {getUser, signInStatus, signInUserName, userNameSignIn, passwordSignIn} = get()
    
    const gettingUser = getUser(userNameSignIn, passwordSignIn)

    if(gettingUser) {

      // update the server
      fetch(`http://localhost:8000/users/${gettingUser.id}`, {
          method: 'PATCH',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ signedIn: true })
      })

      alert("Sign in succesfully !")

      set({signInStatus: true})
      set({signInUserName: gettingUser.userName})
      
      e.target.reset()

    }

    else {
        alert("User is not registered, please try again")
    }

  },
  // #endregion

  // #endregion

  // #region 'SIGN-UP STATE'

  // #region 'sign-up general state'
  userNameSignUp: '',
  fullNameSignUp: '',
  passwordSignUp: '',
  emailSignUp: '',
  // #endregion

  // #region 'sign-up general functions'
  handleEmailChangeSignUp: function (e) {
    set({emailSignUp: e.target.value})
  },

  handlePasswordChangeSignUp: function (e) {
    set({passwordSignUp: e.target.value})
  },

  handleUserNameChangeSignUp: function (e) {
    set({userNameSignUp: e.target.value})
  },

  handleFullNameChangeSignUp: function (e) {
    set({fullNameSignUp: e.target.value})
  },

  handleFormSubmitSignUp: function (e) {

    const {emailSignUp, passwordSignUp, 
      userNameSignUp, fullNameSignUp, users, signUpStatus} = get()
    
    const object = {
        email: emailSignUp, 
        password: passwordSignUp,
        userName: userNameSignUp,
        fullName: fullNameSignUp,
        signedIn: false
    }

    fetch(`http://localhost:8000/users/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })
    .then(responseItem => responseItem.json())
    .then(responseJsonArray => {

      const updatedUsers = [...users, responseJsonArray]
      alert("User is registered successfully")
      
      set({users: updatedUsers})

    })


    set({signUpStatus: !signUpStatus})

    e.target.reset()

  },
  // #endregion

  // #endregion

  // #region 'PAYMENT STATE'

  // #region 'payment general state'
  addressPayment: '',
  fullNamePayment: '',
  zipCodePayment: '',
  emailPayment: '',
  // #endregion

  // #region 'payment general functions'
  handleEmailChangePayment: function (e) {
    set({emailPayment: e.target.value})
  },

  handleZipCodeChangePayment: function (e) {
    set({zipCodePayment: e.target.value})
  },

  handleAddressChangePayment: function (e) {
    set({addressPayment: e.target.value})
  },

  handleFullNameChangePayment: function (e) {
    set({fullNamePayment: e.target.value})
  },

  handleFormSubmitPayment: function (e) {

    const {emailPayment, addressPayment, zipCodePayment, fullNamePayment,
      paymentStatus, paymentData} = get()
    
    const array = [
      {
          email: emailPayment, 
          zipCode: zipCodePayment,
          address: addressPayment,
          fullName: fullNamePayment
      }
    ]

    const newArray = [...paymentData, array]

    set({paymentStatus: !paymentStatus})
    set({paymentData: newArray})

  },
  // #endregion

  // #endregion

  // #region 'BLOG STATE'
  articles: [],

  setArticles: function (array) {
    set({articles: array})
  },
  // #endregion

  // #region 'COACHES OR TEAMS STATE'
  coaches: [],

  setCoaches: function (array) {
    set({coaches: array})
  },
  // #endregion

  // #region 'SERVICES STATE'
  services: [],

  setServices: function (array) {
    set({services: array})
  },
  // #endregion

  // #region 'TEAM ITEM STATE'
  teamItem: {},

  setTeamItem: function (object) {
    set({teamItem: object})
  },
  // #endregion

  // #region 'BLOG ITEM STATE'
  blogItem: {},

  setBlogItem: function (object) {
    set({blogItem: object})
  },
  // #endregion

  // #region 'SERVICE ITEM STATE'
  serviceItem: {},

  setServiceItem: function (object) {
    set({serviceItem: object})
  },
  // #endregion

  // #region 'COMPANY ITEM STATE'
  companyItem: {},

  setCompanyItem: function (object) {
    set({companyItem: object})
  },
  // #endregion

  // #region 'COMPANIES STATE'
  setCompanies: function (array) {
    set({companies: array})
  },
  // #endregion

  // #region 'OTHER STATA'
  postsFooter: [],

  setPostsFooter: function (array) {
    set({postsFooter: array})
  },

  formTouch: [],

  setFormTouch: function (array) {
    set({formTouch: array})
  },

  categoryClicked: false,

  setCategoryClicked: function() {
    set({categoryClicked: !get().categoryClicked})
  },
  // #endregion

  // #region 'PRODUCT ITEM STATE'
  initialRelatedItems: [],
  productItem: null,

  setInitialRelatedItems: function(array) {
    set({initialRelatedItems: array})
  },

  setProductItem: function(object) {
    set({productItem: object})
  }
  // #endregion

}))