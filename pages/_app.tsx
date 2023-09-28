import '@/styles/globals.css'
import themeStyles from '@/styles/default-theme.module.scss'
import type { AppProps } from 'next/app'
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";
import {useSearchParams} from "next/navigation";

export default function App({ Component, pageProps }: AppProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  let content = <Component {...pageProps} />;

  if (!pageProps.skipArticleTag)
    content = <article className={themeStyles.article}>
      {content}
    </article>

  if (!!searchParams.get('contentOnly'))
    return <div className={themeStyles.container}>
      {content}
    </div>

  return (
      <div className={themeStyles.container}>
        <header className={themeStyles.header}>
          <Link href="/">
            <Image priority src="/logo-header.png" alt="Header Logo" className={themeStyles.logo} width={669}
                   height={300}/>
          </Link>
        </header>

          <nav className={themeStyles.linkContainer}>
              <Link href="/">home</Link>
              <Link href="/about">about</Link>
              <Link href="/contact">contact</Link>
              <Link href="https://chat.paradigmthreat.net">chat</Link>
          </nav>

        {content}

        <footer className={themeStyles.footer}>
          <div>created by <a href="https://clevertree.net/">Ari Asulin</a></div>
          {/*<hitCounter></hitCounter>*/}
          <div>
            [<a href="https://git.paradigmthreat.net/">git repository</a>]
          </div>
        </footer>
      </div>
  )
}
