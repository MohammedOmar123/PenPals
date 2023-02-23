import {FC } from 'react'
import { INotificationsItem } from '@/interfaces/other/INotificationsItem'
import classNames from "classnames";
import Avatar from '../Avatar';

const created = 'بإنشاء'
const updated = 'بتعديل'
const studentDid  = 'قامت الطالبة'
const unread  = 'غير مقروءة'
const read  = 'مقروءة'
const newPost  = 'منشور جديد'
const updatePost  = 'منشور سابق'

const NotificationItem:FC<INotificationsItem> = ({image, username, status, type, postId}) => {

return (
    <div className='flex justify-around items-center rounded-md p-2 shadow-inner'>
        <div className='flex gap-4 items-center basis-3/4'>
        <Avatar image={image} alt={`${username} image`} width={50} height={50} className='w-12 h-12'  />
            <p>
                {studentDid}
                {" "}
                {username}
                {" "}
                {type==='create'? created : updated}
                {" "}
                {type==='create'? newPost : updatePost}
            </p>
        </div>
    
        <span className={classNames('w-28 text-center px-4 py-2 font-semibold text-light leading-tight rounded-md',(status==='read' ? 'bg-light-primary' : 'bg-primary'))}>
            { status==='read'? read:unread}
        </span>
    </div>
    )
}

export default NotificationItem