import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
          </StepMessage>
          
          <div className="buttons">
            <Button onClick={handlePrevious} bgColor="#7950f2" textColor="#fff">
              <span>👈</span>Previous
            </Button>
            <Button bgColor="#7950f2" onClick={handleNext} textColor="#fff">
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ bgColor, textColor, children, onClick }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}>
      {children}
    </button>
  );
}

function StepMessage({step, children}) {
  return (
    <div>
      <p className="message">
            <h3>Step {step}</h3> {messages[step - 1]}
          </p>
    </div>
  );
}





// import { useState } from "react";

// export default function App() {
//   return <TipCalculator />;
// }

// function TipCalculator() {
//   const [bill, setbill] = useState(0);
//   return (
//     <div>
//       <InputBill bill={bill} setbill={setbill} />
//       <SelectPercentage myService={myservice} onMyService={setMyService}>
//         How did you like the service?
//       </SelectPercentage>
//       <SelectPercentage hisService={hisService} onHisService={setHisService}>
//         How did your friend like the service?
//       </SelectPercentage>
//       <Output bill={bill} />
//       <Reset />
//     </div>
//   );
// }

// function InputBill({ bill, setbill }) {
//   return (
//     <div>
//       <span>How much was the bill?</span>
//       <input
//         value={bill}
//         type="text"
//         onChange={(e) => setbill(parseInt(e.target.value))}
//       />
//     </div>
//   );
// }

// function SelectPercentage({ children, myService, onMyService }) {
//   return (
//     <div>
//       <label>{children}</label>
//       <select value={service} onChange={(e) => onService(e.target.value)}>
//         <option value="0">Dissatisfied (0%)</option>
//         <option value="5">It was okay (5%)</option>
//         <option value="10">It was good (10%)</option>
//         <option value="20">Absolutely Amazing (20%)</option>
//       </select>
//     </div>
//   );
// }

// function Output({ bill }) {
//   return (
//     <div>
//       {isNaN(bill) || bill === 0 ? null : (
//         <h1>
//           You pay ${bill} (${bill})
//         </h1>
//       )}
//     </div>
//   );
// }

// function Reset() {
//   return <button>Reset</button>;
// }
