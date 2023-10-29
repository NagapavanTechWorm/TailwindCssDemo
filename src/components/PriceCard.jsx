import { priceCards } from "../Data/data"
import { Card } from "./Card"

export const PriceCard = ()=>{
    return(
        <div className="max-w-full bg-white">
            <div className=" max-w-[1240px] mx-auto bg-white py-20 px-5">
            <div className=" grid sm:grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {priceCards.map((item)=>{
                    return <div key={item.id} className="flex lg:flex-row sm:flex-col sm:justify-start md:justify-center justify-center items-center">
                    <Card key={item.id} {...item} />
                    </div>
                })}
            </div>
        </div>
        </div>
    )
}