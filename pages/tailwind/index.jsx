

function Index() {
  return (
    <>
      <div className='h-screen flex items-center justify-center bg-gray-100'>
        <div className='max-w-sm mx-auto p-8 sm:p-4 bg-white rounded-xl shadow-lg space-y-2 sm:flex sm:space-y-0 sm:space-x-4'>
          <img className='h-28 sm:h-24 mx-auto rounded-full ring-4 ring-yellow-200 sm:flex-shrink-0' src="/img/pizza.png" alt="image"/>
          <div className='text-center space-y-2 '>
            <div className='space-y-1 sm:space-y-0'>
              <p className='text-lg text-black font-semibold'>Halal Heaven's</p>
              <p className='text-gray-500 font-medium'>Youtube channel</p>
            </div>
            <button className='py-1 px-4 border border-purple-200 rounded-full text-sm font-semibold text-purple-600'>Visit now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;