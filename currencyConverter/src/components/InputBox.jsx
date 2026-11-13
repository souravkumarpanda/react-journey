import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`flex min-h-36 w-full items-start rounded-2xl bg-white p-5 text-base shadow-sm sm:min-h-40 sm:p-6 ${className}`}
    >
      <div className="w-1/2 min-w-0">
        <label
          htmlFor={amountInputId}
          className="mb-4 inline-block text-lg font-medium text-black/45 sm:text-xl"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="w-full bg-transparent py-1 text-xl text-black outline-none placeholder:text-black/35 disabled:cursor-default sm:text-2xl"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      <div className="flex w-1/2 min-w-0 flex-col items-end text-right">
        <p className="mb-4 text-lg font-medium text-black/45 sm:text-xl">
          Currency Type
        </p>
        <select
          className="max-w-full cursor-pointer rounded-xl bg-gray-100 px-3 py-2 text-base lowercase text-black outline-none transition-colors hover:bg-gray-200 focus:ring-2 focus:ring-blue-300 sm:px-4 sm:py-3 sm:text-xl"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
