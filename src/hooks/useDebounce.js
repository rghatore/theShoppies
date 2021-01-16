import { useState, useEffect } from "react";

// delay between renders so control api calls
export default function useDebounce(input, ms) {
  const [debounced, setDebounced] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => setDebounced(input), ms);
    return () => clearTimeout(timeout);
  }, [input, ms]);

  return debounced;
}