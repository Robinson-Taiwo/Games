"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import x from "@/components/assets/x.svg";
import o from "@/components/assets/o.svg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = (board: (null | "x" | "o")[]) => {
  for (const [a, b, c] of winningCombinations) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState<"x" | "o" | null>(null);
  const [opponentName, setOpponentName] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [playerXName, setPlayerXName] = useState("");
  const [playerOName, setPlayerOName] = useState("");
  const [playerChoice, setPlayerChoice] = useState("");
  const [showDialog, setShowDialog] = useState(true);
  const [firstPlayer, setFirstPlayer] = useState("");

  useEffect(() => {
    const SplayerName = localStorage.getItem("playerName");
    setPlayerName(SplayerName || "");

    const storedName = localStorage.getItem("playerName");
    if (storedName) setPlayerName(storedName);
  }, []);

  const handleStartGame = () => {
    if (!opponentName || !playerChoice) return;

    localStorage.setItem("opponentName", opponentName);

    if (playerChoice === "x") {
      setPlayerXName(playerName);
      setPlayerOName(opponentName);
    } else {
      setPlayerXName(opponentName);
      setPlayerOName(playerName);
    }
    setShowDialog(false);
  };

  const toggle = (index: number) => {
    if (lock || board[index]) return;
    const newBoard = [...board];
    const currentPlayer =
      count % 2 === 0 ? firstPlayer : firstPlayer === "x" ? "o" : "x";
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCount(count + 1);
    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result);
      setLock(true);
    } else if (!newBoard.includes(null)) {
      // Board is full, and no winner
      setLock(true); // lock the game for tie
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCount(0);
    setWinner(null);
    setLock(false);
  };

  const getWinnerName = () => {
    if (winner === "x") return playerXName;
    if (winner === "o") return playerOName;
    return null;
  };

  return (
    <div className="">
      <s className="font-bold text-white  w-full flex justify-center text-3xl">
        Tic Tac Toe
      </s>
      <h1 className="font-bold text-white mb-8 w-full flex justify-center text-3xl">
        X and O
      </h1>

      <h2 className="text-white lg:text-xl text-sm font-bold mb-4">
        You&apos;re playing with: {opponentName || "Loading..."}
      </h2>

      <p></p>

      <Dialog open={showDialog}>
        <DialogHeader>
          <DialogTitle className="text-white"></DialogTitle>
          <DialogDescription className="text-white"></DialogDescription>
        </DialogHeader>
        <DialogContent className="bg-neutral-950 w-[80%] lg:w-full text-white">
          <p className="mb-0">Your opponent&apos;s name:</p>
          <Input
            type="text"
            value={opponentName}
            onChange={(e) => setOpponentName(e.target.value)}
            className="mb-4"
            placeholder="Opponent's Name"
          />
          <p className="mb-0 text-sm">Who do you want to play as?</p>
          <div className="flex gap-4 mb-0">
            <Button
              className={
                playerChoice === "x" ? "text-black bg-white" : "outline"
              }
              onClick={() => setPlayerChoice("x")}
            >
              X
            </Button>
            <Button
              className={
                playerChoice === "o" ? "text-black bg-white" : "outline"
              }
              onClick={() => setPlayerChoice("o")}
            >
              O
            </Button>
          </div>
          <p className="mb-0 text-sm">Who should go first?</p>
          <Button
            className={firstPlayer === "x" ? "text-black bg-white" : "outline"}
            onClick={() => setFirstPlayer("x")}
          >
            X Starts
          </Button>
          <Button
            className={firstPlayer === "o" ? "text-black bg-white" : "outline"}
            onClick={() => setFirstPlayer("o")}
          >
            O Starts
          </Button>

          <Button className="bg-white text-black" onClick={handleStartGame}>
            Start Game
          </Button>
        </DialogContent>
      </Dialog>

      {winner && (
        <h2 className="text-center text-2xl text-green-500 font-semibold mb-4">
          🎉 {getWinnerName()} wins!
        </h2>
      )}

      {!winner && lock && (
        <h2 className="text-center text-2xl text-blue-600 font-semibold mb-4">
          🥺 It&apos;s a tie
        </h2>
      )}

      <div className="flex items-center justify-center w-full">
        <div className="grid lg:w-full w-[77%] grid-cols-3">
          {board.map((val, index) => (
            <div
              key={index}
              className="lg:h-32 lg:w-32 h-20 w-20 bg-white rounded-lg border-black border-1 lg:border-4 flex items-center justify-center cursor-pointer"
              onClick={() => toggle(index)}
            >
              {val === "x" && <Image src={x} alt="x" width={40} height={40} />}
              {val === "o" && <Image src={o} alt="o" width={40} height={40} />}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row mt-8 justify-between w-full px-8 space-x-7">
        <Button onClick={resetGame}>Reset</Button>
        <Button disabled>Start</Button>
        <Button onClick={() => setLock(!lock)}>
          {lock ? "Play" : "Pause"}
        </Button>
      </div>
    </div>
  );
};

export default TicTacToe;
