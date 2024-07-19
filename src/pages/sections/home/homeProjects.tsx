import useOnScreen from "../../../hooks/useOnScreen";
import React, { useEffect, useRef, useState } from "react";

export default function HomeProjects() {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);


  return (
    <div ref={ref} className="min-h-screen">
      <h1>Projects</h1>
    </div>
  );
}
