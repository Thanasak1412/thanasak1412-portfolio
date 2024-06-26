'use client';

import Link from 'next/link';
import { Bars3Icon, XMarkIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

import { cn } from '@/app/lib/utils';
import Image from '@/app/ui/image';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="sticky top-0 z-10 w-full px-12 bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                {/* LOGO SECTION */}
                <Link href="/" passHref>
                  <div className="flex items-center flex-shrink-0">
                    <RocketLaunchIcon className="text-blue-300 w-7 h-7" />
                    <h6 className="mx-4 overflow-hidden text-sm font-semibold text-ellipsis whitespace-nowrap">
                      Thanasak Srisaeng
                    </h6>
                  </div>
                </Link>

                {/* NAVBAR ITEMS ON DESKTOP SECTION */}
                <div className="hidden sm:ml-12 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={cn(
                          'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* PROFILE IMAGE SECTION */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Image
                  src="/profile.jpg"
                  alt="My Profile"
                  imgContainer="max-w-11 max-h-11 rounded-full"
                  className="object-[0px_-5px] cursor-pointer hover:border-blue-500 hover:border hover:mix-blend-lighten"
                />
              </div>
            </div>
          </div>

          {/* NAVBAR ITEM ON MOBILE SECTION */}
          <DisclosurePanel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={cn(
                    'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
