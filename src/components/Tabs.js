import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Shop from '../pages/Shop'
import Card from './Card'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs(props) {
  let [categories, setCategories] = useState({
    "For You": [
      {
        
      },
    ],
    "Shop": [
      {

      },
    ],
  })

  return (
    <div className="w-full max-w-md px-2 py-2 sm:px-0">
      <Tab.Group className = "">
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-black/[0.12] hover:text-black'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
            <Tab.Panel
              key={1}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              {/* <Card /> */}
              <h1>main</h1>
            </Tab.Panel>
            <Tab.Panel
              key={2}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              {/* <Shop /> */}
              <h1>Test</h1>
            </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
