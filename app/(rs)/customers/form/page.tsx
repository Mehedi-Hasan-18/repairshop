import { BackButton } from "@/components/BackButton"
import { getCustomer } from "@/lib/queries/getCustomer"
import { parse } from "path"

export default async function CustomerFormPage({
    searchParams,
}:{
    searchParams: Promise<{[key: string]:string | undefined}>
}){
    try {
        
        const {customerId} = await searchParams

        //Edit customer form
        if(customerId){
            const customer = await getCustomer(parseInt(customerId))

            if(!customer){
                return(
                    <>
                    <h2 className="text-2xl mb-2">Customer Id #{customerId} not found</h2>
                    <BackButton variant="default" title="Go Back"></BackButton>
                    </>
                )
            }

            //put customer form component

        }else{
            //new customer form component
        }
            
    } catch (e) {
        if(e instanceof Error){
            throw e
        }
    }
}