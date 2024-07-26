import icons from "@/utils/icons"
import Image from "next/image"
const CorrelationCard = ({ cardItem }) => {
    return (
        <div className="w-[33%] p-[16px] border-[1px] border-[#eceef2] rounded-lg relative ml-[20px] mt-[20px] ">
            <span className="absolute top-[16px] right-[16px]">{icons['downSvg']}</span>
            <h3 className="text-[14px] text-[#20232d]">{cardItem.title}</h3>
            <div className="text-[12px] text-[#20232d] pt-[5px]">{cardItem.time}</div>
            <div className="flex items-center text-[12px my-[16px]">
                <span>{icons['positionSvg']}</span>
                <span>{cardItem.positionName}</span>
            </div>
            <div className="flex items-center">
                <div className=" flex items-center">
                    {
                        cardItem.correlationImages.map((img, i) => {
                            let left = i * 5
                            let custom_className = `w-[24px] h-[24px] relative -left-[${left}px]`
                            return <Image key={i} src={require(`@/public/${img}`)} alt="图像" className={custom_className} />
                        })
                    }
                </div>
                <span className="text-[12px] text-[#525866]">+{cardItem.correlationImages.length}</span>
            </div>
        </div>
    )
}
export default CorrelationCard