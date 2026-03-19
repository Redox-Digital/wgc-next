import { useEffect } from 'react';

type ColorProps = {
  color: string;
  gradientBg?: boolean;
};

// Weird function, but working. It changes the background color of the page.
export function ChangeBackgroundColor({ color, gradientBg }: ColorProps) {
  useEffect(() => {
    document.body.style.backgroundColor = color;
    if (gradientBg) document.body.className = 'bgGradient';

    // Cleanup function to reset the background color when the component is unmounted
    return () => {
      document.body.style.backgroundColor = '';
      document.body.className = '';
    };
  }, [color]);

  return null;
}

// Weird function, but working. It changes the background color of the page and removes the paddings / margins.
// Use only on the Landing Page.
export function ChangeBody({ color, gradientBg }: ColorProps) {
  useEffect(() => {
    document.body.style.backgroundColor = color;
    if (gradientBg) document.body.className = 'bgGradient';

    document.body.style.padding = '0px';
    document.body.style.margin = '0px';

    // Cleanup function to reset the inline CSS when the component is unmounted
    return () => {
      document.body.style.backgroundColor = '';
      document.body.className = '';

      document.body.style.padding = '';
      document.body.style.margin = '';
    };
  }, [color]);

  return null;
}
