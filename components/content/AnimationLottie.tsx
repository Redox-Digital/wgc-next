import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
// import Lottie from "lottie-react";

type LottieProps = { animationPath: any; className?: string; loop?: boolean };

export default function AnimationLottie({ animationPath, className, loop }: LottieProps) {
  const defaultOptions = {
    loop: loop,
    autoplay: true,
    animationData: animationPath,
    className: className,
  };

  return <Lottie {...defaultOptions} />;
}
