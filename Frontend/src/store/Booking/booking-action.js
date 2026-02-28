import { axiosInstance } from "../../utils/axios";
import { setBookingDetails,setBookings } from "./booking-slice";

export const fetchBookingDetails=(bookingId)=>async(dispatch)=>{
    try {
        const response=await axiosInstance.get(`/v1/rent/user/booking/${bookingId}`)
        dispatch(setBookingDetails(response.data.data))
    } catch (error) {
        console.error("Error fetching in booking details")
    }
}

export const fetchBookings=()=>async(dispatch)=>{
   try {
     const response=await axiosInstance.get("/v1/rent/user/booking")
     dispatch(setBookings(response.data.data.bookings))
   } catch (error) {

    console.error("Error fetching user booking details",error)    
   }
}