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
    <div className='flex  items-center justify-center lg:space-x-50 mt-11 lg:w-[60.5rem] w-[90%] mx-auto gap-10'>
      {statsData.map((stat) => (
        <div key={stat.id} className="flex flex-col items-center justify-center lg:gap-5 gap-3">
          <h3 className='text-futura font-extrabold  lg:text-6xl text-2xl text-blue-900 leading-[92%] tracking-[-10%]'>{stat.value}</h3>
          <p className='lg:text-sm text-[10px] uppercase text-textB tracking-wide text-center'>{stat.label}</p>
        </div>
      ))}
    </div>
  )
}

export default PackageRc