import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';

import { cn } from '~/lib/utils';
import { Button } from './button';

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
Drawer.displayName = 'Drawer';

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn('fixed inset-0 z-50 bg-black/80', className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        'fixed inset-x-0 bottom-0 z-50',
        'flex flex-col',
        'rounded-t-[10px] border bg-background dark:bg-zinc-900',
        'pb-[env(safe-area-inset-bottom)]',
        className,
      )}
      {...props}
    >
      <div className='mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted' />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = 'DrawerContent';

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('grid gap-1.5 p-4 text-center sm:text-left', className)} {...props} />
);
DrawerHeader.displayName = 'DrawerHeader';

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mt-auto flex flex-col gap-2 p-4', className)} {...props} />
);
DrawerFooter.displayName = 'DrawerFooter';

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold leading-none tracking-tight', className)}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

interface IDrawerComponent<KeyType> {
  isOpen: boolean;
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
  onSelect: (value: KeyType) => void;
  valuesMap: Map<KeyType, string>;
  value: KeyType;
  title?: string;
  description?: string;
  trigger?: React.ReactNode;
}

const DrawerComponent = <KeyType,>({
  isOpen,
  setIsOpen,
  onSelect,
  valuesMap,
  value,
  title,
  description,
  trigger,
}: IDrawerComponent<KeyType>) => {
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      {trigger ?? (
        <DrawerTrigger asChild>
          <Button variant='outline'>{valuesMap.get(value)}</Button>
        </DrawerTrigger>
      )}

      <DrawerContent>
        <div className='mx-auto w-full max-w-sm'>
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>

          <div className='p-4 pb-12'>
            <div className='flex flex-col gap-2 mt-3 mb-3'>
              {Array.from(valuesMap.keys()).map((typeItem) => (
                <Button
                  key={typeItem as React.Key}
                  variant='outline'
                  onClick={() => {
                    onSelect(typeItem);
                    setIsOpen(false);
                  }}
                >
                  {valuesMap.get(typeItem)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerComponent,
};
