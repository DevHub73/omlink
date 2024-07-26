function IconBlock({ width, height, bgColor, children }) {
    return <div className={`flex justify-center items-center rounded-full w-[${width}px] h-[${height}px] bg-${bgColor}`}>
        {children}
    </div>
}

export default IconBlock