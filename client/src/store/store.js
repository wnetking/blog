import { createStore } from 'redux'
import {updatePageData} from './reducers'

let store = createStore(updatePageData)

export default store