'use client';

import { ArrowRight, Code, ImageIcon, MessageSquare, Music, Video } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const tools = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    href: '/conversation',
  },
  {
    label: 'Music Generation',
    icon: Music,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    href: '/music',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: 'text-pink-700',
    bgColor: 'bg-pink-700/10',
    href: '/image',
  },
  {
    label: 'Video Generation',
    icon: Video,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    href: '/video',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    href: '/code',
  },
];

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className='mb-8 space-y-4'>
        <h2 className='text-2xl md:text-4xl font-bold text-center'>Explore the power of AI</h2>
        <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className='group/item px-4 md:px-20 lg:px-32 space-y-4'>
        {tools.map((tool) => (
          <Card
            key={tool.href}
            onClick={() => router.push(tool.href)}
            className='group/edit p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer'
          >
            <div className='flex items-center gap-x-4'>
              <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                <tool.icon className={cn('w-8 h-8', tool.color)} />
              </div>
              <div className='font-semibold'>{tool.label}</div>
            </div>

            <div className='group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ...'>
              <ArrowRight className='w-5 h-5' />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
