import React from 'react'
import ReactDOM  from 'react-dom/client'
// import  ReactDOM from 'react-dom/client'



//Javascript to display Helloworld

// let header=document.createElement('h1');
// header.textContent='Hello from JS'
// let rootElement=document.getElementById('root')
// rootElement.append(header);


//React to Dislay Helloworld without jsx

// let header=React.createElement('div',{id:'rootid'},[React.createElement('h1',{id:'h1id'},"Hello World"),React.createElement('h2',{id:'h2id'},"Hello World"),React.createElement('h3',{id:'h3id'},"Hello World")])
 //let root=ReactDOM.createRoot(document.getElementById('root'))
 //root.render(<reactval/>)

let Reactval=()=>{
return <div className='class1'>
      <h1>Hello from JSX</h1>
      <h1>Hello from JSX 2</h1>
</div>
}


let root=ReactDOM.createRoot(document.getElementById('root'))

root.render(<Reactval/>)