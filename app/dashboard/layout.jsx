import AutoWidth from "./components/autoWidth";
import Dashboard_Content from "./components/dashboardLayout/d_content";
import Dashboard_Header from "./components/dashboardLayout/d_header";
import SiderBar from "./components/dashboardLayout/siderBar";

export default function DashboardLayout({ children }) {
    return (
        <div style={{ background: 'radial-gradient(100% 980% at 100% 100%, #C8C0DD 0%, #EBE8F3 100%)' }} className="w-full h-screen">
            <AutoWidth>
                <div className="">
                    <SiderBar />
                </div>
                <div className="content-layout flex-1 ml-[20px] flex flex-col">
                    <div>
                        <Dashboard_Header />
                    </div>
                    <div className="flex-1  mt-[20px]">
                        <Dashboard_Content>
                            {children}
                        </Dashboard_Content>
                    </div>
                </div>
            </AutoWidth>
        </div>

    )
}