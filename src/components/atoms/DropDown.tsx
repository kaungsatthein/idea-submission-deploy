"use client";
import { Dropdown, MenuProps } from "antd";
import { ReactNode } from "react";

interface DropDownProps {
  menuItems: MenuProps["items"];
  onMenuClick: (key: string) => void;
  children: ReactNode;
  placement?:
    | "bottomLeft"
    | "bottomRight"
    | "topLeft"
    | "topRight"
    | "bottom"
    | "top";
  trigger?: ("click" | "hover" | "contextMenu")[];
}

const DropDown = ({
  menuItems,
  onMenuClick,
  children,
  placement = "bottom",
  trigger = ["click"],
}: DropDownProps) => {
  return (
    <Dropdown
      menu={{
        items: menuItems,
        onClick: ({ key }) => onMenuClick(key),
        style: { minWidth: "200px" },
      }}
      placement={placement}
      trigger={trigger}
      arrow
    >
      <div className="inline-flex">{children}</div>
    </Dropdown>
  );
};

export default DropDown;
