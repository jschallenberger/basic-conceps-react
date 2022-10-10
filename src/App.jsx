import { Header } from './components/Header';
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id:1,
    author:{
      avatarUrl:'https://github.com/jschallenberger.png',
      name:'Johann Schallenberger',
      role: 'Software Engineer @ JD'
    },
    content:[
      { type: 'paragraph', content:'Fala galeraa 👋' },
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content:'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-10-06 20:00:00')
  },
  {
    id:2,
    author:{
      avatarUrl:'https://github.com/nickchecan.png',
      name:'Nicholas Atrasadinho',
      role: 'Staff Software Engineer @ JD'
    },
    content:[
      { type: 'paragraph', content:'Fala galeraa 👋' },
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content:'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-10-07 20:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {/* forEach is not usable cause it returns nothing - so nothing will be display therefore we use map*/}
          {posts.map(post=>{
            return (
               <Post key={post.id}
                author = {post.author}
                content = {post.content}
                publishedAt={post.publishedAt}
               />
            )
          })
          }
        </main>
      </div>
    </div>
  )
}
