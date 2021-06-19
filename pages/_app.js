import NProgress from 'nprogress';
import Router from 'next/router';

import "../styles/nprogress.css";
import '../styles/globals.css'
import '../styles/swiper.css'
import '../styles/react-tabs.css'

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
})

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
