import {FC} from 'react'
import Image from 'next/image'
import { IAvatar } from '@/interfaces/props/IAvatar'
import classNames from 'classnames'

const Avatar:FC<IAvatar> = ({image, alt ,className, width, height}) => {
return (
        <Image
            src={image}
            alt={alt}
            className={classNames('object-cover rounded-full',className)}
            width={width}
            height={height}
        />
    )
}

export default Avatar