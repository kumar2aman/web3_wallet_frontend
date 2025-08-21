import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Plus } from "lucide-react";
import { useAccount } from "../context/accountProvider";
import {  useState } from "react";


export function CreateAccount() {

const [userAccount, setUserAccount] = useState('')
const user = useAccount()

  
const accountHandler = () => {
 
 if (!userAccount) return;
  user?.setAccount( userAccount);
  setUserAccount(' ')
};
 

  return (

    <Dialog>
      <form>
        <DialogTrigger asChild>
          <div className="p-3 rounded-xl bg-transparent hover:bg-white group cursor-pointer transition-colors duration-200">
            <Plus className="text-white group-hover:text-black size-6" />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] border-blue-400 border-2">
          <DialogHeader>
            <DialogTitle className="text-white font-ubuntu text-center">
              Create New Account
            </DialogTitle>
            <DialogDescription className="text-white font-ubuntu text-center">
              Click create when you&apos;re done.{user?.account}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label className="text-white font-ubuntu" htmlFor="name-1">
                Name
              </Label>
              <Input
                className="text-white font-ubuntu border-blue-600 w-full h-10 px-2 border-2 rounded-xl bg-black/40 "
                type="text"
                onChange={(e)=> setUserAccount(e.target.value) }
              />
            </div>
          </div>
          <DialogFooter className="mt-6">
            <DialogClose asChild>
              <Button
                className="text-white border-red-600 cursor-pointer"
                variant="outline"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button className="text-white cursor-pointer " type="submit" onClick={accountHandler}>
              Create
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
