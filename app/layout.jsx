import { Inter } from 'next/font/google'
import Script from 'next/script'
// import './globals.css'
import MasterPage from '../components/MasterPage'
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <link href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css" rel="stylesheet" as="style"/> */}
        <Script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js"></Script>
        <link rel="stylesheet" href="css/styles.css" />
        <script src="js/scripts.js"></script>        
      </head>
      <body className={inter.className}>
        <MasterPage>
          {children}
        </MasterPage>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
      </body>
    </html>
  )
}