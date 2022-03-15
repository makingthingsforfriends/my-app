import React, { useEffect, useState } from "react";

function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div style={{ fontSize: "5rem" }}>
      <h5 data-testid="clock-heading">The current time is</h5>
      {clockState}
    </div>
  );
}

export default Clock;
