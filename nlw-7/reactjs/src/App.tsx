import styles from './App.module.scss';

import { MessageList } from './components/MessageList';
import { LoginBox } from './components/LoginBox';

export function App() {
  return (
    <main className={styles.contentWrapper}>
      <MessageList />
      <LoginBox />
    </main>
  )
}