import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './Post.module.css';
import { useState } from 'react';

export function Post({author, content, publishedAt}) {

  const [comments, setComments] = useState(['Top meu rei!'])

  const [newComment, setNewComment] = useState('')

  function handleCreateNewComment(e){
    event.preventDefault()
    
    setComments([...comments, newComment ])
    setNewComment('')
  }

  function handleNewCommentChange(){
    setNewComment(event.target.value)
  }

  function deleteComment(commentToDelete){
    const commentWithoutDeletedOne = comments.filter(comment=>{
      return comment != commentToDelete
    })

    setComments(commentWithoutDeletedOne)
  }

  // const publishedAtFormated = new Intl.DateTimeFormat('pt-BR',{
  //   day: '2-digit',
  //   month: 'long',
  //   hour:'2-digit',
  //   minute:'2-digit'
  // }).format(publishedAt)

  const publishedAtFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'" ,{
    locale: ptBR
  })
  const publishedAtRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtFormated} dateTime={publishedAt.toISOString()}>
          {publishedAtRelativeToNow}
        </time>

      </header>

      <div className={styles.content}>
        {content.map(line=>{
          if (line.type === 'paragraph'){ 
            return <p>{line.content}</p> 
          }else if(line.type === 'link'){
           return <p><a>{line.content}</a></p>
          }
            
        })}
        
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name='comment'
          placeholder="Deixe um comentário"
          value={newComment}
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment=>{
          return(<Comment key={comment} content={comment} onDeleteComment={deleteComment}/>)
        })}
      </div>
    </article>
  )
}
