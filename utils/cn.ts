import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export let cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
