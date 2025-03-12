import { useState } from "react";
import { format, addDays } from "date-fns";

export default function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = addDays(new Date(), count);

  function handleStepChange(e) {
    setStep(Number(e.target.value));
  }

  function handleDecrease() {
    setCount((count) => count - step);
  }

  function handleIncrease() {
    setCount((count) => count + step);
  }

  function handleInput(e) {
    setCount(Number(e.target.value));
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={handleStepChange}
        />
        <span>{step}</span>
      </div>
      <br />
      <div>
        <button onClick={handleDecrease}>-</button>
        <input type="text" value={count} onChange={handleInput} />
        <button onClick={handleIncrease}>+</button>
      </div>
      <p className="date">{format(date, "MMMM d, yyyy")}</p>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
