

export const CORE_CONCEPTS = [
    {
        title: "Components",
        description: "The core UI biulding block -- compose the user interface by the use"

    },
    {
        title: "JSX",
        description: "The core UI biulding block -- compose the user interface by the use"

    },
    {
        title: "Props",
        description: "The core UI biulding block -- compose the user interface by the use"

    },
    {
        title: "ApI",
        description: "The core UI biulding block -- compose the user interface by the use"

    }

]

export const EXMAPLES ={ 
    components:{
        title: "Components",
        description: "Here is the same example as above, but created using a Function component instead.A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.",
        code:`function Wellcome(){
            return <h1>Hello worls!</h1>
        }`

    },
    jsx:{
        title: "JSX",
        description: "JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.",
        code:`const myElement = (
            <ul>
              <li>Apples</li>
              <li>Bananas</li>
              <li>Cherries</li>
            </ul>
          );`

    },
    state:{
        title: "state",
        description: "The React useState Hook allows us to track state in a function component.State generally refers to data or properties that need to be tracking in an application.",
        code:`import { useState } from "react";
        function FavoriteColor() {
          const [color, setColor] = useState("red");
        
          return <h1>My favorite color is {color}!</h1>
        }`

    },
    props:{
        title: "props",
        description: "React Props are like function arguments in JavaScript and attributes in HTML.To send props into a component, use the same syntax as HTML attributes:",
        code:`function Car(props) {
            return <h2>I am a { props.brand }!</h2>;
          }`

    },
}