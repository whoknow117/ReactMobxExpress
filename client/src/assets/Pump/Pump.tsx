import React from 'react'


export type PumpType = {

}

const Pump:React.FC<PumpType> = () => {
    const electricStyles = {
        width: '34px',
    }
    return <div style={electricStyles}>

        <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><path d="M29,17.81V14a2,2,0,0,0-2-2,68,68,0,0,0-9.38.61,17.7,17.7,0,0,1-2-3.64C14.15,5.58,11.89,4,8.5,4a6.5,6.5,0,0,0-5.67,9.68l-1,.68,2,3.17a8.77,8.77,0,0,0-3.8,7V26a2,2,0,0,0,2,2H4.09a1.49,1.49,0,0,0,2.82,0H22.69A6,6,0,1,0,29,17.81ZM3,10.5A5.51,5.51,0,0,1,8.5,5c3,0,4.89,1.35,6.19,4.36a20.1,20.1,0,0,0,1.82,3.42L15.42,13a20.38,20.38,0,0,1-1.6-3.09l-0.05-.12C12.64,7.12,11.08,6,8.55,6a4.49,4.49,0,0,0-4,6.55l-0.86.57A5.48,5.48,0,0,1,3,10.5Zm5.68,4.34L6.45,11.27,5.36,12a3.51,3.51,0,0,1,3.2-5c2.14,0,3.31.85,4.3,3.15l0,0.12a22.15,22.15,0,0,0,1.47,2.91A35.19,35.19,0,0,0,8.68,14.84Zm-5.5-.19,3-2,1.6,2.56a19.92,19.92,0,0,0-3.13,1.71ZM27,13a1,1,0,0,1,1,1h0c-8.69.14-14.78,3.74-19.69,6.66C5.43,22.39,3.1,23.76,1,24,1.55,17.39,11.85,13,27,13ZM1,26V25c2.33-.19,4.78-1.64,7.82-3.45C13.62,18.68,19.58,15.15,28,15v2.34A6,6,0,0,0,21.54,27H2A1,1,0,0,1,1,26Zm25,2a5,5,0,1,1,5-5A5,5,0,0,1,26,28Z"/></svg>

    </div>
}

export default Pump;