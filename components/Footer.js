import React from "react";
function Footer() {
  return (
    <div className="p-20 addedbg2 ourobjbg text-white font-light">
      <footer>
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-4">
          <div className="flex">
            <svg className="svg-icon" viewBox="0 0 20 20">
              <path
                fill="none"
                d="M9.875,0.625C4.697,0.625,0.5,4.822,0.5,10s4.197,9.375,9.375,9.375S19.25,15.178,19.25,10S15.053,0.625,9.875,0.625"
              ></path>
            </svg>
            <svg className="svg-icon " viewBox="0 0 20 20">
              <path
                fill="none"
                d="M9.875,0.625C4.697,0.625,0.5,4.822,0.5,10s4.197,9.375,9.375,9.375S19.25,15.178,19.25,10S15.053,0.625,9.875,0.625"
              ></path>
            </svg>
            <svg className="svg-icon" viewBox="0 0 20 20">
              <path
                fill="none"
                d="M3.015,4.779h1.164V3.615H3.015V4.779z M18.73,1.869H1.269c-0.322,0-0.582,0.26-0.582,0.582v15.133
								c0,0.322,0.26,0.582,0.582,0.582H18.73c0.321,0,0.582-0.26,0.582-0.582V2.451C19.312,2.129,19.052,1.869,18.73,1.869z
								 M18.148,16.42c0,0.322-0.261,0.582-0.582,0.582H2.433c-0.322,0-0.582-0.26-0.582-0.582V6.525h16.297V16.42z M18.148,5.361H1.851
								V3.615c0-0.322,0.26-0.582,0.582-0.582h15.133c0.321,0,0.582,0.26,0.582,0.582V5.361z M7.671,4.779h1.165V3.615H7.671V4.779z
								 M5.344,4.779h1.164V3.615H5.344V4.779z"
              ></path>
            </svg>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-2.5">Our Contact</h5>
            <p className="opacity-[70%]">ACM Student Chapter, Amritapuri,</p>
            <p className="opacity-[70%]"> Kollam, Kerala - 690546</p>
            <p >Help: (0411) 425 277 / 425</p>
            <p >Email: contact@aseam.acm.org</p>
          </div>
          <div>
            <h5 className="font-bold mb-2.5 text-xl">Quick Links</h5>

            <ul className="list-none mb-0">
              <li>
                <a href="/" className="opacity-[70%]">
                  About ACM
                </a>
              </li>
              <li>
                <a href="/JoinTeam" className="opacity-[70%]">
                  Join ACM
                </a>
              </li>
              <li>
                <a href="https://www.amrita.edu/campus/amritapuri/" className="opacity-[70%]">
                  Amrita Vishwa Vidyapeetham ASE,Amritapuri
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-2.5">Follow Us</h5>
            <div className="flex">
              <button className="transition ease-in-out hover:scale-105">
                <a href="https://www.facebook.com/acm.amrita">
                  <svg className="svg-icon" viewBox="0 0 20 20">
                    <path
                      fill="none"
                      d="M17.675,0.62H2.327c-0.942,0-1.706,0.764-1.706,1.706v15.348c0,0.941,0.764,1.705,1.706,1.705h15.348c0.941,0,1.705-0.764,1.705-1.705V2.326C19.38,1.384,18.616,0.62,17.675,0.62 M18.526,17.674c0,0.471-0.381,0.852-0.852,0.852H2.327c-0.471,0-0.853-0.381-0.853-0.852V2.326c0-0.471,0.382-0.853,0.853-0.853h15.348c0.471,0,0.852,0.382,0.852,0.853V17.674zM10.849,7.975c0-0.345,0.035-0.531,0.565-0.531h0.709V6.162h-1.134c-1.364,0-1.844,0.642-1.844,1.721v0.834h-0.85V10h0.85v3.838h1.701V10h1.134l0.151-1.283h-1.285L10.849,7.975z"
                    ></path>
                  </svg>
                </a>
              </button>
              <button className="transition ease-in-out hover:scale-105">
                <a href="https://www.instagram.com/acm.amrita/">
                  <svg className="svg-icon ml-5" viewBox="0 0 20 20">
                    <path
                      fill="none"
                      d="M14.528,6.716c-0.342,0.199-0.721,0.344-1.122,0.422c-0.322-0.338-0.78-0.549-1.288-0.549c-0.977,0-1.767,0.779-1.767,1.738c0,0.136,0.016,0.268,0.046,0.396C8.929,8.65,7.628,7.958,6.757,6.906C6.605,7.164,6.518,7.462,6.518,7.781c0,0.602,0.312,1.135,0.785,1.446C7.014,9.218,6.742,9.14,6.504,9.01c0,0.007,0,0.015,0,0.021c0,0.842,0.609,1.545,1.417,1.705c-0.148,0.039-0.304,0.061-0.465,0.061c-0.114,0-0.225-0.011-0.332-0.031C7.348,11.457,8,11.959,8.772,11.973c-0.605,0.467-1.366,0.744-2.193,0.744c-0.143,0-0.283-0.007-0.421-0.023c0.782,0.493,1.71,0.78,2.707,0.78c3.249,0,5.024-2.648,5.024-4.945c0-0.075-0.001-0.151-0.004-0.225c0.345-0.246,0.645-0.551,0.881-0.9c-0.317,0.138-0.656,0.231-1.014,0.274C14.116,7.462,14.396,7.122,14.528,6.716 M17.778,0.562H2.284c-0.951,0-1.722,0.771-1.722,1.722v15.494c0,0.951,0.771,1.722,1.722,1.722h15.494c0.951,0,1.722-0.771,1.722-1.722V2.284C19.5,1.333,18.729,0.562,17.778,0.562 M18.64,17.778c0,0.476-0.386,0.861-0.861,0.861H2.284c-0.475,0-0.861-0.386-0.861-0.861V2.284c0-0.475,0.386-0.861,0.861-0.861h15.494c0.476,0,0.861,0.386,0.861,0.861V17.778z"
                    ></path>
                  </svg>
                </a>
              </button>
              <button className="transition ease-in-out hover:scale-105 ">
                <a href="https://www.instagram.com/acm.amrita/">
                  <svg className="svg-icon ml-5" viewBox="0 0 20 20">
                    <path
                      fill="none"
                      d="M17.835,0.438H2.29c-0.954,0-1.727,0.773-1.727,1.727V17.71c0,0.954,0.773,1.728,1.727,1.728h15.545c0.954,0,1.728-0.773,1.728-1.728V2.165C19.562,1.211,18.789,0.438,17.835,0.438 M18.699,17.71c0,0.477-0.388,0.864-0.864,0.864H2.29c-0.477,0-0.863-0.388-0.863-0.864V2.165c0-0.477,0.387-0.863,0.863-0.863h15.545c0.477,0,0.864,0.387,0.864,0.863V17.71zM12.653,5.619H7.472c-0.954,0-1.728,0.773-1.728,1.728v5.182c0,0.954,0.773,1.728,1.728,1.728h5.182c0.954,0,1.728-0.773,1.728-1.728V7.347C14.381,6.393,13.607,5.619,12.653,5.619 M11.79,6.915h1.295V8.21H11.79V6.915z M10.062,8.21c0.954,0,1.728,0.773,1.728,1.727s-0.773,1.728-1.728,1.728c-0.954,0-1.727-0.773-1.727-1.728S9.109,8.21,10.062,8.21M13.518,12.528c0,0.478-0.388,0.863-0.864,0.863H7.472c-0.477,0-0.864-0.386-0.864-0.863V9.505h0.907C7.491,9.647,7.472,9.79,7.472,9.938c0,1.432,1.16,2.591,2.591,2.591c1.432,0,2.591-1.159,2.591-2.591c0-0.148-0.02-0.291-0.044-0.432h0.908V12.528z"
                    ></path>
                  </svg>
                </a>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
