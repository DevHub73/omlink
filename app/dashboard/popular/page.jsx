'use client'
import CardBlock from "./cardBlock"
import ParImage1 from '@/app/assets/images/parImage1.png'
import BlockImage2 from '@/app/assets/images/blockImage2.png'
import BlockImage3 from '@/app/assets/images/blockImage3.png'
import BlockImage4 from '@/app/assets/images/blockImage4.png'
import ParImage2 from '@/app/assets/images/parImage2.png'
import ParImage3 from '@/app/assets/images/parImage3.png'
import ParImage4 from '@/app/assets/images/parImage4.png'
import GiftImage from '@/app/assets/images/GiftImage.png'
import ParImage5 from '@/app/assets/images/parImage5.png'
import FoodImage from '@/app/assets/images/FoodImage.png'
import BlockImage5 from '@/app/assets/images/blockImage5.png'
import BlockImage6 from '@/app/assets/images/blockImage6.png'
import TagImage1 from '@/app/assets/images/tagImage1.png'
import TagImage2 from '@/app/assets/images/tagImage2.png'
import TagImage3 from '@/app/assets/images/tagImage3.png'
import CardBigImage from '@/app/assets/images/cardBig.png'
import Image from "next/image"
import { useState } from "react"
import icons from "@/utils/icons"
import {
    CardBox,
    CardRoundedBox
} from './CardBox'
function PopularPage() {
    const tabsList = ['Best Sale', 'Flash Sale', 'New Release']
    const [curIndex, setCurIndex] = useState(0)
    return <div className="flex w-full h-full ">
        <div className="w-[500px] h-full flex flex-col ">
            <div className="w-full h-[336px] mb-[20px] bg-light-white-bg rounded-2xl">
                <div className={'card-wrap'}>
                    <div className="flex justify-between mb-[20px]">
                        <h3 className="text-[20px] text-[#1F1C23]">Products</h3>
                        <div className=''>
                            <ul className="flex">
                                {
                                    tabsList.map((tab, i) => (<li key={i} onClick={() => setCurIndex(i)} style={curIndex == i ? { background: 'rgba(148,131,188)', color: '#fff' } : { color: 'rgba(31,28,35,0.8)', background: 'rgba(255,255,255,0.4)' }} className={'flex justify-center items-center text-[14px] py-[5px] px-[10px] rounded-full ml-[10px] cursor-pointer'}>
                                        <span>{tab}</span>
                                    </li>))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-1">
                        {
                            curIndex == 0 ? <ul className="flex justify-between w-full">
                                <li className="w-[31.83%] bg-light-white-bg rounded-xl flex flex-col overflow-hidden">
                                    <div className="h-[150px] w-full relative">
                                        <CardBox tab_config={{ name: 'Top 1', bgColor: 'from-[#ee3025] to-[#f28d5f]', color: 'white' }} width={'100%'} bgImage={TagImage1} />
                                    </div>
                                    <div className="p-[10px] flex flex-col flex-1">
                                        <h3 className="text-[#1F1C23] text-[18px]">Burger meal</h3>
                                        <div className="flex-1 flex justify-end flex-col text-[12px] ">
                                            <div className="flex justify-between">
                                                <span className="text-[#000000]">
                                                    $20.00
                                                </span>
                                                <div className='flex items-center'>
                                                    <div className='flex items-center text-[#9483bc]'>Buy now<span className='pl-[5px]'>{icons['rightDownSvg']}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="w-[31.83%] bg-light-white-bg rounded-xl flex flex-col">
                                    <div className="h-[150px] w-full relative">
                                        <CardBox tab_config={{ name: 'Top 2', bgColor: 'from-[#f67f23] to-[#f4e61c]', color: 'white' }} width={'100%'} bgImage={TagImage2} />
                                    </div>
                                    <div className="p-[10px] flex flex-col flex-1">
                                        <h3 className="text-[#1F1C23] text-[18px]">Lemon prawn</h3>
                                        <div className="flex-1 flex justify-end flex-col text-[12px] ">
                                            <div className="flex justify-between">
                                                <span className="text-[#000000]">
                                                    $18.00
                                                </span>
                                                <div className='flex items-center'>
                                                    <div className='flex items-center text-[#9483bc]'>Buy now<span className='pl-[5px]'>{icons['rightDownSvg']}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="w-[31.83%] bg-light-white-bg rounded-xl flex flex-col">
                                    <div className="h-[150px] w-full relative">
                                        <CardBox tab_config={{ title: 'Food event', name: 'Top 3', bgColor: 'from-[#3666aa] to-[#30bced]', color: 'white' }} width={'100%'} bgImage={TagImage3} />
                                    </div>
                                    <div className="p-[10px] flex flex-col flex-1">
                                        <h3 className="text-[#1F1C23] text-[18px]">Yogurt</h3>
                                        <div className="flex-1 flex justify-end flex-col text-[12px] ">
                                            <div className="flex justify-between">
                                                <span className="text-[#000000]">
                                                    $8.00
                                                </span>
                                                <div className='flex items-center'>
                                                    <div className='flex items-center text-[#9483bc]'>Buy now<span className='pl-[5px]'>{icons['rightDownSvg']}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul> : tabsList[curIndex]
                        }
                    </div>
                </div>
            </div>
            <div className="h-[336px] bg-light-white-bg rounded-2xl">
                <CardBlock title="Partners" isMore>
                    <div className="flex justify-between relative -top-2">
                        <div className="mr-[10px]">
                            <div className="w-[240px] h-[240px]">
                                <CardRoundedBox width={'100%'} title="Cody Fisher" borderColor='from-[#f67f23] to-[#f4e61c]' bgImage={ParImage1} />
                            </div>
                            <div className={'text-style1'}>champion</div>
                        </div>
                        <div className="flex-1 flex flex-wrap justify-between text-[12px]">
                            <div className="w-[100px] h-[100px] text-center flex flex-col">
                                <CardRoundedBox width={'100%'} title="Esther Howard" borderColor='from-[#f67f23] to-[#f4e61c]' bgImage={ParImage2} />
                                <span className={'text2'}>Silver</span>
                            </div>
                            <div className="w-[100px] h-[100px]  text-center flex flex-col">
                                <CardRoundedBox width={'100%'} title="Marvin McKinney" borderColor='from-[#f67f23] to-[#f4e61c]' bgImage={ParImage3} />
                                <span className={'text3'}>Bronze</span>
                            </div>
                            <div className="w-[100px] h-[100px]  text-center flex flex-col">
                                <CardRoundedBox width={'100%'} title="Brooklyn Simmons" borderColor='from-[#f67f23] to-[#f4e61c]' bgImage={ParImage4} />
                                <span className={'text4'}>Top 4</span>
                            </div>
                            <div className="w-[100px] h-[100px]  text-center flex flex-col">
                                <CardRoundedBox width={'100%'} title="Darlene Robertson" borderColor='from-[#f67f23] to-[#f4e61c]' bgImage={ParImage5} />
                                <span className={'text4'}>Top 5</span>
                            </div>

                        </div>
                    </div>
                </CardBlock>
            </div>
        </div>
        <div className="flex-1   ml-[20px] flex flex-col ">
            <div className="bg-light-white-bg rounded-2xl">
                <CardBlock title="Every day gift" isMore={false}>
                    <div className="flex ">
                        <Image src={GiftImage} alt="图像" className="w-[120px] h-[120px]"></Image>
                        <div className="ml-[20px] flex  flex-col justify-center">
                            <div className="mb-[5px] text-[16px]">Congratulations</div>
                            <div className="mb-[5px]">You win a</div>
                            <div className="mb-[5px] text-[20px]">Burger meal</div>
                        </div>
                        {/* <ul className="flex justify-between ">
                            <li className="w-[76px]">
                                <Image src={CardImage}></Image>
                                <div className="flex justify-center  mt-[10px]">
                                    <span className="text-white text-[14px] bg-[#9483bc] px-[8px] py-[2px] rounded-full">
                                        Open
                                    </span>
                                </div>
                            </li>
                            <li className="w-[76px]">
                                <Image src={CardImage}></Image>
                                <div className="flex justify-center  mt-[10px]">
                                    <span className="text-white text-[14px] bg-[#9483bc] px-[8px] py-[2px] rounded-full">
                                        Open
                                    </span>
                                </div>
                            </li>
                            <li className="w-[76px]">
                                <Image src={CardImage}></Image>
                                <div className="flex justify-center  mt-[10px]">
                                    <span className="text-white text-[14px] bg-[#9483bc] px-[8px] py-[2px] rounded-full">
                                        Open
                                    </span>
                                </div>
                            </li>
                            <li className="w-[76px]">
                                <Image src={CardImage}></Image>
                                <div className="flex justify-center  mt-[10px]">
                                    <span className="text-white text-[14px] bg-[#9483bc] px-[8px] py-[2px] rounded-full">
                                        Open
                                    </span>
                                </div>
                            </li>
                            <li className="w-[76px]">
                                <Image src={CardImage}></Image>
                                <div className="flex justify-center  mt-[10px]">
                                    <span className="text-white text-[14px] bg-[#9483bc] px-[8px] py-[2px] rounded-full">
                                        Open
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <div className="mt-[20px] text-center text-[12px] text-[#000]">
                            <span>
                                Choose one of five gifts
                            </span>
                        </div> */}
                    </div>
                </CardBlock>
            </div>
            <div className="bg-light-white-bg rounded-2xl mt-[20px]">
                <CardBlock title="Popular events" isMore>
                    <div className="mt-[10px] mb-[20px]">
                        <div className="flex justify-between mb-[10px]">
                            <CardBox tab_config={{ name: 'Top event', bgColor: 'from-[#f67f23] to-[#f4e61c]', color: 'white', iconName: 'hotSvg' }} title='Food event' size="20" width={'225px'} isShadow={true} bgImage={CardBigImage} />
                            <CardBox tab_config={{ name: 'Top event', bgColor: 'from-[#f67f23] to-[#f4e61c]', color: 'white', iconName: 'hotSvg' }} title='Food event' size="20" width={'225px'} isShadow={true} bgImage={CardBigImage} />
                            {/* <Image src={FoodImage} alt="图像" className="w-[225px] h-[225px]"></Image> */}
                        </div>
                        <div className="flex justify-between">
                            <Image src={BlockImage5} alt="图像" className="w-[23.99%]"></Image>
                            <Image src={BlockImage6} alt="图像" className="w-[23.99%]"></Image>
                            <Image src={BlockImage6} alt="图像" className="w-[23.99%]"></Image>
                            <Image src={BlockImage6} alt="图像" className="w-[23.99%]"></Image>
                        </div>
                    </div>
                </CardBlock>
            </div>
        </div>
    </div >
}

export default PopularPage