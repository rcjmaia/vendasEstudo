import React, { useState, useEffect } from 'react'

function Contator() {
    const [contador, setContador] = useState(0)

    useEffect(() => {
        document.title = `vc clicou ${contador} vezes`
    }, [contador])

    return(
        <div>
            <p>vc clicou {contador} vezes</p>
            <button onClick={() => setContador(contador+ 1)}></button>
        </div>
    )
        

}
export default Contator;
