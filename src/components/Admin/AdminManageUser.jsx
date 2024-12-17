import { SignUp, getUsers } from "@/services/Api";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Plus, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const AdminUsers = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await SignUp(formData.name, formData.email, formData.password, formData.role);
      console.log('User registered successfully:', response.data);
      setOpen(false);
      
      const updatedUsers = await getUsers();
      setUsers(updatedUsers.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className='ml-64 mt-16 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center p-3'>
          <CardTitle className='text-lg'>Users</CardTitle>
          <Button onClick={() => setOpen(!open)} size="sm">
            <Plus className='h-5 w-5 mr-2' /> Add
          </Button>
        </CardHeader>
        <CardContent className='p-3'>
          <div className='overflow-x-auto'>
            <Table className="min-w-[100px] text-base">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] p-3">Name</TableHead>
                  <TableHead className="w-[140px] p-3">Email</TableHead>
                  <TableHead className="w-[120px] p-3">Role</TableHead>
                  <TableHead className="w-[130px] p-3">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="p-3">{user.name}</TableCell>
                    <TableCell className="p-3">{user.email}</TableCell>
                    <TableCell className="p-3">{user.role}</TableCell>
                    <TableCell className="p-3">
                      <span className='flex gap-3'>
                        <Edit className='h-7 w-7 p-1 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-background rounded-sm' />
                        <TrashIcon className='h-7 w-7 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-sm' />
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className='p-4'>
          <SheetHeader>
            <SheetTitle className='text-sm'>Add User</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-2">
              <Label htmlFor="name" className="text-right text-sm">Name</Label>
              <Input id="name" className="text-sm" value={formData.name} onChange={handleInputChange} />
            </div>
            <div className="flex flex-col items-start gap-2">
              <Label htmlFor="email" className="text-right text-sm">Email</Label>
              <Input id="email" className="text-sm" value={formData.email} onChange={handleInputChange} />
            </div>
            <div className="flex flex-col items-start gap-2">
              <Label htmlFor="password" className="text-right text-sm">Password</Label>
              <Input id="password" className="text-sm" value={formData.password} onChange={handleInputChange} />
            </div>
            <div className="flex flex-col items-start gap-2">
              <Label htmlFor="role" className="text-right text-sm">Role</Label>
              <Input id="role" className="text-sm" value={formData.role} onChange={handleInputChange} />
            </div>
          </div>
          <SheetFooter className='flex flex-col flex-1'>
            <Button className='w-1/2 outline bg-red-400/90 hover:bg-red-400 text-sm' onClick={() => setOpen(!open)}>Cancel</Button>
            <Button type="submit" className='w-1/2 text-sm' onClick={handleSubmit}>Add</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminUsers;
