import { useRef, useState } from "react";

export default function UseRef() {
    let variavel = 0;
    const variavelRef = useRef(0)
    const [variavelUseState, setVariavelUseState] = useState(0)

    const refInput = useRef<HTMLInputElement>(null)

    const [corInput, setCorInput] = useState('red')

    const showInfo = () => {
        alert(`
            Variavel= ${variavel}
            ref= ${variavelRef.current}
            useState= ${variavelUseState}
        `)
    }

    return (
        <div>
            <p>Conhecendo use ref</p>
            <p>Variavel:{variavel}</p>
            <p>Ref:{variavelRef.current}</p>
            <p>State:{variavelUseState}</p>

            <button onClick={showInfo}>Alert</button>

            <br />

            <button onClick={() => variavel++}>Variavel++</button>

            <button onClick={() => variavelRef.current++}>useRef</button>

            <button onClick={() => setVariavelUseState(variavelUseState+1)}>useState</button>

            <br />           

            <input ref={refInput} style={{backgroundColor:corInput}}></input>

            <button onClick={() => refInput.current?.focus()}>botao focus</button>
            <button onClick={() => setCorInput("blue")}>mudar cor input</button>
        </div>
    )
}