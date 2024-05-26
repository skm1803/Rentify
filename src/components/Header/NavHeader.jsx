import { Fragment } from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Team
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Calendar
                  </a>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <button
                  type="button"
                  className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAmgMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcBBQgEAwL/xABGEAABAwMBBQUEBgUJCQAAAAABAAIDBAURBgcSITFBE1FhcYEikaGxFBUyQlJiFiNygtFVY5KissHC0/AXJDM0Q1Nk4eL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AvFERAREQEWMrS6j1TZ9ORB90rGMkIyyBvtSP8m8/Xkg3aw5waCXEADmT0VJX7a9dKuXsrFSRUcTsjfmb2kx8uO6PitPFYNd6rcJqhlxkY8cH1kxijx4NOPg1BeNZqSx0Ofpl4oICOYfUNH961519pMHH6QUHmJcj3qtKDYxeXgGsuFupj+GFr5fmGrYjYrJj2r63PhS//SCxKTV+m6x27TX22yO/C2pZn3ZW3hminbvQyMkb3scCFTVVsWuIaTS3eklPRssLmD3gn5LSTaA1rYcTUcUhLD9q2VRyPT2T8EHQiKg7XtM1TZZ2091YKtjDh8VZE6OUeTuBHqCrN0ttDseonMgEjqKsPAU9SQC4/ldyd8/BBL0WMhZQEREBERAREQFhxwh5KmdqOvX1k0tgskh+j53KmeM5Mx6sb4dCevLlzDYa92pNpXzW7TT2PlblstcRlkZ6hg+8R38vNRjS+z+9asmNzus0tNSzHfdUz+1LN1y0Hp4nh3ZUq2dbNWUrYbrqKEPqODoaN32Yu4v6F3hyHnytMDog0GndG2LTzAbfRMM+ONRL7ch9Ty8hhb/CymUBFq7zqG0WOPfutwgps8mvd7TvJo4lRyTappNj90Vk7h+JtM/HyQTdYwtBZ9aadvEjYaC607pncopCY3nyDsZ9Fv8APHCDwXeyWy9U5gulFDUs6b7eLfEHmD5KqNW7JZ6cPqtNSOqIxxNHK4B4/Yd18jx8Vc6IKK0ZtJuNhn+rdQiepo2O7MueD29ORwx3uAxyPH5K7LfXU1xpIquimZPTyt3mSMOQ4KMa70LQ6pgMzMU9zY3EdQBwcPwvHUePMfBVVpfUV12fX6aguUMn0btMVVKen84z/wBcwg6FReehrKeuo4quklbLTzNDo5G8Q4FehAREQERea41kNvoaisqX7kFPE6WR3c1oyUED2uaudZrcLVb5d2vq2kve08YYuRPgTyHqVpNj+iWOZFqG5QjdH/IxEd3DtCP7Pv7lFrLR1O0PXb5Kvf7GZ5mqOP8Aw4RyYO7o31JXQ0UTIo2xxsaxjAGtaBwAHIIP2EREBVftL2jSWyaSzafe36Y3hUVWA4Rflb+fxIwPPlMNd3x2ntMVtfER9IDRHBnl2jjgH0zn0XNDnOe9z3kuc5xcXE5JJ4kkoP1PNNUTvnqZXzTPOXSPcXOcfElfjKIgfxyrA0FtIrLLURUN7mfU2w4aJH5dJT9xyTkt8Ofd3Kv0QdawysmiZLE9r43gOa5pyCDyIX7VZbEr9JW2qps1Q8ufQkOhJPOJ2eHoQfQhWagKGbR9GR6ntna0rWsulM3MD+W+OrHeB6dx9VM0KCjdkWrJLRc/qG5FzKSpfiLtBjsJ88WnPIOPDH4vNXkqR2z6a+rrlHfqJpbFWO3Z937koHBw7sge8eKsfZ3qH9I9M09TK/NXCewqf22gcfUYPqgk6IiAq523Xd1HpyC3Quw+umw/B/6beJ+O6PUqxSqH201klbrOOijORTU7I2j87ySf8HuQTPYnZRQ6dkucjf11wky0npG3gAPXePr4Kxl4bJQR2u0UNvhGI6WBkTR+y0Be5AREQVft5mcyy2uFpw2SrLneO6w4+fwVLq9ttludWaTjqmNLjQ1LZTjo0gsJ/rBUSgIiICIiCdbF5nRa4bG37M1JKHDy3SP9eKv5UhsNt7ptQVtwLTuU1N2YPQuefnhvxV3oCIiDT6us7L9p2utrsB80R7J2M7sg4tPvAVSbFLrJQ6mqLXMd2KsiOGOP2ZWH+G8PQK81zzqCP9Gdqj5oRuMZcGVOPySEOf8ABzkHQyLA8FlAXPmoB9Y7XuycTum7QRkd4a5mR8F0GufZv1W2T2v5ab8XjHzQdBIiICIiDzXCiguFFUUdZGJKeeMxyMPVpGCuadW6cqtMXiSgqgXRnL6ebHCWPv8AMdR3rp9avUNht2oKB1FdKcSxk5a4Eh0buhaehQctorEv+yO80TpJLNLHcIeJbGSIpQO7id0nxyPJRl2itUtduvsFcHdwYCPeCQg0K+1HSz1tXDS0kL5Z5nBkcbRxcSpdZtl2p7i4fSqZluiz9uoe0nHeGtJ+OFbWjdDWvSzDJC01Fe9u7JVyDBI6ho+6PD3koPvoXTTNMafiostdUvPa1MjeT5D/AHAAAeAUjWAMDgsoCIiAqF25Q9jrGOdhI7Sgjd6h7x8sK+lRu3h4/Sajb3W/J9Xu/ggui1yme2UkxOTJAx2fNoXqWv080ssFtaebaSIf1AtggLnzX7Ta9qEtSfZDaqnqs+A3Sf7JXQapfbva+zuVuuoGGzQmmefFpLm/BzkFztcHAFvEEZBWVHtA3T640ha6t7g6bsBHMR/3G+y74jPqpCgIsHkodrvXtJpaMU8LW1VzkblkGcBg/E89B4cz8UEsqaqnpIXTVU0cETRl0krw1o8yVEbjtQ0rQktZWvrHDpSxl4PqcD4qjb7frpqCpM92rJJznLY84jZ+y3kPmtagu47ZrCCcWy7Ed+5F/mLH+2exfyXdv6EX+YqSRBdv+2exfyXdv6EX+YvdQ7WtMVTw2Z1ZSE9aiEY97S5UIiDqm1Xm23eHtrXXU9WzqYZA4t8xzHqvcCuTqOrqaGpbU0NRLTVDeUsLt1w9Qre0FtQFbLFbdSFkdQ87kNYBhsh6B4+6fHkfBBaiLDckcVlAVAbXpRX7QHwMO8Y4YabHiSXf4wr9ke2NjnvOGtGSe4LnvTgdqzahHUyAPjkrn1eP5phyz5MCDoGmiEFPFCOUbA33DC+qwFlAUV2l2N1+0lVwRM36mnH0iADmXtB4DzBI9VKljCCmth1/bDWVVindhtR/vFPn8QGHN92D6FXMOK5+2h2Sp0dq1lythMUM8hqKSQDIjkBy5nlx5dxx0V0aT1BS6lssNxpTgu9mWLrE8c2n5jvBBQeTXmpo9LWGWsAa+pkPZ00bvvSEcz4DmfJc4VdTPWVU1VVyumqJnl8kjjkuJ6/65Kd7aq+qqdVspJWPZTUsA7EOGA8u4ucO/oP3VX6AiIgIiICIiAsHiFlEF27INXvudK6yXGXfrKVm9BI4+1LEMDB7y3hx6gjxVlrlnTNdU2zUNvrKJr3zxzt3Y2DJkBOC31GQuoKioip6Z89Q9sUUbd973nAaBzJQQ7a3qBtn0rLTxP3aq4ZgjA5hv33e7h6hR7YXZDHBWX2ZmHSn6NBw+4MFxHgXYH7qh17r6zaJrWOKi3xDI7sqVpB/VRDm93d1J9Ar9tFtp7TbKWgpBiGnjEbc8zjqfE80HsREQEREGm1Vp6k1LZprdVjd3vailA4xPHJw/wBcQqP07eLrs81PNS18ThHvBlZTgkte3mHs6ZxyPUcD4dEqK670ZR6roA0lsFfCD9Hqd3O7+Vw6tPd05hB+b9ZLPr+wQyxzNcC3fpauMe1Ge4+He0/Aqh9RWC46duDqO5w7jsns5BxZK3vaf7uYW7s16v8As7vclJVQu7NxzNRyH2JRy32O+RHqO636C56b1/aHQObFUsIzLSzcJInfMftD3oOcUVm6n2R11M6So07MKyHmKWUhsjfAOJw71x6qurjQVtrn7G5Uk1LLy3ZmFufI8j6IPOiIgIizEx00ohhY6WV32Y4xvOd6DigwvrSU09bUx01JC+eeU7rI427xcfBTPTmy+/3ciSuYLZTfjnG89w8GA/PCtW1WPTeg7dLU7zIBj9dWVD8vf4Z/whBqNnmgItOsFzuwjkubm8MYLacdQO93PJ9B4xHalrr64kfZLPIXULXYnliyfpD8/Zbjm3PvPhz+GutodXqOT6qsjZYKCR3ZnA/W1RPADGMgeA4nr3KVbNdnYtLorvfWNdcMZgpzxFNw5noX/AdO9Bsdl2jDp23GtuETRdapuHtznsWZ4MHieZ8eHHCniwBhZQEREBERAREQajUenbbqOhNLdKcSAZLJG8HxnvaenyVM6i2e6g0tVfWFnfPVQRuLmT0mRNEPzNHH3ZB6gK/VgjKCk9O7X7hR4gv9KK1jeHbQgMlHmCcE+5T2h11pC/QiGeupWb/AwV7QzPh7XA+hXuv+idP34ukr7fGKgjH0iH9XJ6kc/XKgd02MHLnWq8EjpHVx59N5uPkgmM+hdHXQdo220h3hwfTPLM/0SvE7ZNpIuz9Fqh4Crk/iq5dsv1jQk/RY6dwzzpazdJ8eIavwdH7QG+x2Vzx+W4cP7aC0qfZvpCj9p1ta/HHM873D4lfeW+aN0uwxMqrZSOHOKm3S8/ut4qqBs61xWjFREQP/ACq0EfNy29q2MXB26bnc6Wmb1ZTML/cTu/JBsNQbY4g2SKwUDnO5CprBhnmGg5I8yFEKO16t2h14qJjNLEDwqajLKeMfkA4H90eatWxbMtNWncfJTOuE7ePaVpDxnv3cBvwUyaxrAGtAAHIAYCCJ6M0FbNLNEzB9KuBGHVUjfs94YPuj4+KlyIgIiICIiAiIgIiICIiAiIgYREQEwiICIiAiIgIiICIiD//Z" alt="" />
                    </MenuButton>
                  </div>
                  <Transition
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Byer Login
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Seller Login
                          </a>
                        )}
                      </MenuItem>
                      {/* <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </MenuItem> */}
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <DisclosureButton
                as="a"
                href="#"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Dashboard
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Team
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Projects
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Calendar
              </DisclosureButton>
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">Tom Cook</div>
                  <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <DisclosureButton
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Your Profile
                </DisclosureButton>
                <DisclosureButton
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Settings
                </DisclosureButton>
                <DisclosureButton
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Sign out
                </DisclosureButton>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
