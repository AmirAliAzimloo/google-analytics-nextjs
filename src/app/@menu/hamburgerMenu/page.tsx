"use client";

import Button from "@/components/Button";
import React from "react";

const HamburgerMenu = () => {
  return (
    <>
        <div className="absolute top-0 bottom-0 left-0 right-50">
        <Button
          title="Close HamburgerMenu"
          onClick={() => {
            window.location.assign("/")
          }}
        />
      </div>

    </>
  );
};

export default HamburgerMenu;
