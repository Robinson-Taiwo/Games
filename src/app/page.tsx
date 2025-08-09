import DialogInput from "@/components/DialogInput";
import MorrisDialog from "@/components/MorrisDialog";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import React from "react";

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-8 lg:w-screen bg-black">
      <h1 className="welcome text-center text-white xl:w-[50%] text-4xl font-bold ">
        Welcome to Taiwo Game&apos;s center
      </h1>

      <p className="text-base mb-12 mt-6 xl:w-[40%]  text-center text-white">
        Hey there, i got bored and decided to use typescript create some fun
        things with my time. i&apos;ll update this list with more games later on
        but for now enjoy thissss
      </p>

      <div className="lg:w-[40%] w-full px-6  ">
        <p className="text-white mb-8 text-left ">Please choose a game:</p>

        <div className="lg:w-[70%] w-full flex mx-auto  justify-center items-center py-8 rounded-lg h-fit text-white ">
          <div className="w-full  flex lg:w-[85%] text-sm gap-4 flex-col justify-center ">
            <div className="flex w-full h-fit items-center flex-row justify-between">
              <p>Tic Tac Toe</p>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-white hover:bg-gray-300 text-sm text-black ">
                    play
                  </Button>
                </DialogTrigger>
                <DialogInput />
              </Dialog>
            </div>

            <div className="flex w-full h-fit items-center flex-row justify-between">
              <p>Men&apos;s Morris</p>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-white hover:bg-gray-300 text-sm text-black ">
                    play
                  </Button>
                </DialogTrigger>
                <MorrisDialog/>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
