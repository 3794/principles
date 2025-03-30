import { Analytics } from "@vercel/analytics/react"

console.log('_app')
const App = ({ Component, pageProps }) => {
    return (
        <>
        <Analytics />
        <Component {...pageProps} />
        </>
    )
}

export default App