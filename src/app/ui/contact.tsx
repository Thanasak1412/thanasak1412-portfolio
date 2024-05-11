'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@headlessui/react';
import { useEffect, useRef, useState, type LegacyRef } from 'react';

import { cn } from '@/app/lib/utils';
import { sendEmail } from '@/app/lib/actions';
import { contactContent } from '@/app/lib/placeholder-data';
import ModalSuccess from './modal-success';
import ExclamationCircleIcon from '@heroicons/react/24/solid/ExclamationCircleIcon';

export default function Contact() {
  const [errorMessage, dispatch] = useFormState(sendEmail, undefined);

  const formRef = useRef<HTMLFormElement | null>(null);

  const { pending } = useFormStatus();

  const [isOpen, setIsOpen] = useState(false);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (errorMessage === null && !pending) {
      setIsOpen(true);
      formRef.current?.reset();
    }
  }, [errorMessage, pending]);

  return (
    <>
      <section id="contact" className="w-full h-full">
        <div
          style={{ background: 'url(/bg-common.webp)' }}
          className={cn(
            'min-h-screen py-24 container',
            'flex flex-col gap-y-8 items-center justify-center',
            'text-slate-600'
          )}
        >
          {/* HEADING SECTION */}
          <div className="max-w-[90%] lg:max-w-[60%] relative text-center">
            <h2
              className={cn(
                'text-lg lg:text-4xl font-bold uppercase mb-8 text-black',
                'after:w-10 after:h-[5px] after:bg-blue-700 after:rounded-3xl after:absolute after:-translate-x-1/2 after:left-1/2',
                'after:mt-9 after:lg:mt-14'
              )}
            >
              {contactContent.title}
            </h2>
            <p className="text-sm lg:text-lg">{contactContent.desc}</p>
          </div>

          {/* CONTACT FORM SECTION */}
          <form action={dispatch} className="w-full lg:max-w-[75%]" ref={formRef}>
            <div className="flex flex-col w-full p-6 bg-white rounded-lg shadow-md gap-y-4">
              {/* INPUT NAME */}
              <div className="flex flex-col gap-y-1">
                <label htmlFor="name" className="text-sm font-semibold">
                  {contactContent.nameLabel}
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className={cn(
                    'px-5 py-3 text-base bg-gray-100 border border-gray-100 rounded-md',
                    'focus:outline-neutral-300'
                  )}
                  placeholder={contactContent.namePlaceholder}
                />
              </div>

              {/* INPUT EMAIL */}
              <div className="flex flex-col gap-y-1">
                <label htmlFor="email" className="text-sm font-semibold">
                  {contactContent.emailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={cn(
                    'px-5 py-3 text-base bg-gray-100 border border-gray-100 rounded-md',
                    'focus:outline-neutral-300'
                  )}
                  placeholder={contactContent.emailPlaceholder}
                />
              </div>

              {/* INPUT MESSAGE */}
              <div className="flex flex-col gap-y-1">
                <label htmlFor="message" className="text-sm font-semibold">
                  {contactContent.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className={cn(
                    'px-5 py-3 text-base bg-gray-100 border border-gray-100 rounded-md',
                    'resize-none',
                    'focus:outline-neutral-300'
                  )}
                  placeholder={contactContent.messagePlaceholder}
                  rows={4}
                />
              </div>

              <SendEmailButton />

              <div className="flex items-end h-8 space-x-1" aria-live="polite" aria-atomic="true">
                {errorMessage && (
                  <>
                    <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
                    <small className="text-sm text-red-500">{errorMessage}</small>
                  </>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* MODAL SUCCESS */}
      <ModalSuccess isOpen={isOpen} close={handleModalClose} />
    </>
  );
}

function SendEmailButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className={cn(
        'bg-blue-500 text-white rounded-md uppercase shadow-[0_5px_15px_0_rgba(0, 0, 0, 0.15)]',
        'mt-6 px-12 py-3 font-semibold lg:max-w-fit lg:ml-auto',
        'hover:bg-blue-400'
      )}
      aria-disabled={pending}
    >
      {contactContent.submitButton}
    </Button>
  );
}
