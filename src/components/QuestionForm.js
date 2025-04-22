//formulaires non controlés

/*function handleSubmit(e) {
    e.preventDefault()
    alert(e.target['my_input'].value)
  }

export default handleSubmit*/

//---------------------------------------------------

//Formulaires Controlés

import { useState } from 'react'

function QuestionForm() {
    function checkValue(value) {
        if (!value.includes('f')) {
            setInputValue(value)
        }
    }
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
    )
}

export default QuestionForm