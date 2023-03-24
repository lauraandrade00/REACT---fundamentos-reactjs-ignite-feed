import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post  
            author="Laura Andrade" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quo illo dignissimos culpa perferendis exercitationem facilis ipsam assumenda incidunt sunt ducimus officiis excepturi laborum ut. Ut voluptates qui et accusamus?"
          />

          <Post 
            author="Paulo Ricardo"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}
