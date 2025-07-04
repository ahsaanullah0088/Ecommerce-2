import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";

function ShopingLayout(){
    return(
        <div className="flex flex-col bg-white overflow-hidden">
            <ShoppingHeader/>
                    <main className="flex flex-col w-full">
                        <Outlet/>
                    </main>
        </div>

    )

}
export default ShopingLayout;