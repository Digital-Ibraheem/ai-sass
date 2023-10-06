'use client';

import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Sidebar } from '@/components/sidebar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant='ghost' size='icon' className='md:hidden'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetClose>
        <SheetContent side='left' className='p-0 bg-white'>
          <Sidebar />
        </SheetContent>
      </SheetClose>
    </Sheet>
  );
};
