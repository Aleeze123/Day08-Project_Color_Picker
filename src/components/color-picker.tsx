"use client";

import { useState, ChangeEvent } from "react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const predefinedColors = [
  "#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#9B59B6", 
  "#E67E22", "#2ECC71", "#3498DB", "#FF5733", "#000000",
  "#8E44AD", "#1ABC9C"
];

export default function ColorPicker() {
  const [color, setColor] = useState<string>("#000000");

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setColor(e.target.value);
  };

  const handlePredefinedColorChange = (newColor: string): void => {
    setColor(newColor);
  };

  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(color);
    alert("Copied Successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-md mx-auto p-8 shadow-lg rounded-lg">
        <div className="text-center mb-6">
          <CardTitle className="text-3xl font-bold">Color Picker</CardTitle>
          <CardDescription className="text-gray-700 dark:text-gray-300">
            Select a color and copy the hex and RGB values.
          </CardDescription>
        </div>
        <div className="grid gap-6">
          <div
            className="w-full h-48 rounded-lg border-4 border-gray-200 dark:border-gray-800"
            style={{ backgroundColor: color }}
          />
          <div className="text-center">
            <div className="text-3xl font-semibold">{color}</div>
            <div className="text-gray-500 dark:text-gray-400">
              RGB: {parseInt(color.slice(1, 3), 16)}, {parseInt(color.slice(3, 5), 16)}, {parseInt(color.slice(5, 7), 16)}
            </div>
            <Button
              onClick={copyToClipboard}
              variant="default"
              className="mt-4 w-full"
            >
              Copy to Clipboard
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {predefinedColors.map((preColor) => (
              <div
                key={preColor}
                className="w-full h-16 rounded-md cursor-pointer border-2 border-gray-200 dark:border-gray-800"
                style={{ backgroundColor: preColor }}
                onClick={() => handlePredefinedColorChange(preColor)}
              />
            ))}
          </div>
          <Input
            type="color"
            value={color}
            onChange={handleColorChange}
            className="w-full h-16 p-0 border-0 rounded-md cursor-pointer transition duration-200 ease-in-out hover:opacity-75"
          />
        </div>
      </Card>
    </div>
  );
}
