import React from 'react';

const Section_1 = () => {
    return (
        <div>
            <div className="bg-white">
                <header className="absolute inset-x-0 top-0 z-50">
                    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="size-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    data-slot="icon"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            <a href="#" className="text-sm leading-6 font-semibold text-gray-900">
                                Product
                            </a>
                            <a href="#" className="text-sm leading-6 font-semibold text-gray-900">
                                Features
                            </a>
                            <a href="#" className="text-sm leading-6 font-semibold text-gray-900">
                                Marketplace
                            </a>
                            <a href="#" className="text-sm leading-6 font-semibold text-gray-900">
                                Company
                            </a>
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a href="#" className="text-sm leading-6 font-semibold text-gray-900">
                                Log in <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </nav>
                    {/* */}
                    <div className="lg:hidden" role="dialog" aria-modal="true">
                        {/* */}
                        <div className="fixed inset-0 z-50"></div>
                        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                        alt=""
                                    />
                                </a>
                                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                                    <span className="sr-only">Close menu</span>
                                    <svg
                                        className="size-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        data-slot="icon"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Product
                                        </a>
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Features
                                        </a>
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Marketplace
                                        </a>
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Company
                                        </a>
                                    </div>
                                    <div className="py-6">
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Log in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        ></div>
                    </div>
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                Announcing our next round of funding.{' '}
                                <a href="#" className="font-semibold text-indigo-600">
                                    <span className="absolute inset-0" aria-hidden="true"></span>Read more{' '}
                                    <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-balance text-gray-900 sm:text-6xl">
                                Data to enrich your online business
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-pretty text-gray-500">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
                                sunt amet fugiat veniam occaecat.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </a>
                                <a href="#" className="text-sm leading-6 font-semibold text-gray-900">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Section_2 = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <svg
                        viewBox="0 0 1024 1024"
                        className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                        aria-hidden="true"
                    >
                        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stopColor="#7775D6" />
                                <stop offset="1" stopColor="#E935C1" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                            Boost your productivity. Start using our app today.
                        </h2>
                        <p className="mt-6 text-lg/8 text-pretty text-gray-300">
                            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <a
                                href="#"
                                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Get started
                            </a>
                            <a href="#" className="text-sm/6 font-semibold text-white">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-8">
                        <img
                            className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                            src="http://googleusercontent.com/image_generation_content/0"
                            alt="App screenshot"
                            width={1824}
                            height={1080}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const Section_3 = () => {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                alt=""
                className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
            />
            <div
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                ></div>
            </div>
            <div
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true"
            >
                <div
                    className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                ></div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                        Work with us
                    </h2>
                    <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                        lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                        fugiat.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        <a href="#">
                            Open roles <span aria-hidden="true">&rarr;</span>
                        </a>
                        <a href="#">
                            Internship program <span aria-hidden="true">&rarr;</span>
                        </a>
                        <a href="#">
                            Our values <span aria-hidden="true">&rarr;</span>
                        </a>
                        <a href="#">
                            Meet our leadership <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col-reverse gap-1">
                            <dt className="text-base/7 text-gray-300">Offices worldwide</dt>
                            <dd className="text-4xl font-semibold tracking-tight text-white">
                                12
                            </dd>
                        </div>
                        <div className="flex flex-col-reverse gap-1">
                            <dt className="text-base/7 text-gray-300">
                                Full-time colleagues
                            </dt>
                            <dd className="text-4xl font-semibold tracking-tight text-white">
                                300+
                            </dd>
                        </div>
                        <div className="flex flex-col-reverse gap-1">
                            <dt className="text-base/7 text-gray-300">Hours per week</dt>
                            <dd className="text-4xl font-semibold tracking-tight text-white">
                                40
                            </dd>
                        </div>
                        <div className="flex flex-col-reverse gap-1">
                            <dt className="text-base/7 text-gray-300">Paid time off</dt>
                            <dd className="text-4xl font-semibold tracking-tight text-white">
                                Unlimited
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};

const Section_4 = () => {
    return (
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div
                className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20"
            ></div>
            <div
                className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
            ></div>
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <img
                    className="mx-auto h-12"
                    src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg"
                    alt=""
                />
                <figure className="mt-10">
                    <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                        <p>
                            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                            expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in
                            laborum sed rerum et corporis.”
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <img
                            className="mx-auto size-10 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">Judith Black</div>
                            <svg
                                viewBox="0 0 2 2"
                                width="3"
                                height="3"
                                aria-hidden="true"
                                className="fill-gray-900"
                            >
                                <circle cx="1" cy="1" r="1" />
                            </svg>
                            <div className="text-gray-600">CEO of Workcation</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}

const Home = () => {
    return (
        <>
            <Section_1 />
            <Section_2 />
            <Section_3 />
            <Section_4/>
        </>
    )
}

export default Home;