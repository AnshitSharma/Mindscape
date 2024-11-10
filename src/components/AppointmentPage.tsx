import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import * as z from "zod";
import { toast } from "sonner";

// Define interfaces and types
interface Doctor {
  id: string;
  name: string;
  specialty: string;
}

interface Appointment {
  id: number;
  title: string;
  date: string;
  timeSlot: string;
  doctorId: string;
  doctorName: string;
  isStarred: boolean;
  userName: string;
  userEmail: string;
}

const doctors: Doctor[] = [
  { id: "1", name: "Dr. Sarah Smith", specialty: "General Physician" },
  { id: "2", name: "Dr. John Doe", specialty: "Cardiologist" },
  { id: "3", name: "Dr. Emily Johnson", specialty: "Pediatrician" },
  { id: "4", name: "Dr. Michael Chen", specialty: "Dermatologist" },
  { id: "5", name: "Dr. Lisa Wilson", specialty: "Neurologist" },
];

const timeSlots: string[] = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "02:00 PM",
  "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM",
];

// Updated form schema to include user details
const formSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters."),
  date: z.date({
    required_error: "Please select a date.",
  }),
  timeSlot: z.string({
    required_error: "Please select a time slot.",
  }),
  doctorId: z.string({
    required_error: "Please select a doctor.",
  }),
  userName: z.string().min(2, "Name is required"),
  userEmail: z.string().email("Invalid email address"),
});

type FormValues = z.infer<typeof formSchema>;

const AppointmentPage: React.FC = () => {

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signin");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      date: undefined,
      timeSlot: "",
      doctorId: "",
      userName: "",
      userEmail: "",
    },
  });

  const onSubmit = async (data: FormValues): Promise<void> => {
    const selectedDoctor = doctors.find((doctor) => doctor.id === data.doctorId);
    
    const appointmentData: Appointment = {
      id: Date.now(),
      title: data.title,
      date: data.date.toISOString(),
      timeSlot: data.timeSlot,
      doctorId: data.doctorId,
      doctorName: selectedDoctor?.name || "",
      isStarred: false,
      userName: data.userName,
      userEmail: data.userEmail,
    };

    try {
      setLoading(true);

      // Create message for Web3Forms
      const messageContent = `
        New Appointment Booking:
        Patient Name: ${data.userName}
        Appointment Title: ${data.title}
        Date: ${data.date.toLocaleDateString()}
        Time: ${data.timeSlot}
        Doctor: ${selectedDoctor?.name} (${selectedDoctor?.specialty})
      `;

      // Send to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "208927e5-a309-4ef7-8b5b-1c4cde85bc5e", 
          name: data.userName,
          email: data.userEmail,
          message: messageContent,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        toast.success(  "Appointment booked successfully!");
        setAppointments((prev) => [...prev, appointmentData]);
      } else {
        throw new Error("Failed to submit appointment");
      }
    } catch (error) {
      console.error("Error creating appointment:", error);
      toast.error("Failed to book appointment. Please try again.");
      } finally {
      setLoading(false);
    }
  };

  const toggleStar = (appointmentId: number): void => {
    setAppointments(appointments.map(app => {
      if (app.id === appointmentId) {
        return { ...app, isStarred: !app.isStarred };
      }
      return app;
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 mt-28">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Add Appointment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="userName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="userEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Appointment title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="doctorId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Doctor</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a doctor" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {doctors.map((doctor) => (
                              <SelectItem key={doctor.id} value={doctor.id}>
                                {doctor.name} - {doctor.specialty}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date</FormLabel>
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date: Date) =>
                            date < new Date() || date < new Date("1900-01-01")
                          }
                          className="rounded-md border"
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="timeSlot"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Time Slot</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a time slot" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Booking..." : "Add Appointment"}
                  </Button>
                </form>
              </Form>
            </div>
            
            <div className="flex items-center justify-center">
              <img
                src="/src/assets/doctorApp.png"
                alt="Appointment illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Appointments</CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setAppointments(appointments.filter(app => app.isStarred))}
          >
            <Star className="w-4 h-4 mr-2" />
            Starred
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div>
                  <h3 className="font-medium">{appointment.title}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(appointment.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    Doctor: {appointment.doctorName}
                  </p>
                  <p className="text-sm text-gray-500">
                    Patient: {appointment.userName}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleStar(appointment.id)}
                >
                  <Star
                    className={`w-4 h-4 ${
                      appointment.isStarred ? "fill-yellow-400 text-yellow-400" : ""
                    }`}
                  />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppointmentPage;