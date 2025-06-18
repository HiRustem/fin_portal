import * as React from 'react';

import { cn } from '~/lib/utils';

interface IInputError {
  error?: string;
}

const InputError = ({ error }: IInputError) => {
  return (
    <p
      className={cn(
        'text-sm text-red-500 transition-all duration-500',
        error ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden',
      )}
    >
      {error}
    </p>
  );
};

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'> & IInputError>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <>
        <input
          type={type}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className,
          )}
          ref={ref}
          {...props}
        />

        <InputError error={error} />
      </>
    );
  },
);
Input.displayName = 'Input';

export { Input, InputError };
