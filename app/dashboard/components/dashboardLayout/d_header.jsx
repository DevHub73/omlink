'use client'
import IconBlock from "../IconBlock"
import icons from "@/utils/icons"
import Image from "next/image"
import AvatarImage from '@/app/assets/images/avatar.png'
import React, { useEffect } from "react"
import { usePathname } from "next/navigation"
import tipImage from '@/app/assets/images/tipImage.png'
function Dashboard_Header() {
    const pathname = usePathname()
    const currentPath = pathname.slice(pathname.indexOf('/', 5) + 1)
    return <>
        <div className={'head-wrap'}>
            <div className="">
                <div className="flex flex-col">
                    {
                        currentPath == 'home' && <span className="text-[12px]" style={{ color: 'rgba(31, 28, 35, 0.35)' }} >Dashboard</span>
                    }
                    <h3 className="text-[#1f1c23] text-[24px]">{currentPath == 'home' ? 'Henry Yau' : currentPath.charAt(0).toUpperCase() + currentPath.slice(1)}</h3>
                </div>
            </div>
            <div className="flex">
                <div className="mr-[10px]">
                    <IconBlock width={40} height={40} bgColor='light-white-bg' >
                        {icons['searchIconSvg']}
                    </IconBlock>
                </div>
                <div className="mr-[10px]">
                    <IconBlock width={40} height={40} bgColor='light-white-bg' >
                        {icons['addIconSvg']}
                    </IconBlock>
                </div>
                <div className="mr-[10px]">
                    <IconBlock width={40} height={40} bgColor='light-white-bg' >
                        {icons['chatIconSvg']}
                    </IconBlock>
                </div>
                <div className="mr-[10px]">
                    <div className={`flex justify-center items-center rounded-full cursor-pointer w-[40px] h-[40px] bg-light-white-bg relative`}>
                        {icons['tipIconSvg']}
                        <Image src={tipImage} alt="图像" className="absolute w-[10px] h-[10px] right-0 bottom-0"></Image>
                    </div>
                </div>
                <div>
                    <IconBlock width={40} height={40} bgColor='light-white-bg' >
                        <Image src={AvatarImage} alt="图像" />
                    </IconBlock>
                </div>
            </div>
        </div>
    </>
}

export default Dashboard_Header