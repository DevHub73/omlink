import Image from "next/image"
import icons from "@/utils/icons"
function CardBox({ title, width, bgImage, tab_config, size, isShadow }) {
    const cardWrap = `w-[${width}] h-full`
    return <div className="h-full relative">
        {tab_config?.name &&
            <div className={tab_config.bgColor + " transform -rotate-[5deg] absolute top-1 left-1 bg-gradient-to-r  rounded-full text-[white] text-[12px] flex justify-center items-center py-[4px] px-[12px] "}>
                {tab_config.iconName && <span className="mr-[7px]">{icons['hotSvg']}</span>}
                {tab_config.name}</div>
        }
        <div className={cardWrap}>
            <Image src={bgImage} alt="图像"></Image>
        </div>
        {isShadow && <div className="w-full  absolute bottom-0 rounded-xl" style={{ fontSize: `${size}px`, padding: '40px 20px 20px', backgroundImage: 'linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%)' }}>
            <span className="text-[#fff]">
                {title}
            </span>
        </div>}
    </div>
}


function CardRoundedBox({ title, width, bgImage, isShadow }) {
    const cutstom_className = ` w-[${width}px]  h-full relative `
    return <div className={cutstom_className}>
        <div className="rounded-full w-full h-full">
            <Image src={bgImage} />
        </div>
        <div className="w-full  flex justify-center items-center  absolute bottom-0" style={{ padding: '40px 20px 20px' }}>
            <span className="text-[#fff]">
                {title}
            </span>
        </div>
    </div >
}
export {
    CardBox,
    CardRoundedBox
}