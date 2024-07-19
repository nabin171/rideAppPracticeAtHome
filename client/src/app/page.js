"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useFormik } from "formik";
import { IoNotificationsCircle } from "react-icons/io5";
import { TbSettingsFilled } from "react-icons/tb";
import { CardHeader, CardBody, Image, Input } from "@nextui-org/react";
import { Divider, Tabs, Tab, Card } from "@nextui-org/react";
import { IoBarChartSharp } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoWalletSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaLocationDot, FaClock } from "react-icons/fa6";
import { HiMiniCurrencyDollar } from "react-icons/hi2";

import { MdLocationSearching } from "react-icons/md";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Checkbox,
} from "@nextui-org/react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { useRouter } from "next/navigation";

import Link from "next/link";

const home = () => {
  const router = useRouter();
  return (
    <div className="container min-w-full h-[100%] ">
      <div className="navbar flex justify-between bg-grey-800 h-16 pl-5 ">
        <div className="flex gap-2">
          <img
            src="/mylogo.png"
            width={60}
            height={90}
            className="rounded m-1"
          ></img>
          <p className="font-bold text-3xl text-inherit pt-6">
            <Link href="#">ExpressRides</Link>
          </p>
        </div>
        <div className="flex pt-3">
          <Input
            type="Search"
            placeholder="Search"
            className="max-w-xs"
            id="Search"
            name="Search"
            width="45"
          />
        </div>

        <div className="flex gap-2 pt-3 pr-5">
          <div className="flex gap-2 ">
            <IoNotificationsCircle size={40} />
            <TbSettingsFilled size={40} />
          </div>
          <Button className="w-30 hover:bg-green-700" color="primary">
            <Link as={Button} href="/">
              Login
            </Link>
          </Button>
          <Button className="w-30 hover:bg-green-700" color="primary">
            <Link as={Button} href="/">
              Sign Up
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex pt-10">
        <div className="sidebar pl-5  w-[18.5rem]">
          <div className="rider-types flex justify-evenly gap-10">
            <div className="flex flex-col">
              <p className="font-bold">Bike </p>
              <p className="text-slate-600">5 Nearby</p>
              <p className="font-bold">$5</p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Standard </p>
              <p className="text-slate-600">5 Nearby</p>
              <p className="font-bold">$8</p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Premium </p>
              <p className="text-slate-600"> 5 Nearby</p>
              <p className="font-bold">$9</p>
            </div>
          </div>

          <div class="relative flex py-4 items-center">
            <div class="flex-grow border-t border-gray-500"></div>
            <div class="flex-grow border-t border-gray-600"></div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex gap-2">
              <p>
                <IoBarChartSharp size={20} />
              </p>
              <p>Report</p>
            </div>

            <div className="flex gap-2">
              <p>
                <RiMoneyRupeeCircleFill size={20} />
              </p>
              <p>Prices</p>
            </div>

            <div className="flex gap-2">
              <p>
                <IoWalletSharp size={20} />
              </p>
              <p>Wallets</p>
            </div>
            <div className="flex gap-2">
              <p>
                <IoPerson size={20} />
              </p>
              <p>Audience</p>
            </div>
          </div>
          <div className="flex flex-col pt-10 pl-5 items-center gap-5">
            <FaStar size={60} className="" color="gold" />
            <p className="text-2xl">Go Premium Now!</p>
            <p className=" ">
              Let's explore the full report of your Transport Service
            </p>
            <Button className="w-30 hover:bg-green-700" color="primary">
              <Link as={Button} href="/">
                Upgrade Now
              </Link>
            </Button>
          </div>
        </div>
        <div className=" pl-3">
          <img
            src="/map.png"
            width={835}
            height={1000}
            className="rounded m-1"
          ></img>
        </div>
        <div className="flex flex-col gap-1 pl-2">
          <div className="flex gap-8 ">
            <div className="flex gap-2">
              <FaLocationDot size={20} />
              <p>2.6km</p>
            </div>
            <div className="flex gap-2">
              <FaClock size={20} />
              <p>10.m</p>
            </div>
            <div className="flex gap-2">
              <HiMiniCurrencyDollar size={20} />
              <p>160</p>
            </div>
          </div>
          <div className="rightbar flex flex-col">
            <div className="flex gap-2">
              <div className="circle flex flex-col items-center justify-center">
                <div className="bg-blue-600 h-4 w-4 rounded-full flex items-center justify-center">
                  <div className="rounded-full bg-white h-2 w-2 items-center"></div>
                </div>
                <div className="line h-20  bg-slate-500 w-[1px] "></div>

                <div className="bg-blue-600 h-4 w-4 rounded-full flex items-center justify-center">
                  <div className="rounded-full bg-white h-2 w-2 items-center"></div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400 text-sm ">Pickup Point</p>
                  <p className="font-bold "> Pickup Point</p>
                  <div className="flex justify-center items-center">
                    <div className="line border-dashed border-1 h-[1px] bg-slate-500 w-[225px] pl-4"></div>
                    <p>
                      <MdLocationSearching size={20} />
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm ">Pickup Off</p>
                    <p className="font-bold "> Where you want to go? </p>
                  </div>
                  <div className="flex justify-between">
                    <Button className="bg-slate-100">
                      <Link as={Button} href="/">
                        Home
                      </Link>
                    </Button>
                    <Button className="bg-red-500 ">
                      <Link as={Button} href="/">
                        Office
                      </Link>
                    </Button>
                    <Button className="bg-slate-100">
                      <Link as={Button} href="/">
                        Others
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <p className="font-bold "> Payment Method </p>
              <div className="flex">
                <img
                  src="/pic1.png"
                  width={60}
                  height={20}
                  className="rounded m-1"
                ></img>
                <img
                  src="/pic2.png"
                  width={60}
                  height={10}
                  className="rounded m-1"
                ></img>
                <img
                  src="/3.png"
                  width={60}
                  height={30}
                  className="rounded m-1"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
