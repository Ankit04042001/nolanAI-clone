import Footer from './Footer';
import Header from './header'

interface Props {
    children : JSX.Element|JSX.Element[];
}

const RootLayout = ({children}: Props) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default RootLayout