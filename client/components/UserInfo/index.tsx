import { IUserInfo } from '@/interfaces/props/IUserInfo'
import { FC } from 'react'
import Avatar from '../Avatar'

const UserInfo:FC<IUserInfo> = ({image, username, imgClassName}) => {
return (
    <div className='flex items-center gap-x-3'>
        <Avatar image={image} alt={`${username} image`} width={100} height={100} className={imgClassName}  />
        <p className='text-l font-semibold text-dark-800'>{username}</p>
    </div>
)
}

export default UserInfo