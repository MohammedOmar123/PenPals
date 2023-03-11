"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import logo from '@/public/images/logo.png'
import Button from '../Button'
import UserInfo from '../UserInfo'
import userImg from '@/public/images/userImg.png'

const linkClassName = "mr-8 main-text-color-light hover:text-gray-900"

const Navbar = () => {
  const isAuth = false;
  const router =  useRouter()

  return (
    <nav className="text-gray-600 body-font px-[27px] shadow-light">
      <div className="container  flex justify-around flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href='#' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src={logo} alt='logo' />
          <span className="ml-3 font-bold text-2xl main-text-color-light">بالعربية نرتقي </span>
        </Link>

        <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href='#' className={linkClassName}>الصفحة الرئيسية</Link>
          <Link href='#' className={linkClassName}>الآراء</Link>
          <Link href='#' className={linkClassName}>من نحن؟</Link>
        </div>

        {isAuth ? 
          <UserInfo username="مرحباً مصطفى" image={userImg} dir="ltr" imgClassName='w-12 h-12' />
        :
          <div>
            <Button 
            onClick={() => router.push('/sign-in')}
            className='bg-text-dark text-light'>تسجيل الدخول</Button> 

            <Button 
            onClick={() => router.push('/sign-up')} 
            className='bg-primary text-white'>إنشاء حساب</Button>
          </div>
        }

      </div>
    </nav>
  )
}

export default Navbar