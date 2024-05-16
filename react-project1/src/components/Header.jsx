
const reactDesc = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));

}

export default function Header() {
    return (
      <div>
        <h2>React Essentaital</h2>
        <p>
          {reactDesc[genRandomInt(2)]} React concept you will needfor almostany app you are going to bulid!
        </p>
      </div>
  
    )
  };