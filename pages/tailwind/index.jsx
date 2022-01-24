

function Index() {
  return (
    <>
      <div className='flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-800'>
        <div className='max-w-sm p-8 mx-auto space-y-2 bg-white shadow-lg sm:p-6 rounded-xl sm:flex sm:space-y-0 sm:space-x-4 '>
          <img className='mx-auto duration-300 transform rounded-full h-28 sm:h-24 ring-4 ring-yellow-200 sm:flex-shrink-0 hover:scale-105' src="/img/pizza.png" alt="image" />
          <div className='space-y-2 text-center '>
            <div className='space-y-1 sm:space-y-0'>
              <p className='text-lg font-semibold text-black'>Halal Heaven's</p>
              <p className='font-medium text-gray-500'>Youtube channel</p>
            </div>
            <button className='px-4 py-1 text-sm font-semibold text-purple-600 border border-purple-200 rounded-full hover:border-transparent hover:text-white hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>Visit now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;