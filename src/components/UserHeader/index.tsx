import React from 'react'

import { userHeader } from './copy'

interface IUserHeaderProps {
  name: string
}

export const UserHeader: React.FC<IUserHeaderProps> = ({ name }) => {
  return <h1>{userHeader(name)}</h1>
}
