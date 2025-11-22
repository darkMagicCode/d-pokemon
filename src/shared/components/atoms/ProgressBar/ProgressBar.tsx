import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

export const RouteProgressBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    // Clear any existing timers
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    // Start loading animation
    const timer1 = setTimeout(() => {
      setIsLoading(true);
      setProgress(0);
    }, 0);

    const timer2 = setTimeout(() => setProgress(30), 100);
    const timer3 = setTimeout(() => setProgress(60), 300);
    const timer4 = setTimeout(() => setProgress(90), 500);

    const timer5 = setTimeout(() => {
      setProgress(100);
      const timer6 = setTimeout(() => setIsLoading(false), 200);
      timersRef.current.push(timer6);
    }, 700);

    timersRef.current = [timer1, timer2, timer3, timer4, timer5];

    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, [location.pathname, location.search]);

  if (!isLoading && progress === 0) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 z-[60] transition-opacity duration-200"
      style={{
        opacity: isLoading ? 1 : 0,
      }}
    >
      <div
        className="h-full bg-gradient-to-r from-fuchsia-500 via-pink-500 to-sky-500 transition-all duration-300 ease-out shadow-lg"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
};

