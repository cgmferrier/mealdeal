import RecipeList from 'src/components/recipe-list/recipe-list.component';
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <RecipeList />
    </main>
  )
}
