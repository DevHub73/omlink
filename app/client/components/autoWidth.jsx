export default function AutoWidth({ children }) {
    return <div className="w-full flex justify-center items-center ">
        <div className="w-[1323px] flex justify-center">
            <div className="w-[1206px] bg-white">
                {children}
            </div>
        </div>
    </div>
}