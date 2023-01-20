'use strict'

const elBox = document.querySelector("#box-all"),
  elBeef = document.querySelector("#wrapper-beef"),
  elTomato = document.querySelector("#wrapper-tomato"),
  elCock = document.querySelector("#wrapper-cockatiel"),
  elCow = document.querySelector("#wrapper-cow"),
  elList = document.querySelector(".wraper-list");

const arr = [
    {
        id:1,
        name:'Gosht'
    },
    {
        id:2,
        name:'Pamidor'
    },
    {
        id:3,
        name:'Kokat'
    },
    {
        id:4,
        name:'Siyr'
    }
]


arr.map((e) => {
    const item = document.createElement('li')
    item.className = 'width'
    item.innerText = `${e.name}`

    elList.appendChild(item)
})