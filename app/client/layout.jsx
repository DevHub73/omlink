import Header from './components/clientLayout/header'
import Footer from './components/clientLayout/footer'
import AutoWidth from './components/autoWidth'

export default function ClientLayout({ children }) {
    return <div className="">
        <header className='border-b-[1px] border-[#f4f4f5]'>
            <Header />
        </header>
        <section className=''>
            <AutoWidth>
                <div className=''>
                    {children}
                </div>
            </AutoWidth>

        </section>
        <footer className='bg-[#212121]'>
            <Footer />
        </footer>
    </div>
}