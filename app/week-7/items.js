

import Image from 'next/image';

export default function Item({name,quantity,category,imageUrl}){
  return(
  <li className="flex flex-col items-center bg-card p-6 border border-default rounded-xl shadow-xs md:flex-row md:max-w-xl">
      {imageUrl && <Image src={imageUrl} alt={name} width={80} height={80} className='object-cover w-full rounded-xl h-64 md:h-auto md:w-48 mb-4 md:mb-0'/>}
      <div className="flex flex-col justify-between md:p-4 leading-normal text-white">
      <p className="mb-2 text-2xl font-bold tracking-tight text-heading">Name: {name}</p>
      <p className="text-body">Quantity: {quantity}</p>
      <p className="mb-6">Category: {category}</p>
      </div>
  </li>
  );
  
}