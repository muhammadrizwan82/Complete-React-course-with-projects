/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useId } from "react"


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "USD",
    amountDisable = false,
    currencyDisable = false,
    className = ""
}) {
    const amountInputId = useId()

    console.log(label, selectedCurrency)

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex`} >
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">{label}</label>
                <input
                    type="number"
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <label className="text-black/40 mb-12 inline-block ">Currency Type</label>
                <select
                    name="" id=""
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency.toUpperCase()}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div >
    )
}

export default InputBox