
import styles from '@/app/page.module.css'

import { fetchHorse } from '@/fetcher/horse'

type RacePageProps = {
  params: {
    id: string
  }
}

export default async function Race({params}: RacePageProps) {
  
  const horse = await fetchHorse(params.id)

  return (
    <main className={styles.main}>
      <div>{horse.winOdds}</div>
    </main>
  )
}
