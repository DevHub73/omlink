import AutoWidth from "../autoWidth";
import Link from "next/link";
export default function ClientFooter() {
    const first_tab_class = 'text-[#fff] mb-[12px] text-[16px]'
    const item_tab_class = 'text-[#bcbcbc] mb-[12px] text-[12px] cursor-pointer'
    return (
        <AutoWidth>
            <div className="flex px-[40px] justify-between bg-[#212121] py-[48px] ">
                <div className="flex flex-col">
                    <Link href={'/'} className={first_tab_class}>
                        你的账号
                    </Link>
                    <Link href={'/'} className={item_tab_class}>报名</Link>
                    <Link href={'/'} className={item_tab_class}>登录</Link>
                    <Link href={'/'} className={item_tab_class}>帮助</Link>
                    <Link href={'/'} className={item_tab_class}>成为会员</Link>
                </div>
                <div className="flex flex-col">
                    <Link href={'/'} className={first_tab_class}>
                        发现
                    </Link>
                    <Link href={'/'} className={item_tab_class}>团体</Link>
                    <Link href={'/'} className={item_tab_class}>日历</Link>
                    <Link href={'/'} className={item_tab_class}>主题</Link>
                    <Link href={'/'} className={item_tab_class}>城市</Link>
                    <Link href={'/'} className={item_tab_class}>在线活动</Link>
                    <Link href={'/'} className={item_tab_class}>本地向导</Link>
                </div>
                <div className="flex flex-col">
                    <Link href={'/'} className={first_tab_class}>
                        聚会
                    </Link>
                    <Link href={'/'} className={item_tab_class}>云party</Link>
                    <Link href={'/'} className={item_tab_class}>内容社区</Link>
                    <Link href={'/'} className={item_tab_class}>聚会公园</Link>
                    <Link href={'/'} className={item_tab_class}>商业街</Link>
                    <Link href={'/'} className={item_tab_class}>应用广场</Link>
                    <Link href={'/'} className={item_tab_class}>社交网络</Link>
                </div>
            </div>
        </AutoWidth>
    )
}