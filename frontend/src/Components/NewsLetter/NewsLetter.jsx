import React from 'react'

import styles from './NewsLetter.module.scss'

export const NewsLetter = () => {
  return (
    <div className={styles.newsLetter}>
        <h1>Получиать Эксклюзивные Предложения на Email</h1>
        <p>Подписаться на рассылку</p>
        <div>
            <input type='email' placeholder='Ваш email'/>
            <button>Подписаться</button>
        </div>
    </div>
  )
}

export default NewsLetter;
