import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

const Drawer = ({open, onClose, children}) => {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={onClose}>
                <div className="absolute inset-0 overflow-hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="absolute inset-0 bg-black opacity-30 transition-opacity" />
                    </Transition.Child>
                    <div className="fixed inset-y-0 right-0 max-w-full flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className="relative w-screen max-w-[18rem]">
                                <div className="h-full flex flex-col py-6 overflow-x-hidden bg-white dark:bg-gray-800 shadow-xl overflow-y-scroll">
                                    <button
                                        type="button"
                                        className="rounded-md ml-4 text-gray-600 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none transition duration-200 ease-in"
                                        onClick={onClose}
                                    >
                                        <span className="sr-only">Close panel</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                    <div className="mt-4 flex-grow dark:text-gray-100">
                                        {children}
                                    </div>

                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
export default Drawer;