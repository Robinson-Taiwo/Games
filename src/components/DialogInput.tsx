"use client";
import React, { useState } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const DialogInput = () => {
  const [name, setName] = useState<string>("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    console.log("Updated name is:", value); // this will now show the correct value
  };

  const onSubmit = () => {
    if (!name.trim()) return; // Don't allow empty names

    // Store in localStorage (or sessionStorage)
    localStorage.setItem("playerName", name);
    router.push("/tic-tac-toe");
  };

  return (
    <DialogContent className="sm:max-w-md bg-neutral-900">
      <DialogHeader>
        <DialogTitle className="text-white">Enter your name</DialogTitle>
        <DialogDescription>
          Please enter your name to start playing.
        </DialogDescription>
      </DialogHeader>

      <div className="flex items-center gap-2">
        <div className="grid flex-1 gap-2">
          <Label htmlFor="player-name" className="sr-only  ">
            Player Name
          </Label>
          <Input
            id="player-name"
            type="text"
            onChange={handleChange}
            value={name}
            required
            className="text-white"
            placeholder="Your Name"
          />
        </div>
      </div>

      <DialogFooter className="sm:justify-start mt-4 ">
        <div className="flex flex-col  ">

        <Button onClick={onSubmit} type="button" variant="secondary">
          Go to game
        </Button>

        <p className=" text-center text-sm mt-8 text-white">
          please note that your detals are not being saved to a a proper
          database yet
        </p>
        </div>
      </DialogFooter>
    </DialogContent>
  );
};

export default DialogInput;
