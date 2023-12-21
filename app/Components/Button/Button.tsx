"use client";

import React from 'react'

interface Props {
    icons?: React.ReactNode;
    name?: string;
    background?: string;
    padding?: string;
    borderRad?: string;
    fw?: string;
    fs?: string;
    click?: () => void;
    type?: "submit" | "button" | "reset" | "undefined";
    border?: string;
}

function Button() {
  return (
    <div>Button</div>
  )
}

export default Button