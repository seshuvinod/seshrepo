import React from 'react'
import ReactDOM  from 'react-dom/client'
// import  ReactDOM from 'react-dom/client'


// let header=document.createElement('h1');
// header.textContent='Hello from JS'
// let rootElement=document.getElementById('root')
// rootElement.append(header);
let header=React.createElement('div',{id:'rootid'},[React.createElement('h1',{id:'h1id'},"Hello World"),React.createElement('h2',{id:'h2id'},"Hello World"),React.createElement('h3',{id:'h3id'},"Hello World")])
let root=ReactDOM.createRoot(document.getElementById('root'))

root.render(header)