import { SVGProps } from 'react';

interface BackPageProps extends SVGProps<SVGSVGElement> {
  title?: string;
}

export const BackPage = ({ title, ...props }: BackPageProps) => {
  return (
    <svg
      {...props}
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title && <title>{title}</title>}
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
    </svg>
  );
};