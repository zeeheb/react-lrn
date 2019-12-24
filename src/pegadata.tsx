import * as React from 'react';

function PegaData() {
    
    let [time , setTime] = React.useState("") // inicializa string time vazia

    let getTime = () => {
        setTime(new Date().toTimeString());
    }

    return (
        <div>
            {time}
            <button onClick={getTime}>Pegando a hora</button>
        </div>
    )
}

PegaData.displayName = 'PegaData';

export {
    PegaData
}