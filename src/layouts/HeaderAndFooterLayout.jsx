import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

function HeaderAndFooterLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default HeaderAndFooterLayout;
