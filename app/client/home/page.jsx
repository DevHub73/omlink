'use client'
import icons from "@/utils/icons"
import GeLiImage from '@/app/assets/images/geli.png'
import Image from "next/image"
import AuthorImage from '@/app/assets/images/user.png'
import User1 from '@/public/user1.png'
import User2 from '@/public/user2.png'
import User3 from '@/public/user3.png'
import GroupImg1 from '@/public/groupImg1.png'
import GroupImg2 from '@/public/groupImg2.png'
import GroupImg3 from '@/public/groupImg3.png'
import GroupImg4 from '@/public/groupImg4.png'
import RankOneImg from '@/public/rankOne.png'
import RankTwoImg from '@/public/rankTwo.png'
import RankTreeImg from '@/public/rankTree.png'
import RankFourImg from '@/public/rankFour.png'
import dataTableImg from '@/public/image.png'
import { useEffect, useState } from "react"
import CorrelationCard from "../components/CorrelationCard"
export default function Home() {
    const current_tab_class = 'bg-white border-[1px] cursor-pointer border-[#e1e3e5] rounded-xl py-[8px] px-[14px] flex justify-center items-center'
    const defaull_tab_class = 'flex justify-center cursor-pointer items-center text-[#6c6e79] py-[8px] px-[14px]'
    const [curTabIndex, setCurTabIndex] = useState(1)
    const tabs = [{
        label: 'Link people',
        num: 12
    },
    {
        label: 'Event',
        num: 12
    },
    {
        label: 'Product',
        num: 12
    },
    {
        label: 'Tribe',
        num: 12
    },
    {
        label: 'ldea',
        num: 12
    },
    {
        label: 'Money',
        num: 12
    },
    ]
    const list = [
        {
            title: '找茶”AI项目达人高峰论坛',
            time: '11:00-1:00 AM (UTC)',
            positionName: 'Golden Sands',
            correlationImages: ['user1.png', 'user2.png', 'user3.png']
        },
        {
            title: '找茶”AI项目达人高峰论坛',
            time: '11:00-1:00 AM (UTC)',
            positionName: 'Golden Sands',
            correlationImages: ['user1.png', 'user2.png', 'user3.png']
        },
        {
            title: '找茶”AI项目达人高峰论坛',
            time: '11:00-1:00 AM (UTC)',
            positionName: 'Golden Sands',
            correlationImages: ['user1.png', 'user2.png', 'user3.png']
        },
        {
            title: '找茶”AI项目达人高峰论坛',
            time: '11:00-1:00 AM (UTC)',
            positionName: 'Golden Sands',
            correlationImages: ['user1.png', 'user2.png', 'user3.png']
        },
        {
            title: '找茶”AI项目达人高峰论坛',
            time: '11:00-1:00 AM (UTC)',
            positionName: 'Golden Sands',
            correlationImages: ['user1.png', 'user2.png', 'user3.png']
        },
        {
            title: '找茶”AI项目达人高峰论坛',
            time: '11:00-1:00 AM (UTC)',
            positionName: 'Golden Sands',
            correlationImages: ['user1.png', 'user2.png', 'user3.png']
        }
    ]
    useEffect(() => {
        console.clear()
    }, [])
    return (
        <div>
            <div className="author-layout flex justify-between my-[48px] pb-[100px]">
                <div className="mr-[250px] flex justify-center flex-col">
                    <h1 className="text-[#101828] text-[48px] font-bold">赵喜娜</h1>
                    <div className="flex text-[16px] items-center my-[24px]">
                        <span className="text-[#6941c6] ">产品设计师</span>
                        <span className="w-[8px] h-[8px] bg-[#6f717c] rounded-full mx-[10px]"></span>
                        <span className="text-[#6f717c]">Canva</span>
                    </div>
                    <p className="343A40 m">I'm a Product Designer based in Melbourne.</p>
                    <div className="flex mt-[32px]">
                        <div className="flex mr-[12px] cursor-pointer justify-center items-center bg-[#7f56d9] rounded-lg text-[#fff] py-[12px] px-[22px]">
                            {icons['moneySvg']}
                            <span className="ml-[10px]">聘请</span>
                        </div>
                        <div className="flex mr-[12px] cursor-pointer justify-center items-center bg-[#fff] rounded-lg border-[1px] py-[12px] px-[22px] border-[#d0d5dd] text-[#344054] py-[12px] px-[22px">
                            {icons['consultSvg']}
                            <span className="ml-[10px]">咨询</span>
                        </div>
                        <div className="flex mr-[12px] cursor-pointer justify-center items-center bg-[#fff] rounded-lg border-[1px] py-[12px] px-[22px] border-[#d0d5dd] text-[#344054] py-[12px] px-[22px">
                            {icons['interactSvg']}
                            <span className="ml-[10px]">合作</span>
                        </div>
                    </div>
                    <div className="mt-[100px]">
                        <div className="">
                            <div className="flex items-center">
                                <div className="text-[42px] flex text-[#18181b] items-center">
                                    85
                                    <span>+</span>
                                    <span className="text-[13px] relative -top-[10px] pl-[14px]">项目</span>
                                </div>
                                <Image src={GeLiImage} className="w-[15px] h-[38px] mx-[25px]" alt="图像" />
                                <div className="text-[42px] flex text-[#18181b] items-center">
                                    48.5
                                    <span>+</span>
                                    <span className="text-[13px] relative -top-[10px] pl-[14px]">粉丝</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="text-[42px] flex text-[#18181b] items-center">
                                    78
                                    <span>+</span>
                                    <span className="text-[13px] relative -top-[10px] pl-[14px]">团体</span>
                                </div>
                                <Image src={GeLiImage} className="w-[15px] h-[38px] mx-[25px]" alt="图像" />
                                <div className="text-[42px] flex text-[#18181b] items-center">
                                    3.5K
                                    <span>+</span>
                                    <span className="text-[13px] relative -top-[10px] pl-[14px]">观点</span>
                                </div>
                            </div>
                        </div>
                        <ul className="flex mt-[28px] items-center">
                            <li className="pr-[16px] cursor-pointer">
                                {icons['weixinSvg']}
                            </li>
                            <li className="pr-[16px] cursor-pointer">
                                {icons['weiboSvg']}
                            </li>
                            <li className="pr-[16px] cursor-pointer">
                                {icons['lianshuSvg']}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex-1">
                    <Image src={AuthorImage} alt="图像"></Image>
                </div>
            </div>
            <div className="border-t-[1px] border-[#f4f4f5]">
                <div className="flex py-[32px] border-b-[1px] border-[#f4f4f5]">
                    <div className="w-[300px] ">
                        <div className="text-[#344054] text-[16px] flex">
                            <span>{icons['groupSvg']}</span>
                            <span className="ml-[12px]">团队</span>
                        </div>
                    </div>
                    <div className="flex-1 ">
                        <ul className="flex flex-wrap justify-end">
                            <li className="w-[437px] h-[256px]  border-[1px] border-[#edeef2] rounded-xl flex flex-col  mb-[20px]">
                                <div className="w-full px-[24px] py-[14px] cursor-pointer">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Image src={GroupImg1} alt="图像" className="w-[48px] h-[48px] mr-[12px]"></Image>
                                            <div className="">
                                                <h3 className="text-[16px] text-[#101828]">Data cola group  </h3>
                                                <span className="text-[14px] text-[#475467]">Data provider</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <span className="text-[12px] text-[#525866]">Sydney</span>
                                            <Image src={RankOneImg} alt="图像" className="w-[30px] h-[30px] my-[4px]"></Image>
                                            <span className="text-[12px] text-[#525866] font-bold">宠物生活</span>
                                        </div>
                                    </div>
                                    <div className="w-full h-[100px]  ">
                                        <Image src={dataTableImg} alt="图像" className="relative -top-[15px]"></Image>

                                    </div>
                                </div>
                                <div className="border-t-[1px] border-[#eceef2] px-[24px] flex justify-end items-center flex-1">
                                    <span className="text-[#6941c6] text-[14px] font-bold cursor-pointer">查看团队</span>
                                </div>
                            </li>
                            <li className="w-[437px] h-[256px]  border-[1px] border-[#edeef2] rounded-xl flex flex-col ml-[20px] mb-[20px]">
                                <div className="w-full px-[24px] py-[14px] cursor-pointer">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Image src={GroupImg2} alt="图像" className="w-[48px] h-[48px] mr-[12px]"></Image>
                                            <div className="">
                                                <h3 className="text-[16px] text-[#101828]">Data cola group  </h3>
                                                <span className="text-[14px] text-[#475467]">Data provider</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <span className="text-[12px] text-[#525866]">Sydney</span>
                                            <Image src={RankTreeImg} alt="图像" className="w-[30px] h-[30px] my-[4px]"></Image>
                                            <span className="text-[12px] text-[#525866] font-bold">土澳美食 </span>
                                        </div>
                                    </div>
                                    <div className="w-full h-[100px] ">
                                        <Image src={dataTableImg} alt="图像" className="relative -top-[15px]"></Image>
                                    </div>
                                </div>
                                <div className="border-t-[1px] border-[#eceef2] px-[24px] flex justify-end items-center flex-1">
                                    <span className="text-[#6941c6] text-[14px] font-bold cursor-pointer">查看团队</span>
                                </div>
                            </li>
                            <li className="w-[437px] h-[256px]  border-[1px] border-[#edeef2] rounded-xl flex flex-col  ">
                                <div className="w-full px-[24px] py-[14px] cursor-pointer">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Image src={GroupImg3} alt="图像" className="w-[48px] h-[48px] mr-[12px]"></Image>
                                            <div className="">
                                                <h3 className="text-[16px] text-[#101828]">冒险犀牛投资者 </h3>
                                                <span className="text-[14px] text-[#475467]">Decision maker</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <span className="text-[12px] text-[#525866]">Chatswood</span>
                                            <Image src={RankFourImg} alt="图像" className="w-[30px] h-[30px] my-[4px]"></Image>
                                            <span className="text-[12px] text-[#525866] font-bold">悉尼恋爱</span>
                                        </div>
                                    </div>
                                    <div className="w-full h-[100px] ">
                                        <Image src={dataTableImg} alt="图像" className="relative -top-[15px]"></Image>
                                    </div>
                                </div>
                                <div className="border-t-[1px] border-[#eceef2] px-[24px] flex justify-end items-center flex-1">
                                    <span className="text-[#6941c6] text-[14px] font-bold cursor-pointer">查看团队</span>
                                </div>
                            </li>
                            <li className="w-[437px] h-[256px]  border-[1px] border-[#edeef2] rounded-xl flex flex-col ml-[20px]">
                                <div className="w-full px-[24px] py-[14px] cursor-pointer">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Image src={GroupImg4} alt="图像" className="w-[48px] h-[48px] mr-[12px]"></Image>
                                            <div className="">
                                                <h3 className="text-[16px] text-[#101828]">Sydney uni winner  </h3>
                                                <span className="text-[14px] text-[#475467]">Data collector</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <span className="text-[12px] text-[#525866]">Australia  </span>
                                            <Image src={RankTwoImg} alt="图像" className="w-[30px] h-[30px] my-[4px]"></Image>
                                            <span className="text-[12px] text-[#525866] font-bold">职场霸总</span>
                                        </div>
                                    </div>
                                    <div className="w-full h-[100px]  ">
                                        <Image src={dataTableImg} alt="图像" className="relative -top-[15px]"></Image>
                                    </div>
                                </div>
                                <div className="border-t-[1px] border-[#eceef2] px-[24px] flex justify-end items-center flex-1">
                                    <span className="text-[#6941c6] text-[14px] font-bold cursor-pointer">查看团队</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex py-[32px] border-b-[1px] border-[#f4f4f5]">
                    <div className="w-[300px] ">
                        <div className="text-[#344054] text-[16px] flex">
                            <span>{icons['projectSvg']}</span>
                            <span className="ml-[2px]">项目</span>
                        </div>
                    </div>
                    <div className="flex-1 ">
                        <ul className="flex flex-wrap justify-end">
                            <li className="w-[437px] h-[256px] pl-[20px] pb-[20px]">
                                <img src="/projectImg1.png" alt="图像" className="w-full h-full" />
                            </li>
                            <li className="w-[437px] h-[256px] pl-[20px] pb-[20px]">
                                <img src="/projectImg2.png" alt="图像" className="w-full h-full" />
                            </li>
                            <li className="w-[437px] h-[256px] pl-[20px]">
                                <img src="/projectImg3.png" alt="图像" className="w-full h-full" />
                            </li>
                            <li className="w-[437px] h-[256px] pl-[20px]">
                                <img src="/projectImg4.png" alt="图像" className="w-full h-full" />
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="flex py-[32px] border-b-[1px] border-[#f4f4f5]">
                    <div className="w-[300px] ">
                        <div className="text-[#344054] text-[16px] flex">
                            <span>{icons['magnetSvg']}</span>
                            <span className="ml-[2px]">相关推荐</span>
                        </div>
                    </div>
                    <div className="flex-1 ">
                        <div className=" flex justify-end">
                            <ul className="flex  bg-[#f7f7f8] rounded-xl">
                                {
                                    tabs.map((tab, i) => {
                                        return <li key={i} onClick={() => setCurTabIndex(i)} className={i == curTabIndex ? current_tab_class : defaull_tab_class}>
                                            <span>{tab.label}</span>
                                            {
                                                (tab.num && i == curTabIndex) && <span className="py-[3px] px-[8px] ml-[4px] bg-[#df1c41] rounded-md text-white text-[12px]">12</span>
                                            }
                                        </li >
                                    })
                                }
                            </ul>
                        </div>
                        <div className="flex justify-end">
                            {
                                curTabIndex == 1 ?
                                    <ul className="flex flex-wrap justify-end w-[860px]">
                                        <li className="w-full flex">
                                            {
                                                list.slice(0, 3).map((card, i) => {
                                                    return <CorrelationCard key={i} cardItem={card} />
                                                })
                                            }
                                        </li>
                                        <li className="w-full flex">
                                            {
                                                list.slice(3, 6).map((card, i) => {
                                                    return <CorrelationCard key={i} cardItem={card} />
                                                })
                                            }
                                        </li>
                                    </ul> : <div className="h-[364px]">
                                        {curTabIndex + 1}
                                    </div>
                            }
                        </div>
                    </div>

                </div>
            </div >
        </div >
    )
}