'use client'
import HeadImage from '@/app/assets/images/headImage.png'
import Image from 'next/image'
import icons from '@/utils/icons'
import scaleImage from '@/app/assets/images/scaleImage.png'
import User1 from '@/app/assets/images/user1.png'
import User2 from '@/app/assets/images/user2.png'
import User3 from '@/app/assets/images/user3.png'
import User4 from '@/app/assets/images/user4.png'
import User5 from '@/app/assets/images/user5.png'
import User6 from '@/app/assets/images/user6.png'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Brush,
    AreaChart,
    linearGradient,
    Area,
} from 'recharts';
import { Suspense, useState, useEffect } from 'react'

function CustomTooltip({ active, payload, label }) {
    return (
        <div className="rounded-xl py-[5px] px-[20px] flex flex-col justify-center items-center" style={{ background: 'rgba(255, 255, 255, 0.4)' }}>
            <p>${payload[0]?.value}</p>
            <p className='text-[#9483BC] text-[12px]'>{new Date().getMonth() + 1} {label} {new Date().getFullYear()}</p>
            {/* 这里可以添加更多自定义内容 */}
        </div>
    );
}

function HomePage() {
    const [data, setData] = useState([
        {
            name: 'Jan',
            uv: 4000,
            pv: 3400,
            amt: 2400,
        },
        {
            name: 'Feb',
            uv: 3000,
            pv: 3398,
            amt: 2210,
        },
        {
            name: 'Mar',
            uv: 2000,
            pv: 3800,
            amt: 2290,
        },
        {
            name: 'Apr',
            uv: 2780,
            pv: 7908,
            amt: 2000,
        },
        {
            name: 'May',
            uv: 1890,
            pv: 2800,
            amt: 2181,
        },
    ])
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <div className="flex w-full h-full ">
            <div className="w-[500px] h-full flex flex-col ">
                <div className="flex-1  mb-[20px] flex flex-col">
                    <div className='flex-1 w-full flex'>
                        <div className="flex-1  h-full">
                            <div className='mb-[25px]'>
                                <Image src={HeadImage} alt="图像" className='w-[100px] h-[100px]' />
                            </div>
                            <div className='text-[14px] relative top-2'>
                                <p className='text-[#9483BC]'>Welcome<span className='text-[#1F1C23] pl-[6px]'>Henry yau</span></p>
                                <p className='text-[18px]'><span style={{ color: 'rgba(31, 28, 35, 0.6)', paddingRight: '6px' }}>Let’s see yours</span>Statistics</p>
                            </div>
                        </div>
                        <div className="w-[245px] h-full flex flex-col  ">
                            <div className='bg-light-white-bg rounded-lg py-[12px] px-[20px] mb-[20px]'>
                                <div className='relative'>
                                    <div className='flex items-center'>
                                        <h3 className='text-[28px] pr-[10px] text-[#9483bc]'>#Food</h3>
                                        <span className='text-[16px] text-[#9483BC]'>#Games</span>
                                    </div>
                                    <div className='text-[#9483bc] text-[14px] cursor-pointer'>
                                        <div className=' flex items-center'>View all<span className='pl-[5px]'>{icons['rightDownSvg']}</span></div>
                                    </div>
                                    <p className='absolute -right-[24px] top-[20px] transform rotate-90 text-[14px] text-[#a29ea9]'>Keywords</p>
                                </div>
                            </div>
                            <div className='bg-light-white-bg rounded-lg py-[12px] px-[20px] '>
                                <div className='relative'>
                                    <div className='flex items-center'>
                                        <h3 className='text-[18px]  text-[#1F1C23]'>$2,000.00</h3>
                                    </div>
                                    <div className='text-[#9483bc] text-[14px] flex items-center'>
                                        <span>
                                            {icons['topDownSvg']}
                                        </span>
                                        <div className='flex items-center text-[#3EB347] text-[12px] ml-[5px]'>$120.00</div>
                                    </div>
                                    <p className='absolute -right-[12px] top-[12px] transform rotate-90 text-[14px] text-[#a29ea9]'>Growth</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full h-[69px] mt-[20px] flex'>
                        <div className='w-[151px] mr-[20px] h-full rounded-xl bg-[#9483bc] text-[18px] flex justify-center items-center text-white'>
                            <span>
                                {icons['messageIconSvg']}
                            </span>
                            <span className='pl-[10px] cursor-pointer text-[#fff]'>
                                Message
                            </span>
                        </div>
                        <div className='flex-1 flex rounded-xl bg-light-white-bg py-[10px] px-[20px] relative'>
                            <div className='pr-[30px] flex flex-col justify-between'>
                                <div className='text-[12px] text-[#9483BC]'>Total</div>
                                <div className='text-[18px] text-[#1F1C23]'>$20,000.00</div>
                            </div>
                            <div className='pr-[30px] flex flex-col justify-between'>
                                <div className='text-[12px] text-[#9483BC]'>This month</div>
                                <div className='text-[18px] text-[#1F1C23]'>$20,000.00</div>
                            </div>
                            <p className='absolute -right-[-8px] top-[25px] transform rotate-90 text-[14px] text-[#a29ea9]'>Income</p>
                        </div>
                    </div>


                </div>
                <div className="h-[429px] bg-light-white-bg rounded-xl">
                    <div className='p-[20px]'>
                        <div className='flex justify-between mb-[20px]'>
                            <h3 className='text-[20px] text-[#1F1C23]'>Statistics</h3>
                            <div className='text-[#9483bc] text-[14px] cursor-pointer'>
                                <div className=' flex items-center'>View all<span className='pl-[5px]'>{icons['rightDownSvg']}</span></div>
                            </div>
                        </div>
                        <div className='flex h-full text-[12px]'>
                            <div className='flex-1'>
                                <div className='mb-[10px]'>Recruiter</div>
                                <div className='flex flex-col'>
                                    <div className='flex items-center mb-[10px] py-[5px]'>
                                        <Image src={User1} alt="图像" className="w-[30px] h-[30px] rounded-full"></Image>
                                        <span className='ml-[10px] text-[#9483bc]'>Albert Flores</span>
                                    </div>
                                    <div className='flex items-center mb-[10px] py-[5px]'>
                                        <Image src={User2} alt="图像" className="w-[30px] h-[30px] rounded-full"></Image>
                                        <span className='ml-[10px] text-[#9483bc]'>Albert Flores</span>
                                    </div>
                                    <div className='flex items-center mb-[10px] py-[5px]'>
                                        <Image src={User3} alt="图像" className="w-[30px] h-[30px] rounded-full"></Image>
                                        <span className='ml-[10px] text-[#9483bc]'>Albert Flores</span>
                                    </div>
                                    <div className='flex items-center mb-[10px] py-[5px]'>
                                        <Image src={User4} alt="图像" className="w-[30px] h-[30px] rounded-full"></Image>
                                        <span className='ml-[10px] text-[#9483bc]'>Albert Flores</span>
                                    </div>
                                    <div className='flex items-center mb-[10px] py-[5px]'>
                                        <Image src={User5} alt="图像" className="w-[30px] h-[30px] rounded-full"></Image>
                                        <span className='ml-[10px] text-[#9483bc]'>Albert Flores</span>
                                    </div>
                                    <div className='flex items-center mb-[10px] py-[5px]'>
                                        <Image src={User6} alt="图像" className="w-[30px] h-[30px] rounded-full"></Image>
                                        <span className='ml-[10px] text-[#9483bc]'>Albert Flores</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[60px]'>
                                <div className='mb-[10px]'>Price</div>
                                <div className='flex flex-col'>
                                    <div className='flex items-center mb-[10px] py-[5px] h-[40px]'>
                                        <span className=' text-[#1f1c23]'>$200</span>
                                    </div>
                                    <div className='flex items-center mb-[10px] py-[5px] h-[40px]'>
                                        <span className=' text-[#1f1c23]'>$200</span>
                                    </div>
                                    <div className='flex items-center mb-[10px] py-[5px] h-[40px]'>
                                        <span className=' text-[#1f1c23]'>$200</span>
                                    </div>
                                    <div className='flex items-center mb-[10px] py-[5px] h-[40px]'>
                                        <span className=' text-[#1f1c23]'>$200</span>
                                    </div>
                                    <div className='flex items-center mb-[10px] py-[5px] h-[40px]'>
                                        <span className=' text-[#1f1c23]'>$200</span>
                                    </div>
                                    <div className='flex items-center mb-[10px] py-[5px] h-[40px]'>
                                        <span className=' text-[#1f1c23]'>$200</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[40px]'>
                                <div className='mb-[10px]'>Match</div>
                                <div className='flex flex-col'>
                                    <div className='flex items-center mb-[10px] h-[40px] justify-end'>
                                        <Image src={scaleImage} alt="图像" className='w-[24px] h-[24px]'></Image>
                                    </div>
                                    <div className='flex items-center mb-[10px] h-[40px] justify-end'>
                                        <Image src={scaleImage} alt="图像" className='w-[24px] h-[24px]'></Image>
                                    </div>
                                    <div className='flex items-center mb-[10px] h-[40px] justify-end'>
                                        <Image src={scaleImage} alt="图像" className='w-[24px] h-[24px]'></Image>
                                    </div>
                                    <div className='flex items-center mb-[10px] h-[40px] justify-end'>
                                        <Image src={scaleImage} alt="图像" className='w-[24px] h-[24px]'></Image>
                                    </div>
                                    <div className='flex items-center mb-[10px] h-[40px] justify-end'>
                                        <Image src={scaleImage} alt="图像" className='w-[24px] h-[24px]'></Image>
                                    </div>
                                    <div className='flex items-center mb-[10px] h-[40px] justify-end'>
                                        <Image src={scaleImage} alt="图像" className='w-[24px] h-[24px]'></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col h-full  ml-[20px]">
                <div className='w-full flex-1 flex flex-col'>
                    <h3 style={{ color: '#44404a' }} className='text-[18px] mb-[10px]'>Net worth </h3>
                    {
                        isClient && <AreaChart
                            width={500}
                            height={200}
                            data={data}
                            syncId="anyId"
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            {/* <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#9483bc" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#fff" stopOpacity={0} />
                            </linearGradient>
                        </defs> */}
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip content={<CustomTooltip />} />
                            <Area type="monotone" dataKey="uv" stroke="#fff" fillOpacity={'1'} fill="#9483bc" />
                        </AreaChart>
                    }
                    <div className='w-full py-[10px] mt-[20px] text-[18px] px-[20px] bg-light-white-bg flex items-center justify-between rounded-xl'>
                        <div className='flex justify-start flex-1'>
                            <span style={{ color: 'rgba(31, 28, 35, 0.35)' }}>Current net worth </span>
                        </div>
                        <div className='h-full w-[2px] bg-[#9e9ba7] rounded-full'></div>
                        <div className='flex-1 flex justify-end'>
                            <span className='text-[#1f1c23] text-[18px]'>
                                $4000.00
                            </span>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[384px] bg-light-white-bg rounded-xl mt-[20px] p-[20px]'>
                    <div className='flex justify-between mb-[20px]'>
                        <h3 className='text-[20px] text-[#1F1C23]'>Projects</h3>
                        <div className='text-[#9483bc] text-[14px] cursor-pointer'>
                            <div className=' flex items-center'>View all<span className='pl-[5px]'>{icons['rightDownSvg']}</span></div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col '>
                        <div className='w-full flex justify-between mb-[10px] '>
                            <div className='py-[10px] px-[20px] bg-light-white-bg flex-1 mr-[5px] rounded-xl flex flex-col'>
                                <div className='flex justify-between'>
                                    <div className={`flex justify-center items-center rounded-full w-[40px] h-[40px] bg-[#4699f3]`}>
                                        {icons['alibabaIconSvg']}
                                    </div>
                                    <div className='text-[#1F1C23]'>
                                        <div className='text-[12px]  text-right'>Total</div>
                                        <div className='text-[14px]'>$10,000</div>
                                    </div>
                                </div>
                                <p className='mt-[10px]'>IBM</p>
                            </div>
                            <div className='py-[10px] px-[20px] bg-light-white-bg flex-1 ml-[5px] rounded-xl flex flex-col'>
                                <div className='flex justify-between'>
                                    <div className={`flex justify-center items-center rounded-full w-[40px] h-[40px] bg-[#4699f3]`}>
                                        {icons['alibabaIconSvg']}
                                    </div>
                                    <div className='text-[#1F1C23]'>
                                        <div className='text-[12px]  text-right'>Total</div>
                                        <div className='text-[14px]'>$10,000</div>
                                    </div>
                                </div>
                                <p className='mt-[10px]'>IBM</p>
                            </div>
                        </div>
                        <div className='w-full flex justify-between mb-[10px] '>
                            <div className='py-[10px] px-[20px] bg-light-white-bg flex-1 mr-[5px] rounded-xl flex flex-col'>
                                <div className='flex justify-between'>
                                    <div className={`flex justify-center items-center rounded-full w-[40px] h-[40px] bg-[#4699f3]`}>
                                        {icons['alibabaIconSvg']}
                                    </div>
                                    <div className='text-[#1F1C23]'>
                                        <div className='text-[12px]  text-right'>Total</div>
                                        <div className='text-[14px]'>$10,000</div>
                                    </div>
                                </div>
                                <p className='mt-[10px]'>IBM</p>
                            </div>
                            <div className='py-[10px] px-[20px] bg-light-white-bg flex-1 ml-[5px] rounded-xl flex flex-col'>
                                <div className='flex justify-between'>
                                    <div className={`flex justify-center items-center rounded-full w-[40px] h-[40px] bg-[#4699f3]`}>
                                        {icons['alibabaIconSvg']}
                                    </div>
                                    <div className='text-[#1F1C23]'>
                                        <div className='text-[12px]  text-right'>Total</div>
                                        <div className='text-[14px]'>$10,000</div>
                                    </div>
                                </div>
                                <p className='mt-[10px]'>IBM</p>
                            </div>
                        </div>
                        <div className='w-full flex justify-between mb-[10px] '>
                            <div className='py-[10px] px-[20px] bg-light-white-bg flex-1 mr-[5px] rounded-xl flex flex-col'>
                                <div className='flex justify-between'>
                                    <div className={`flex justify-center items-center rounded-full w-[40px] h-[40px] bg-[#4699f3]`}>
                                        {icons['alibabaIconSvg']}
                                    </div>
                                    <div className='text-[#1F1C23]'>
                                        <div className='text-[12px]  text-right'>Total</div>
                                        <div className='text-[14px]'>$10,000</div>
                                    </div>
                                </div>
                                <p className='mt-[10px]'>IBM</p>
                            </div>
                            <div className='py-[10px] px-[20px] bg-light-white-bg flex-1 ml-[5px] rounded-xl flex flex-col'>
                                <div className='flex justify-between'>
                                    <div className={`flex justify-center items-center rounded-full w-[40px] h-[40px] bg-[#4699f3]`}>
                                        {icons['alibabaIconSvg']}
                                    </div>
                                    <div className='text-[#1F1C23]'>
                                        <div className='text-[12px]  text-right'>Total</div>
                                        <div className='text-[14px]'>$10,000</div>
                                    </div>
                                </div>
                                <p className='mt-[10px]'>IBM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage