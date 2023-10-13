/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unstable-nested-components */

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Check, Code, Copy } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useForm } from 'react-hook-form';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as z from 'zod';

import { BotAvatar } from '@/components/bot-avatar';
import Heading from '@/components/heading';
import { Loader } from '@/components/loader';
import { Button } from '@/components/ui/button';
import { Empty } from '@/components/ui/empty';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { UserAvatar } from '@/components/user-avatar';
import { useProModal } from '@/hooks/use-pro-modal';
import { cn } from '@/lib/utils';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { formSchema } from './constants';

const CodePage = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const router = useRouter();
  const proModel = useProModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage = { role: 'user', content: values.prompt };
      const newMessages = [...messages, userMessage];

      const response = await axios.post('/api/code', { messages: newMessages });
      setMessages((current) => [...current, userMessage, response.data]);

      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModel.onOpen();
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title='Code Generation'
        description='Generate code using descriptive text.'
        icon={Code}
        iconColor='text-green-700'
        bgColor='bg-green-700/10'
      />
      <div className='px-4 lg:px-8'>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'
            >
              <FormField
                name='prompt'
                render={({ field }) => (
                  <FormItem className='col-span-12 lg:col-span-10'>
                    <FormControl className='m-0 p-0'>
                      <Input
                        className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent'
                        disabled={isLoading}
                        placeholder='Simple toggle button using react hooks.'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className='col-span-12 lg:col-span-2' disabled={isLoading}>
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className='space-y-4 mt-4'>
          {isLoading && (
            <div className='p-8 rounded-lg w-full flex items-center justify-center bg-muted'>
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && <Empty label='No conversation started.' />}
          <div className='flex flex-col-reverse gap-y-4'>
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  'p-8 w-full flex items-start gap-x-8 rounded-lg',
                  message.role === 'user' ? 'bg-white border border-black/10' : 'bg-muted'
                )}
              >
                {message.role === 'user' ? <UserAvatar /> : <BotAvatar />}
                <ReactMarkdown
                  components={{
                    code: ({ node, inline, className, children, ...props }: any) => {
                      const match = /language-(\w+)/.exec(className || '');
                      const [copied, setCopied] = useState(false);

                      const handleCopy = () => {
                        setCopied(true);
                        setTimeout(() => setCopied(false), 1500);
                      };

                      return !inline && match ? (
                        <div className='relative'>
                          <SyntaxHighlighter
                            language={match[1]}
                            PreTag='div'
                            children={String(children).replace(/\n$/, '')}
                            style={atomDark}
                          />
                          <CopyToClipboard text={children?.trim()} onCopy={handleCopy}>
                            <button
                              type='button'
                              className='absolute top-2 right-2 px-2 py-1 bg-white text-black rounded'
                              style={{ opacity: copied ? 0.7 : 1, transition: 'opacity 0.3s' }}
                            >
                              {copied ? (
                                <Check className='w-4 h-4' />
                              ) : (
                                <Copy className='h-4 w-4' />
                              )}
                            </button>
                          </CopyToClipboard>
                        </div>
                      ) : (
                        <code className='bg-black/10 rounded-lg p-1' {...props}>
                          {children}
                        </code>
                      );
                    },
                  }}
                  className='text-sm overflow-hidden leading-7'
                >
                  {message.content || ''}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePage;
