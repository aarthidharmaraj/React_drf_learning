import React, { useState, useEffect } from "react";
export default function HooksComp1() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    document.title = `You have clicked ${count}times`;
  });
  return (
    <button onClick={() => setCount(count + 1)}>clicked {count} times</button>
  );
}
