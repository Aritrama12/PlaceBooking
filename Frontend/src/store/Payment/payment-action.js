import { paymentAction } from "./payment-slice";
import { axiosInstance } from "../../utils/axios";


//checkout section
export const initiateCheckOutSession=(paymentData)=>async(dispatch)=>{
   try {
    dispatch(paymentAction.getCheckoutRequests())
     const response=await axiosInstance.post("/v1/rent/user/booking/create-order",paymentData)
    if(!response) throw Error("Faild to initiate checkout session");
    dispatch(paymentAction.getCheckoutSucces(response.data))

   }catch (error) {
    dispatch(paymentAction.getError(error.response?.data?.message || error.message))
   }
}

//payment varifier
export const verifyPayment=(verifyData)=>async(dispatch)=>{
    try {
        dispatch(paymentAction.getVerifyRequest())
        const response=await axiosInstance.post("/v1/rent/user/booking/verify-payment",verifyData)
        if(!response) throw new Error("Faild to verifyn payment")
    } catch (error) {
        dispatch(paymentAction.getError(error.response?.data?.message || error.message))
    }
}