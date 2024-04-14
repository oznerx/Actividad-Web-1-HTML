import './App.css'

function App() {

  return (
    <div>

      <header className='w-full flex justify-between items-center flex-row'>
        <a href='/' className='py-10'><span className='text-blue-500 font-mono text-2xl'>Home</span></a>
        <a href='#experience' className='py-10'><span className='text-blue-500 font-mono text-2xl'>Experience</span></a>
        <a href='#contact' className='py-10'><span className='text-blue-500 font-mono text-2xl'>Contact</span></a>
      </header>

      <section className='px-10 w-full flex flex-col justify-center items-center bg'>
          <h1 className='py-[220px] text-gray-500 font-mono text-4xl'> Hi, I'm ozner, software developer & data scientist. <br/>Trader & very interested in the finance sector.</h1>
      </section>

      <div className='flex flex-col mt-20' id='experience'>
        <h1 className='px-10 py-10 text-blue-500 font-mono text-3xl'>Experience</h1>
        <ul className='px-10 pb-20 text-gray-500 font-mono text-2xl'>
          <li>Software Developer</li>
          <li>Data Scientist</li>
          <li>Portfolio Manager</li>
          <li>Data Analyst</li>
        </ul>
      </div>

      <footer className='px-20 w-full flex justify-between items-center bg-gray-100 rounded-md flex-row mt-52 mb-5' id='contact'>
        <a href='https://www.linkedin.com/in/ozner/' className='py-10'><span className='text-blue-500 font-mono text-3xl'>LinkedIn</span></a>
        <a href='https://www.kaggle.com/justozner' className='py-10'><span className='text-blue-500 font-mono text-3xl'>Kaggle</span></a>
        <a href='https://github.com/oznerx' className='py-10'><span className='text-blue-500 font-mono text-3xl'>Github</span></a>
      </footer>

    </div>
  )
}

export default App
