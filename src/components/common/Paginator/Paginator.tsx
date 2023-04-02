import React from 'react'
import styles from './Paginator.module.css'

type PaginatorPropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (p: number) => void
}

export const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }: PaginatorPropsType) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            className={currentPage === p ? styles.selectedPage : ''}
            onClick={(e) => {
              onPageChanged(p)
            }}
          >
            {p}
          </span>
        )
      })}
    </div>
  )
}
