import React from "react"
import { Outlet } from "react-router";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import TopRatedProviders from "../component/TopRatedProviders ";
import HowItWorks from "../component/HowItWorks ";
import StudentReviews from "../component/StudentReviews ";
import PromotionalOffer from "../component/PromotionalOffer";
import Newsletter from "../component/Newsletter";



const HomeLayouts = () => {
    return (
        <div>
        <Navbar></Navbar>
           
        <Header>    
            <Header>
            </Header>
               
        </Header>

        <main>
            <Outlet>
              
            </Outlet>
    
            <TopRatedProviders></TopRatedProviders>
            <PromotionalOffer></PromotionalOffer>
            <HowItWorks></HowItWorks>
            <StudentReviews></StudentReviews>
            <Newsletter></Newsletter>
        </main>

       <Footer></Footer>

        </div>
    )
}

export default HomeLayouts;