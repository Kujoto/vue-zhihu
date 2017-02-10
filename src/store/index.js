import axios from 'axios'
import { EventEmitter } from 'events'
import { Promise } from 'es6-promise'

const apiURL = '/json/'
const itemsCache = Object.create(null)
const store = new EventEmitter()

export default store

store.fetchItems = id => {
  return new Promise((resolve, reject) => {
    if (itemsCache[id]) {
      resolve(itemsCache[id])
    } else {
      axios.get(apiURL + 'news' +  id + '.json')
           .then(d => {
              const story = itemsCache[id] = d.data.stories
              console.log(story)
              resolve(story)
            })
            .catch(error => console.log(error))
    }
  })
}

store.fetchItem = id => {
  return new Promise((resolve, reject) => {
    if (itemsCache[id]) {
      resolve(itemsCache[id])
    } else {
      axios.get(apiURL + 'item' +  id + '.json')
           .then(d => {
              const body = itemsCache[id] = d.data.body
              console.log(body)
              resolve(body)
            })
            .catch(error => console.log(error))
    }
  })
}