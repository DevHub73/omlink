'use client'
import Logo from '@/app/assets/images/logo.png'
import Image from "next/image"
import downImage from '@/app/assets/images/downImage.png'
import Link from "next/link"
import { usePathname } from "next/navigation"
import User1 from '@/app/assets/images/user1.png'
import User2 from '@/app/assets/images/user2.png'
import User3 from '@/app/assets/images/user3.png'
import User4 from '@/app/assets/images/user4.png'
import User5 from '@/app/assets/images/user5.png'
import User6 from '@/app/assets/images/user6.png'
import { useState } from 'react'

function SiderBar() {
    const [isRote1, setIsRoute1] = useState(true)
    const [isRoute2, setIsRoute2] = useState(true)
    const pathname = usePathname()
    const activeLink = 'w-full bg-[#9483bc] rounded-[12px] text-[#fff] py-[2px] text-[16px]'
    return <>
        <div className="w-[200px] h-full bg-[#f0eef6] rounded-2xl p-[20px]">
            <div className="flex flex-col items-center border-b-[2px] border-[#d9d7de] pb-[20px]">
                <a href="">
                    <Image src={Logo} alt="图像" className="w-[41px] h-[41px]"></Image>
                </a>
                <span>OM LINK</span>
            </div>
            <div className="py-[20px]  border-b-[2px] border-[#d9d7de]  " >
                <ul className="flex flex-col text-center text-[#1F1C23]">
                    <Link href={'home'} className={pathname.slice(pathname.indexOf('/', 5) + 1) == 'home' ? activeLink : 'my-[5px]  text-[16px]'}>Home</Link>
                    <Link href={'popular'} className={pathname.slice(pathname.indexOf('/', 5) + 1) == 'popular' ? activeLink : 'my-[5px]  text-[16px]'}>Popular</Link>
                </ul>
            </div>
            <div className="px-[6px] text-[14px] py-[20px] border-b-[2px] border-[#d9d7de] ">
                <div className="flex items-center justify-between">
                    <h3 className="text-[#9483bc] text-[16px]">Subscriptions</h3>
                    <span className="w-[16px] h-[16px] cursor-pointer" onClick={() => { setIsRoute1(!isRote1) }}>
                        {
                            isRote1 ? <Image src={downImage} alt="图像" style={{ width: '100%', height: '100%' }} />
                                : <Image src={downImage} alt="图像" className='transform rotate-180' style={{ width: '100%', height: '100%' }} />
                        }
                    </span>
                </div>
                {
                    isRote1 ? <ul className="mt-[10px]" >
                        <li className="mb-[10px] text-[#1f1c23] flex items-center">
                            <Image src={User1} alt="图像" className="w-[30px] h-[30px] rounded-full  mr-[10px] my-[5px]"></Image>
                            <span># Food</span>
                        </li>
                        <li className="mb-[10px] text-[#1f1c23] flex items-center">
                            <Image src={User2} alt="图像" className="w-[30px] h-[30px] rounded-full  mr-[10px] my-[5px]"></Image>
                            <span># Games</span>
                        </li>
                        <li className=" text-[#1f1c23] flex items-center">
                            <Image src={User3} alt="图像" className="w-[30px] h-[30px] rounded-full  mr-[10px] my-[5px]"></Image>
                            <span># Hiking</span>
                        </li>
                    </ul> : null
                }
            </div>
            <div className="px-[6px] py-[20px]">
                <div className="flex items-center justify-between">
                    <h3 className="text-[#9483bc] text-[16px]">My Groups</h3>
                    <span className="w-[16px] h-[16px] cursor-pointer" onClick={() => setIsRoute2(!isRoute2)}>
                        {
                            isRoute2 ? <Image src={downImage} alt="图像" style={{ width: '100 %', height: '100%' }} /> : <Image src={downImage} alt="图像" className='transform rotate-180' style={{ width: '100 %', height: '100%' }} />
                        }
                    </span>
                </div>
                {
                    isRoute2 ? <ul className="mt-[10px] text-[14px] text-[#1f1c23]">
                        <li className="mb-[10px] text-[#1f1c23] flex items-center">
                            <Image src={User4} alt="图像" className="w-[30px] h-[30px] rounded-full  mr-[10px] my-[5px]"></Image>
                            <span>USU</span>
                        </li>
                        <li className="mb-[10px] text-[#1f1c23] flex items-center">
                            <Image src={User5} alt="图像" className="w-[30px] h-[30px] rounded-full  mr-[10px] my-[5px]"></Image>
                            <span>SMASH</span>
                        </li>
                        <li className="mb-[10px] text-[#1f1c23] flex items-center">
                            <Image src={User6} alt="图像" className="w-[30px] h-[30px] rounded-full  mr-[10px] my-[5px]"></Image>
                            <span>Team Cola</span>
                        </li>
                    </ul> : null
                }
            </div>
        </div>
    </>
}

export default SiderBar