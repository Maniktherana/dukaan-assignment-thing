import { links } from "@/components/dashboard/sidebar/links";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { HelpCircle, Menu, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <div className="p-3 flex flex-row justify-between items-center bg-white border-b border-b-stone-200">
      <div className="flex flex-row items-center gap-3">
        <div>
          <Sheet>
            <SheetTrigger className="md:hidden bg-[#1E2640] text-white rounded-md">
              <Button variant="sbGhost">
                <Menu size={20} strokeWidth={1.5} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side={"left"}
              className="bg-[#1E2640] w-[400px] text-white md:flex flex-col justify-between items-center align-middle p-3 border-none"
            >
              <SheetHeader>
                <SheetTitle>Dukaan</SheetTitle>
                <SheetDescription>
                  <div className="w-full">
                    <div className="flex flex-row justify-between items-center w-full ">
                      <div className="flex flex-row gap-3">
                        <img
                          src="/nishyan-logo.png"
                          alt="Nishyan Logo"
                          width={"39px"}
                          height={"39px"}
                          className="rounded-md"
                        />
                        <div className="flex flex-col justify-start items-start gap-1">
                          <p className="text-white text-sm">Nishyan</p>
                          <a
                            href="#"
                            className="underline text-xs text-white/80"
                          >
                            Visit Store
                          </a>
                        </div>
                      </div>
                      <ChevronDown
                        className="text-white"
                        size={20}
                        strokeWidth={1.5}
                      />
                    </div>
                    <ul className="w-full mt-5">
                      {links.map((link, idx) => {
                        return (
                          <li key={idx} className="my-2">
                            <a href="#">
                              <Button
                                variant="sbGhost"
                                className={`flex flex-row justify-start items-center gap-5 text-[24px] w-full ${
                                  link.isActive ? "bg-[#353C53] " : ""
                                }`}
                              >
                                {link.icon}
                                <p>{link.name}</p>
                              </Button>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="bg-[#353C53] flex flex-row justify-center items-center gap-4 w-fit px-4 py-2 rounded-lg">
                    <Button
                      variant={"ghost"}
                      className="bg-black/10 hover:bg-black/30"
                      size={"icon"}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="outline / wallet">
                          <path
                            id="wallet"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.0002 3.79727C2.42343 3.79727 1.8002 4.35527 1.8002 5.24727V18.7473C1.8002 19.6393 2.42343 20.1973 3.0002 20.1973H21.0002C21.577 20.1973 22.2002 19.6393 22.2002 18.7473V15.8473H17.0003C14.874 15.8473 13.1503 14.1236 13.1503 11.9973C13.1503 9.87097 14.874 8.14727 17.0003 8.14727H22.2002V5.24727C22.2002 4.35527 21.577 3.79727 21.0002 3.79727H3.0002ZM23.8002 8.14727V5.24727C23.8002 3.65398 22.6326 2.19727 21.0002 2.19727H3.0002C1.36782 2.19727 0.200195 3.65398 0.200195 5.24727V18.7473C0.200195 20.3405 1.36782 21.7973 3.0002 21.7973H21.0002C22.6326 21.7973 23.8002 20.3405 23.8002 18.7473V15.8473H23.8503V8.14727H23.8002ZM16.0002 11.9473C16.0002 11.4778 16.3808 11.0973 16.8502 11.0973H18.1502C18.6197 11.0973 19.0002 11.4778 19.0002 11.9473C19.0002 12.4167 18.6197 12.7973 18.1502 12.7973H16.8502C16.3808 12.7973 16.0002 12.4167 16.0002 11.9473ZM14.8503 11.9973C14.8503 10.8099 15.8129 9.84727 17.0003 9.84727H22.1503V14.1473H17.0003C15.8129 14.1473 14.8503 13.1847 14.8503 11.9973Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </Button>
                    <div className="flex flex-col">
                      <p className="text-white">Available Credits</p>
                      <p className="text-white text-left text-lg">222.10</p>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <p>Payments</p>
        <div className="flex flex-row items-center gap-1">
          <HelpCircle size="14px" className="text-muted-foreground" />
          <p className="text-muted-foreground text-xs">How it works</p>
        </div>
      </div>
      <Input
        className="rounded-lg border-none md:w-[400px] bg-[#f2f2f2]"
        placeholder="Search features, tutorials, etc."
      />
      <div className="flex gap-2">
        <Button variant="round" size="icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group">
              <g id="Group_2">
                <path
                  id="Vector"
                  d="M18.4211 0.0237288L1.11579 3.38234C0.463158 3.49896 0 4.1287 0 4.85174V12.5019C0 13.225 0.463158 13.8547 1.11579 13.9713L2.88421 14.3212C3.6 15.6273 4.94737 17.8897 6.75789 19.7323C7.36842 20.362 8.37895 19.8022 8.25263 18.8693C8.08421 17.6331 8.12632 16.3037 8.18947 15.3707L18.4211 17.3766C19.2421 17.5398 20 16.8401 20 15.9072V1.49312C20 0.560174 19.2421 -0.139537 18.4211 0.0237288ZM6.46316 9.6331C6.46316 9.88966 6.27368 10.0996 6.04211 10.0996H4.31579C4.08421 10.0996 3.89474 9.88966 3.89474 9.6331V7.72056C3.89474 7.464 4.08421 7.25408 4.31579 7.25408H6.04211C6.27368 7.25408 6.46316 7.464 6.46316 7.72056V9.6331ZM11.2842 9.6331C11.2842 9.88966 11.0947 10.0996 10.8632 10.0996H9.13684C8.90526 10.0996 8.71579 9.88966 8.71579 9.6331V7.72056C8.71579 7.464 8.90526 7.25408 9.13684 7.25408H10.8632C11.0947 7.25408 11.2842 7.464 11.2842 7.72056V9.6331ZM16.1263 9.6331C16.1263 9.88966 15.9368 10.0996 15.7053 10.0996H13.9789C13.7474 10.0996 13.5579 9.88966 13.5579 9.6331V7.72056C13.5579 7.464 13.7474 7.25408 13.9789 7.25408H15.6842C15.9158 7.25408 16.1053 7.464 16.1053 7.72056V9.6331H16.1263Z"
                  fill="#4D4D4D"
                />
              </g>
            </g>
          </svg>
        </Button>
        <Button variant="round" size="icon">
          <svg
            width="15"
            height="15"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id=".Triangle-Icon">
              <path
                id="Vector"
                d="M3.43025 6.23409L0.606918 2.3286C0.548707 2.24507 0.517907 2.15037 0.517581 2.05392C0.517255 1.95746 0.547415 1.86262 0.60506 1.77882C0.662705 1.69502 0.745826 1.62519 0.846154 1.57627C0.946481 1.52736 1.06052 1.50106 1.17692 1.5H6.82358C6.93998 1.50106 7.05402 1.52736 7.15435 1.57627C7.25468 1.62519 7.3378 1.69502 7.39544 1.77882C7.45309 1.86262 7.48325 1.95746 7.48292 2.05392C7.4826 2.15037 7.45179 2.24507 7.39358 2.3286L4.57025 6.23409C4.51083 6.31526 4.42716 6.38238 4.32732 6.42895C4.22747 6.47553 4.11483 6.5 4.00025 6.5C3.88567 6.5 3.77303 6.47553 3.67319 6.42895C3.57334 6.38238 3.48967 6.31526 3.43025 6.23409Z"
                fill="#4D4D4D"
              />
            </g>
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default Header;
