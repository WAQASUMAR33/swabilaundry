import React from "react";
import Businesscomponent from "./businessprop";

export default function Ourservices(){
    return(
        <>
        <div className="w-full h-full justify-center">
            <h1 className="text-6xl text-center font-bold">Our Services</h1>
            <Businesscomponent
                image="/propimg2.jpg"
                name="Professional Laundry Services"
                label="Service"
                description="Swabi Laundry offers professional laundry and dry cleaning services tailored to meet your needs. Whether it's everyday clothing or delicate fabrics, we ensure the highest quality care using eco-friendly detergents."
                align="left"
            />
            <Businesscomponent
                image="/propimg4.png"
                name="Eco-Friendly Practices"
                label="Service"
                description="At Swabi Laundry, we are committed to environmental sustainability. We employ eco-friendly practices throughout our operations, from using energy-efficient appliances to reducing water consumption."
                align="right"
            />
        </div>
        </>
    )
}
