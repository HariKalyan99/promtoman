import '@/styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';


export const metaData = {
    title: "Promptoman",
    description: "Discover and share AI promts"
}


const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                <Nav />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;