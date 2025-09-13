import React from 'react'

const PackageRc = () => {
  const statsData = [
    {
      id: 'price',
      value: '€195',
      label: 'total price'
    },
    {
      id: 'sites',
      value: '200',
      label: 'news sites'
    },
    {
      id: 'readers',
      value: '2.2M',
      label: 'monthly readers'
    },
    {
      id: 'authority',
      value: '69',
      label: 'MAX AUTHORITY'
    }
  ];

  return (
    <div className='flex  lg:items-center justify-center flex-wrap  lg:flex-nowrap lg:space-x-10 xl:space-x-30 2xl:space-x-50 lg:mt-11 lg:w-[80%] mt-5 2xl:w-[60.5rem]  mx-auto   px-5  '>
      {statsData.map((stat) => (
        <div key={stat.id} className="flex flex-col items-center justify-center lg:gap-5 flex-1/2  lg:w-[20rem] xl:flex-2/5  gap-3 my-2 py-3">
          <h3 className='text-futura font-extrabold md:text-5xl  lg:text-6xl text-xl text-blue-900 leading-[92%] tracking-[-10%]'>{stat.value}</h3>
          <p className='lg:text-sm md:text-lg text-sm uppercase text-textB tracking-wide text-center'>{stat.label}</p>
        </div>
      ))}
    </div>
  )
}

export default PackageRc