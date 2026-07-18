"use client"
import { authClient } from "@/lib/auth-client";
import {ArrowRightFromSquare, Gear, Persons} from "@gravity-ui/icons";
import {Avatar, Dropdown, Label} from "@heroui/react";
import { redirect } from "next/navigation";

export function Profile() {


  const { data: session,} = authClient.useSession() 
  
  const user = session?.user;

  // console.log(user);


  const handleLogout = async () => {
    await authClient.signOut();
    redirect('/login');
  };


  return (
    <Dropdown>
      <Dropdown.Trigger className="rounded-full">
        <Avatar>
          <Avatar.Image
            alt="Junior Garcia"
            src={user?.image}
            className="object-cover"
          />
          <Avatar.Fallback delayMs={600}>{user?.name.charAt(1)}</Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Popover>
        <div className="px-3 pt-3 pb-1">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <Avatar.Image
                alt="Jane"
              src={user?.image}
              className="object-cover"
              />
              <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
            </Avatar>
            <div className="flex flex-col gap-0">
              <p className=" text-black text-sm leading-5 font-medium">{user?.name}</p>
              <p className="text-xs leading-none text-muted">{user?.email}</p>
            </div>
          </div>
        </div>
        <Dropdown.Menu>
          <Dropdown.Item id="profile" textValue="Profile">
            <Label>Profile</Label>
          </Dropdown.Item>
          <Dropdown.Item id="logout" textValue="Logout" variant="danger">
           
             
                <button className=" w-full btn flex justify-between items-center" onClick={handleLogout}>
                  Log Out
                  
              <ArrowRightFromSquare className="size-3.5 text-danger" />
                  
                  </button>
              
            
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}