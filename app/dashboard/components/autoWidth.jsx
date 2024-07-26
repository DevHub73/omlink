function AutoWidth({ children }) {
    return <div className="w-full  flex justify-center  overflow-hidden">
        <div className="w-[1280px] p-[20px] flex ">
            {children}
        </div>
    </div>
}

export default AutoWidth