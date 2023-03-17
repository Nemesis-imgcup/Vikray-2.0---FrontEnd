import React, { FC } from 'react';

const Button: FC<{
  filled?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}> = ({ filled, children, className, onClick, disabled }) => {
  return (
      <button
          disabled={disabled}
          onClick={onClick}
          className={`rounded-2xl font-medium px-6 py-2 ${
              filled ? 'bg-[#F8F872]' : 'text-black'
          } text-black ${className}`}
      >
          {children}
      </button>
  );
};

export default Button;
