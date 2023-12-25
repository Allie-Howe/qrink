import Link, {LinkProps} from 'next/link'
import { HTMLProps, PropsWithChildren } from 'react'

/**
 * v0 by Vercel.
 * Iterated and adapted by Allie.
 * @see https://v0.dev/t/DbY9DS6A6S1
 */

const NavLink = ({children, ...props}: PropsWithChildren<LinkProps>) => {
  return (<Link
    className={`my-1 text-sm text-gray-700 hover:text-blue-500 md:mx-4 md:my-0`}
    {...props}
  >
    {children}
  </Link>)
}

export const Nav = () => {
  return (<>
    <nav className="bg-white shadow-xl fixed left-0 right-0 z-20">
      <div className='flex flex-col'>
        <div className='flex gap-10 bg-yellow-200 py-1 px-3'>
          <p><b>this site is not real.</b></p>
          <p>looks nice though, don&apos;t you think?</p>
        </div>
        <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div>
              <a
                className="text-2xl font-bold text-gray-800  lg:text-3xl hover:text-gray-700"
                href="#"
              >
                Qrink
              </a>
            </div>
            <div className="flex md:hidden">
              <button
                aria-label="toggle menu"
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                type="button"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="items-center md:flex">
            <div className="flex flex-col md:flex-row md:mx-6">
              <NavLink href='/'>Home</NavLink>
              <NavLink href='/about'>About</NavLink>
              <NavLink href='/services'>Services</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div className='p-11' />
  </>)
}
