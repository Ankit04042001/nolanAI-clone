import RootLayout from "@/components/RootLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lexend_Deca } from 'next/font/google';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { persistor, store } from "../../store/store";
import { PersistGate } from "redux-persist/integration/react";

const lexendDeca = Lexend_Deca({
  weight: ['300', '700'],
  subsets: ['latin'],

})

export function Loading() {
  const router = useRouter()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);

    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    }
  })

  return (
    loading && <div className="absolute top-0 left-0 w-full h-[100%] bg-black z-[6000] opacity-80">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[50px] h-[50px]  rounded-full border border-[2px] border-white border-t-0 animate-spin"></div>
      </div>
    </div>
  )
}


export default function App({ Component, 
  pageProps:{ session, ...pageProps} }: AppProps) {
  return (
    <div className={lexendDeca.className}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <SessionProvider session={session}>
            <RootLayout>
              <Loading />
              <Component {...pageProps} />
            </RootLayout>
          </SessionProvider>
        </PersistGate>
      </Provider>
    </div >
  )
}
