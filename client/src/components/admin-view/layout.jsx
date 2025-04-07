import { Outlet } from "react-router-dom"

export const AdminLayout=()=>{
    return (
        <div className="flex min-h-screen w-full">
            <div className="flex flex-1 flex-col">
                <main>
                    <main className="flex-1 flex bg-muted/40 p-4 md:p-6" ></main>
                    <Outlet/>
                </main>
            </div>
            

        </div>
    )
}