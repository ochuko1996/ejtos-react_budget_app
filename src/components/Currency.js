import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext";
const currencyList = [
    {
        id: 1,
        currency: '£ Pound',
        symbol: '£',
        value: 'Pound'
    },
    {
        id: 2,
        currency: '$ Dollar',
        symbol: '$',
        value: 'Dollar'
    },
    {
        id: 3,
        currency: '€ Euro',
        symbol: '€',
        value: 'Euro'
    },
    {
        id: 4,
        currency: '₹ Ruppee',
        symbol: '₹',
        value: 'Ruppe'
    },
]
const Currency = ()=>{
    const {currency: data, dispatch} = useContext(AppContext);
    const [currency, setCurrency] = useState(data)
    const onHandleChange = (event)=>{
        const updatedCurrency = event.target.value
        setCurrency(updatedCurrency)
        dispatch({
            type: 'CHG_CURRENCY',
            payload: updatedCurrency
        })
        console.log(currency);
    }
    return (
        <div className="input-group" style={{height: '58px'}}>

            <label className="input-group-text" htmlFor="inputGroupSelect03">Currency &nbsp;
                <select className="custom-select" style={{  backgroundColor: '#92e499' }} id="inputGroupSelect03" onChange={onHandleChange}>
                    {
                        currencyList.map(currency  => (
                            <option value={currency.symbol} name={currency.value}>{currency.currency}</option>
                            ))
                    }
                </select>
            </label>
        </div>
    )
}
export default Currency