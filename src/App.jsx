import  {Footer, Navbar,Body, RelatedProducts, SignUpQuote} from './Components/index'


function App() {

  return (
    <main className='relative '>
      <section className=''>
        <Navbar/>
      </section>
      <section className='padding-x '>
        <Body/>
      </section>
      <section className='padding-x '>
        <RelatedProducts/>
      </section>
      <section className='padding-x '>
         <SignUpQuote/>
      </section>
      <section className=''>
         <Footer/>
      </section>
    </main>
    )
}

export default App
