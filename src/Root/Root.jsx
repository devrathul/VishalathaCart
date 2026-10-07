import { Outlet } from "react-router";
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

export default function Root() {
    return (
        <>
            <Header />
            <main className='max-w-[1650px] mx-auto px-8'>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}