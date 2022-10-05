import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';
import React from 'react'
import styled from "styled-components"
import Section from './Section';
function Home() {
  return (
    <Container>
        <Section
        title= "Model S"
        description= "Order Online for Touchless Delivery"
        backgroundImg= "model-s.jpg"
        leftBtnText= "Custom order"
        rightBtnText= "Existing inventory"
        />
        <Section        
        title= "Model Y"
        description= "Order Online for Touchless Delivery"
        backgroundImg= "model-y.jpg"
        leftBtnText= "Custom order"
        rightBtnText= "Existing inventory"
        />
        <Section
        title= "Model 3"
        description= "Order Online for Touchless Delivery"
        backgroundImg= "model-3.jpg"
        leftBtnText= "Custom order"
        rightBtnText= "Existing inventory"
        />
        <Section
        title= "Model X"
        description= "Order Online for Touchless Delivery"
        backgroundImg= "model-x.jpg"
        leftBtnText= "Custom order"
        rightBtnText= "Existing inventory"
        />
        <Section
        title= "Solar Panels"
        description= "Lowest Cost Solar Panels in America"
        backgroundImg= "solar-panel.jpg"
        leftBtnText= "Order now"
        rightBtnText= "Learn more"
        />
        <Section
        title= "Solar Roof"
        description= "Produce Clean Energy From You Roof"
        backgroundImg= "solar-roof.jpg"
        leftBtnText= "Order now"
        rightBtnText= "Learn more"
        />        
        <Section
        title= "Accesories"
        description= ""
        backgroundImg= "accessories.jpg"
        leftBtnText= "Shop now"
        rightBtnText= ""
        />
       <p>Cjvesla © 2021  | Privacy & Legal | Vehicle Recalls | Contact | Careers | News | Engage | Locations</p>
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
