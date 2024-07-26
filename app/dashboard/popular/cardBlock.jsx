
import icons from '@/utils/icons'
function CardBlock({ title, isMore, children }) {
    return <div className={'card-wrap'}>
        <div className="flex justify-between mb-[20px]">
            <h3 className="text-[20px] text-[#1F1C23]">{title}</h3>
            {
                isMore && <div className='text-[#9483bc] text-[14px] flex items-center cursor-pointer'>
                    <div className=' flex items-center'>View all<span className='pl-[5px]'>{icons['rightDownSvg']}</span></div>
                </div>
            }
        </div>
        <div>
            {children}
        </div>
    </div>
}

export default CardBlock