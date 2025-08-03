import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";

export function AddTaskModule() {
  const form = useForm();

  const onSubmit =  (data :any) =>{
  console.log(data)

  }

  return (
    <Dialog>
  
        <DialogTrigger asChild>
          <Button variant="outline">Add-Task</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
          </DialogHeader>

          <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
              control={form.control}
              name="title"
              render={({field }) => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <input {...field} type="text" />
                  </FormControl>
                </FormItem>
              )}
            />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
          </form>
          </Form>
        </DialogContent>
  
    </Dialog>
  );
}
