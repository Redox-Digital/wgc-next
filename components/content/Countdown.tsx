'use client';

import { useEffect, useState } from 'react';

type CountdownProps = {
  targetTimestamp: number; // Timestamp en secondes (ex: 1735689600) ou millisecondes
  onEnd?: () => void; // Callback optionnel quand le décompte est fini
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isFinished: boolean;
};

export function Countdown({ targetTimestamp, onEnd }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isFinished: false,
  });

  useEffect(() => {
    // Déterminer si le timestamp est en secondes ou millisecondes
    // Si le nombre est très petit (ex: année 2025 en secondes ~1.7e9), on convertit.
    // Un timestamp en ms pour 2025 est ~1.7e12.
    const isSeconds = targetTimestamp < 10000000000;
    const targetDate = new Date(isSeconds ? targetTimestamp * 1000 : targetTimestamp).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        if (!timeLeft.isFinished) {
          onEnd?.();
        }
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isFinished: true,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isFinished: false,
      };
    };

    // Calcul initial immédiat pour éviter d'afficher des zéros au premier rendu
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTimestamp, onEnd, timeLeft.isFinished]);

  if (timeLeft.isFinished) {
    return null;
  }

  // Fonction utilitaire pour ajouter un zéro devant les chiffres < 10
  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <span>
      {pad(timeLeft.days)}j {pad(timeLeft.hours)}h {pad(timeLeft.minutes)}m {pad(timeLeft.seconds)}s
    </span>
  );
}
