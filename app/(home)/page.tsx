import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen mt-10">

      <section className='flex flex-col items-center justify-center my-10'>
        <h1 className="text-5xl md:text-8xl font-extrabold text-center mb-6">
          Make <span className="bg-custom-gradient bg-clip-text text-transparent font-bold">Tokenization</span> real
        </h1>
        <p className="text-lg md:text-xl text-white text-center mb-10 max-w-2xl">
          We make the impossible possible in real estate and crypto. Integrate with Binkio and take your real estate tokenization to the next level: simplicity, transparency, and the power of tokenization all in one place.
        </p>
        <Link
          href="/docs"
          className="relative text-white font-semibold w-[250px] text-center p-4 rounded border-4 border-transparent bg-black"
          style={{
            borderImage: 'linear-gradient(90.2deg, #9A70F1 -0.58%, rgba(80, 60, 147, 0.8) 18.89%, #6A3EF4 37.29%, #D42BBD 74.62%, #F93781 94.63%)',
            borderImageSlice: 1,
            backgroundClip: 'padding-box',
          }}
        >
          Get Started
        </Link>
      </section>

      <section className='flex flex-row justify-between items-center mt-10 w-full relative flex-wrap md:flex-nowrap'>
        <div className='w-[80%] relative hidden md:block'>
          <Image
            src="https://binkio.s3.us-west-2.amazonaws.com/imagev2.svg"
            alt="binkio documentation"
            width={0}
            height={0}
            className='w-full h-auto object-contain'
            style={{
              transform: 'translateX(-12%)', // Mueve la imagen hacia la izquierda
              position: 'relative',
            }}
          />
        </div>
        <div className='flex flex-col items-center justify-center text-center'>
          <h2 className='text-5xl mb-4'>Modular and <span className='text-[#2053B6]'>Interoperable</span> integration</h2>
          <p className='mt-4 max-w-[80%]'>Accelerate your market entry with optimized smart contract integrations on our Tokenization-as-a-Service platform</p>
          <Link href="/docs" className='underline mt-5'>See Documentation</Link>
        </div>
      </section>

      <footer className="border-t border-gray-300 w-full md:px-10 p-5 mt-10 flex flex-col lg:flex-row items-center justify-between">
        <div className="mb-8 lg:mb-0">
          <Image
            src="https://binkio.s3.us-west-2.amazonaws.com/Images/Logos/LogoBinkioWhite.svg"
            alt="Binkio documentation"
            width={250}
            height={250}
            className='mb-4'
          />
          <p>Copyright © 2024 Binkio Labs</p>
        </div>

        <div className='w-full lg:w-auto border border-white flex flex-col lg:flex-row justify-between items-center rounded p-5'>
          <div className='max-w-full lg:max-w-[50%] mb-4 lg:mb-0'>
            <h4>Suscribete a nuestro Newsletter</h4>
            <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet con.</p>
          </div>

          <div className='flex flex-col lg:flex-row justify-center items-center lg:items-end'>
            <div className='flex flex-col items-start justify-start mb-4 lg:mb-0'>
              <label className='text-sm'>Correo electronico</label>
              <input className='rounded border-2 border-white bg-transparent text-white p-2' />
            </div>
            <button className='bg-[rgba(255,255,255,0.999)] text-black p-3 rounded ml-2 lg:ml-4'><span className='bg-custom-gradient bg-clip-text text-transparent font-bold'>Suscribete</span></button>
          </div>
        </div>
      </footer>


    </main>
  );
}
