

import Image from 'next/image';

export default function Item({name,quantity,category,imageUrl}){
  return(
  <li className="flex flex-col items-center bg-white p-6 border border-default rounded-xl shadow-xs md:flex-row md:max-w-xl md:flex-row md:max-w-xl  ">
      <Image src={imageUrl} alt={name} width={80} height={80} className='object-cover w-full rounded-xl h-64 md:h-auto md:w-48 mb-4 md:mb-0'/>
      <div className="flex flex-col justify-between md:p-4 leading-normal">
      <p className="mb-2 text-2xl font-bold tracking-tight text-heading text-black">Name: {name}</p>
      <p className="text-black text-body">Quantity: {quantity}</p>
      <p className="text-black mb-6">Category: {category}</p>
      </div>
  </li>
  );
  
}