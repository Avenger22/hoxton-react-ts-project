import create from 'zustand'
import AppStoreState from '../zustand/types/interfaceStore'
import {Item, User, Coach, Company, Service, Article, FormType, TextAreaType} from "./types/typesStore"
import { mountStoreDevtool } from 'simple-zustand-devtools';

// #region 'Zustand STATE MANAGEMENT STORE'
export const useStore = create<AppStoreState>((set, get):AppStoreState => ({

  // #region 'GENERAL STATE

  // #region 'General state most important'
  items: [],
  initialItems: [],
  users: [],
  companies: [],

  newsLetterEmail: '',
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

      let itemsCopy: Item[] = JSON.parse(JSON.stringify(get().items))
      const index: number = itemsCopy.findIndex(target => target.id === product.id)

      const item: Item = itemsCopy[index]

      if (item.stock > 0) {

        const newItem: Item = {
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

  setBagClickSpan: function (number) {

    const {bagClickSpan} = get()

    if (number === 1) {
      set({bagClickSpan: bagClickSpan + number})
    }

    else if(number === -1) {
      set({bagClickSpan: bagClickSpan - number})
    }

    else if(number === 0) {
      set({bagClickSpan: number})
    }
    
    else {
      set({bagClickSpan: bagClickSpan + number})
    }

  },

  setFavoriteClickSpan: function (number) {

    const {favoriteClickSpan} = get()

    if (number === 1) {
      set({bagClickSpan: favoriteClickSpan + number})
    }

    else if(number === -1) {
      set({bagClickSpan: favoriteClickSpan - number})
    }

    else if(number === 0) {
      set({bagClickSpan: number})
    }
    
    else {
      set({bagClickSpan: favoriteClickSpan + number})
    }
    
  },

  handleOnChangeSearchTerm: function(e) {
    set({searchTerm: e.target.value})
  },

  setSelectType: function(selectValue) {
    set({selectType: selectValue})
  },

  handleOnClickCategory: function (liValue) {
    set({category: liValue})
  },

  handleOnChangeSelect: function(selectValue) {
    set({selectType: selectValue})
  },

  handleOffersEvent: function() {
    set({category: 'offers'})
  },

  handleSignInStatus: function() {
    const {signInStatus} = get()
    set({signInStatus: !signInStatus})
  },

  handleFormNewsletter: function (e) {    
    const inputEl = e.target as FormType
    set({newsLetterEmail: inputEl.newsLetter.value})
  },

  setSignInStatus: function () {
    const {signInStatus} = get()
    set({signInStatus: !signInStatus})
  },

  handleButtonRemoveBasket: function (product: Item) {
    
    const { items, bagClickSpan } = get()

    let itemsCopy: Item[] = JSON.parse(JSON.stringify(items));
    const index = itemsCopy.findIndex(target => target.id === product.id)

    const item = itemsCopy[index]

    set({bagClickSpan: bagClickSpan - item.quantity})

    const newItem: Item = {
      ...item,
      quantity: 0,
      stock: item.stock + 1
    }

    itemsCopy[index] = newItem

    set({items: itemsCopy})

  },

  handleButtonRemoveFavorite: function (product: Item) {
    
    const { items, favoriteClickSpan } = get()

    let itemsCopy: Item[] = JSON.parse(JSON.stringify(items));
    const index: number = itemsCopy.findIndex(target => target.id === product.id)

    const item: Item = itemsCopy[index]

    const newItem: Item = {
      ...item,
      favorite: false
    }

    itemsCopy[index] = newItem

    set({favoriteClickSpan: favoriteClickSpan - 1})
    set({items: itemsCopy})

  },

  handleButtonAddFavorite: function (product: Item) {
  
    const { signInStatus, items, favoriteClickSpan } = get()

    if (signInStatus === true) {

        let itemsCopy: Item[] = JSON.parse(JSON.stringify(items))
        const index: number = itemsCopy.findIndex(target => target.id === product.id)

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

  handleButtonAddBagRemoveFavorite: function (product: Item) {

    const {items, bagClickSpan, favoriteClickSpan} = get()

    let itemsCopy: Item[] = JSON.parse(JSON.stringify(items))
    const index: number = itemsCopy.findIndex(target => target.id === product.id)

    const item: Item = itemsCopy[index]

    const newItem: Item = {
        ...item,
        quantity: item.quantity ? item.quantity + 1 : 1,
        favorite: false
    }

    itemsCopy[index] = newItem

    set({bagClickSpan: bagClickSpan + 1})
    set({favoriteClickSpan: favoriteClickSpan - 1})
    set({items: itemsCopy})

  },

  setUsers: function(array: User[]) {
    set({users: array})
  },

  setItems: function(array: Item[]) {
    set({items: array})
  },

  setInitialItems: function(array: Item[])  {
    set({initialItems: array})
  },

  handleOnChangeBasketSelect: function (value, objectBasket) {
        
    const {items} = get()

    let productsCopy: Item[] = JSON.parse(JSON.stringify(items))
    const index: number = productsCopy.findIndex(target => target.id === objectBasket.id)

    const item = productsCopy[index]

    if (parseInt(value) <= item.stock) {
        
        const newItem: Item = { ...item, quantity: parseInt(value) }

        if (newItem.quantity === 0) {
            set({bagClickSpan: 0})
        }
        
        productsCopy[index] = newItem
        set({items: productsCopy})

      }

    else {

      alert("You cannot have more than the stock of the item")
      
      const newItem: Item = { ...item, quantity: 1 }
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
    // @ts-ignore
    const textAreaEl:any = e.target.textareaContact as TextAreaType
     // @ts-ignore
    set({textArea: textAreaEl.value})
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
    
    const formEl = e.target as FormType

    const array: {email: string, subject: string, textArea: string, fullName: string, phone: string}[]  = [
        {
            email: emailContactUs, 
            subject: subjectContactUs,
            textArea: textAreaContactUs,
            fullName: nameContactUs,
            phone: phoneContactUs
        }
    ]

     // @ts-ignore
    const newArray: {email: string, subject: string, textArea: string, fullName: string, phone: string}[] = [...formContactUs, array]

    formEl.reset()
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
    const gettingUser: User | undefined = getUser(userNameSignIn, passwordSignIn)
    const formEl = e.target as FormType

    e.preventDefault();

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
      
      formEl.reset()

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
    
    const formEl = e.target as FormType
    formEl.preventDefault()

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

    formEl.reset()

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
  teamItem: null,

  setTeamItem: function (object) {
    set({teamItem: object})
  },
  // #endregion

  // #region 'BLOG ITEM STATE'
  blogItem: null,

  setBlogItem: function (object) {
    set({blogItem: object})
  },
  // #endregion

  // #region 'SERVICE ITEM STATE'
  serviceItem: null,

  setServiceItem: function (object) {
    set({serviceItem: object})
  },
  // #endregion

  // #region 'COMPANY ITEM STATE'
  companyItem: null,

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

if (process.env.NODE_ENV === 'development') {
   // @ts-ignore
  mountStoreDevtool('Store', useStore);
}
// #endregion