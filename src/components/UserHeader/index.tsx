import React from 'react'

import { userHeader } from './copy'
import styles from './UserHeader.module.css'

interface IUserHeaderProps {
  name: string
}

export const UserHeader: React.FC<IUserHeaderProps> = ({ name }) => {
  return <h1 className={styles.header}>{userHeader(name)}</h1>
}
