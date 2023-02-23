import React from 'react'
import { notifications } from '@/utils/constants'
import { INotificationsItem } from '@/interfaces/other/INotificationsItem'
import NotificationItem from './NotificationItem'

const LatestNotification = () => {
  return (
    <div className='flex flex-col space-y-4'>
      {notifications.map((e:INotificationsItem)=>
      <NotificationItem
          username={e.username}
          image={e.image}
          status={e.status}
          postId={e.postId}
          type={e.type}
          />
      )}
    </div>
  )
}

export default LatestNotification