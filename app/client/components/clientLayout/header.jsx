'use client'
import AutoWidth from '../autoWidth'
import icons from '@/utils/icons'
import { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import authorImg from '@/public/author.png'
import Image from 'next/image';
export default function ClientHeader() {
    const menus = [{ id: 1, path: '', name: 'DIY Doodle' }, { id: 2, path: '', name: 'Content Market' }, { id: 3, path: '', name: 'Brand Team' }, { id: 4, path: '', name: 'Chat page' }, { id: 5, path: '', name: 'My profile' }]
    const [curId, setCurId] = useState(5)
    const default_Tab_class = "mr-[24px] text-[#6f717c] text-[16px] my-[16px] border-b-2 border-[#fff] relative cursor-pointer"
    const active_Tab_class = 'mr-[24px] text-[#14151a] py-[16px]  relative  border-b-2 border-[#924fe8] cursor-pointer'
    return (
        <AutoWidth>
            <div className="flex flex-col pt-[16px] ">
                <div className='header-top mb-[10px] flex justify-between items-center'>
                    <a className='logo'>
                        {icons['logo']}
                    </a>
                    <div className='border border-solid border-[#dee0e3] rounded-lg flex items-center p-[2px]'>
                        <IoSearchOutline className='text-[20px] text-[#9ea0a8]' />
                        <input placeholder='Search' className="pl-[5px]" />
                    </div>
                    <div className='w-[32px] h-[32px] rounded-full overflow-hidden '>
                        <Image src={authorImg} alt="图像"></Image>
                    </div>
                </div>
                <div className='header-menu '>
                    <ul className='flex items-center'>
                        {
                            menus.map((menu, i) => (<li key={i} className={curId == (i + 1) ? active_Tab_class : default_Tab_class} onClick={() => { setCurId(i + 1) }}>
                                <span className=''>{menu.name}</span>
                            </li>))
                        }
                    </ul>
                </div>
            </div>
        </AutoWidth>
    )
}