import { useState, useEffect } from "react";

export default function Loader({ children }) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((dots) => (dots.length < 3 ? dots + "." : ""));
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {children}
      {dots}
    </div>
  );
}
