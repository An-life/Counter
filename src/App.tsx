import React, {useState, MouseEvent} from 'react';
import './App.css';


function App() {
    let [value, setValue] = useState<number>(0);
    let [disable, setDisable] = useState<{ [key: string]: boolean }>({bReset: true, bInc: false});

    const incClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.id === '2') {
            setDisable({...disable, bReset: true});
            setValue(0)
        } else if (value < 5) {
            setDisable({...disable, bReset: false});
            setValue(value + 1);
        }
}

return (

    <div className="App">
        <div className={'container'}>

        <div className={value===5?'valueContainer5':'valueContainer'}>{value}</div>
            <div className={'buttonContainer'}>
        <button  className={value===5?'disButton':'button'} id="1" onClick={(e) => incClick(e)} disabled={value===5?true:false}>inc</button>
        <button className={disable.bReset?'disButton':'button'} id="2" onClick={(e) => incClick(e)} disabled={disable.bReset}>res</button>
            </div>
        </div>
    </div>
);
}

export default App;
