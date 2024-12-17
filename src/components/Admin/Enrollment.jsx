import React, { useEffect, useState } from 'react';
import { getusercourse } from "@/services/Api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Enrollment = () => {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const response = await getusercourse();
        setEnrollments(response.data);
      } catch (error) {
        console.error('Error fetching enrollments:', error);
      }
    };

    fetchEnrollments();
  }, []);

  return (
    <div className='ml-64 mt-16 p-4 bg-gray-50 min-h-screen'>
      <Card className='shadow-lg rounded-lg'>
        <CardHeader className='flex justify-between items-center p-6 border-b border-gray-200'>
          <CardTitle className='text-2xl font-bold text-blue-700'>Enrollments</CardTitle>
        </CardHeader>
        <CardContent className='p-8'>
          <div className='overflow-x-auto'>
            <Table className="min-w-full bg-white">
              <TableHeader className=" text-white">
                <TableRow>
                  <TableHead className="p-4 text-left font-semibold">Course Name</TableHead>
                  <TableHead className="p-4 text-left font-semibold">Student Name</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {enrollments.length > 0 ? (
                  enrollments.map((enrollment, index) => (
                    <TableRow key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <TableCell className="p-4">{enrollment.title}</TableCell>
                      <TableCell className="p-4">{enrollment.name}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan="2" className="p-4 text-center text-gray-500">
                      No enrollments found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Enrollment;
