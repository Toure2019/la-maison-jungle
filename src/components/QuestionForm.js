import { useState } from 'react';

function QuestionForm() {

    const [inputValue, setInputValue] = useState("Posez votre question ici");
    const isInputError = inputValue.includes("f"); // true OR false
    function checkValue(value) {
        if (!value.includes("f")) {
            setInputValue(value);
        }
    }
    return (
        <div>
            { isInputError && <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div> }
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}>
            </textarea>
            <button onClick={() => {alert(inputValue)}}>Alertez moi 🚨</button>
        </div>
    )

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     console.log(e.target['my_input'].value)
    // }
    // return (
    //     <div>
    //         <form onSubmit={handleSubmit}>
    //             <input type="text" name="my_input" defaultValue="Taper votre texte" />
    //             <button type="submit">Entrer</button>
    //         </form>
    //     </div>
    // );
}

export default QuestionForm;