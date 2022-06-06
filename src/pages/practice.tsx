import React, { FC, useState } from "react";

const Practice: FC = () => {
  const [monthValue1, setMonthValue1] = useState<string>("");
  const [monthValue2, setMonthValue2] = useState<string>("");
  const [monthValue3, setMonthValue3] = useState<string>("");

  const [atomic, setAtomic] = useState(false);
  const [addition, setAddition] = useState(false);
  const [text, setText] = useState(false);
  const [removal, setRemoval] = useState(false);

  return (
    <>
      <div>
        <h1>Aria-live assertive</h1>
        <select
          name="months"
          id=""
          onChange={(e) => setMonthValue1(e.currentTarget.value)}
          className="text-black"
          aria-controls="planetInfo"
        >
          <option value="january" className="text-black">
            January
          </option>
          <option value="february" className="text-black">
            February
          </option>
          <option value="march" className="text-black">
            March
          </option>
        </select>

        <section id="planetInfo">
          <h1 aria-live="assertive">{monthValue1} is selected</h1>
        </section>
      </div>
      <div>
        <h1>Aria-Polite</h1>
        <select
          name="months"
          id=""
          onChange={(e) => setMonthValue2(e.currentTarget.value)}
          className="text-black"
          aria-controls="planetInfo"
        >
          <option value="january" className="text-black">
            January
          </option>
          <option value="february" className="text-black">
            February
          </option>
          <option value="march" className="text-black">
            March
          </option>
        </select>

        <section id="planetInfo">
          <h1 aria-live="polite">{monthValue2} is selected</h1>
        </section>
      </div>
      <div>
        <h1>Aria-Off</h1>
        <select
          name="months"
          id=""
          onChange={(e) => setMonthValue3(e.currentTarget.value)}
          className="text-black"
          aria-controls="planetInfo"
        >
          <option value="january" className="text-black">
            January
          </option>
          <option value="february" className="text-black">
            February
          </option>
          <option value="march" className="text-black">
            March
          </option>
        </select>

        <section id="planetInfo">
          <h1 aria-live="off">{monthValue3} is selected</h1>
        </section>
      </div>

      <div className="">
        <h1>Aria owns</h1>
        <ul>
          <li aria-owns="child" tabIndex={0}>
            Fruit
          </li>
          <li>Vegetables</li>
        </ul>

        <ul id="child">
          <li tabIndex={0}>Apples</li>
          <li>Bananas</li>
          <li>Bananas</li>
        </ul>
      </div>

      <div className="">
        <h1>Aria labeledBy</h1>

        <input type="checkbox" aria-labelledby="tac" />
        <span id="tac">I agree to the Terms and Conditions.</span>
      </div>

      <div className="">
        <h1>Aria described by</h1>

        <button aria-describedby="trash-desc">Move to trash</button>
        <p id="trash-desc">
          Items in the trash will be permanently removed after 30 days.
        </p>
      </div>

      <div className="">
        <h1>Aria atomic</h1>
        <div className="" aria-live="polite" aria-atomic="true">
          <span>Hello</span>
          {atomic && <span>should alert atomic</span>}
          {atomic && "should alert atomic"}
        </div>
        <button onClick={() => setAtomic(true)}>Add Item</button>
      </div>

      <div className="">
        <h1>Aria relevant additions</h1>
        <div className="" aria-live="polite" aria-relevant="additions">
          <span>Hello</span>
          {addition && <span>should alert added eleements</span>}
          {addition && "should not alert text"}
        </div>
        <button onClick={() => setAddition(true)}>Add Item</button>
      </div>

      <div className="">
        <h1>Aria relevant text</h1>
        <div className="" aria-live="polite" aria-relevant="text">
          <span>Hello</span>
          {text && <span>should not alert added eleements</span>}
          {text && "should  alert added text"}
        </div>
        <button onClick={() => setText(true)}>Add Item</button>
      </div>

      <div className="">
        <h1>Aria relevant removal</h1>
        <div className="" aria-live="polite" aria-relevant="removals">
          <span>Hello</span>
          {removal && <span>should alert removed eleements</span>}
        </div>
        <button onClick={() => setRemoval(true)}>remove Item</button>
      </div>
    </>
  );
};

export default Practice;
