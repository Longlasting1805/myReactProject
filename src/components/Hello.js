import React from "react"

const Hello = (props) => {
    console.log(props)
    return (
        <div> 
            <h1>Hello {props.name} aka {props.heroName}</h1>
            {props.children}
        </div>

    )

   

}

export default Hello

 //     // thi is with jsx
    //     // <div className = 'dummyClass>
    //     //     <h1> Kello Kenny</h1>
    //     // </div>
    // )

    // // this is without jsx
    // // return React.createElement('div', null, React.createElement('h1', null, 'hello kenny'))