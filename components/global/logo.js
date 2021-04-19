export default function Logo({ className, color}) {
    let svgColor = "url(#a)";

    if (color != "gradient" && color != undefined) {
        svgColor = color;
    }

    return (
        <svg className={className} width="1131.371" height="1131.371" viewBox="0 0 1131.371 1131.371">
            <defs>
                <linearGradient id="a" x1="0.846" y1="-0.014" x2="1.507" y2="0.348" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#10b981"/><stop offset="1" stopColor="#14b8a6"/>
                </linearGradient>
            </defs>
            <g transform="translate(237.588 -520.43) rotate(45)">
                <path d="M-524.706,914.255c-6.337-3.772-51.6-29.741-96.749-29.741-44.8,0-89.493,25.577-96.328,29.652a99.525,99.525,0,0,1-53.532,15.52,100,100,0,0,1-100-100,100,100,0,0,1,100-100,99.521,99.521,0,0,1,53.571,15.545c6.982,4.136,51.831,29.632,96.565,29.632,44.683,0,89.249-25.438,96.27-29.618a99.516,99.516,0,0,1,53.594-15.559,100,100,0,0,1,100,100,100,100,0,0,1-100,100A99.534,99.534,0,0,1-524.706,914.255Zm-646.608-84.569a100,100,0,0,1,100-100,100,100,0,0,1,100,100,100,100,0,0,1-100,100A100,100,0,0,1-1171.314,829.686ZM-524.681,614.27c-6.243-3.719-51.568-29.756-96.774-29.756-44.855,0-89.594,25.635-96.351,29.666a99.528,99.528,0,0,1-53.509,15.505A99.529,99.529,0,0,1-824.68,614.27c-6.243-3.719-51.568-29.756-96.774-29.756-44.891,0-89.665,25.676-96.366,29.675a99.533,99.533,0,0,1-53.494,15.5,100,100,0,0,1-100-100,100,100,0,0,1,100-100,99.528,99.528,0,0,1,53.565,15.541c6.954,4.121,51.821,29.637,96.573,29.637,44.668,0,89.22-25.422,96.263-29.614a99.542,99.542,0,0,1,53.6-15.563,99.545,99.545,0,0,1,53.577,15.548c7,4.146,51.837,29.629,96.559,29.629,44.668,0,89.22-25.422,96.263-29.614a99.542,99.542,0,0,1,53.6-15.563,100,100,0,0,1,100,100,100,100,0,0,1-100,100A99.529,99.529,0,0,1-524.681,614.27Zm-46.634-384.585a100,100,0,0,1,100-100,100,100,0,0,1,100,100,100,100,0,0,1-100,100A100,100,0,0,1-571.315,229.685ZM-824.68,314.27c-6.243-3.719-51.568-29.756-96.774-29.756-44.87,0-89.624,25.652-96.358,29.67a99.533,99.533,0,0,1-53.5,15.5,100,100,0,0,1-100-100,100,100,0,0,1,100-100,99.523,99.523,0,0,1,53.571,15.545c6.982,4.136,51.831,29.632,96.565,29.632,44.668,0,89.22-25.422,96.263-29.614a99.542,99.542,0,0,1,53.6-15.563,100,100,0,0,1,100,100,100,100,0,0,1-100,100A99.529,99.529,0,0,1-824.68,314.27Z" transform="translate(1771.315 6.315)" fill={svgColor}/>
            </g>
        </svg>
    )
}