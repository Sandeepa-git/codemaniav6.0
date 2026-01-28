"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
    ArrowLeft,
    User,
    Users,
    ShieldCheck,
    Loader2
} from "lucide-react";

import { Button } from "@/components/ui/button";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import Wrapper from "@/components/global/wrapper";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Firebase imports
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// Schemas
const memberSchema = z.object({
    fullName: z.string().min(2, "Full name is required"),
    nicPassport: z.string().min(5, "NIC/Passport is required"),
    uniRegNo: z.string().min(2, "University registration number is required"),
    degree: z.string().min(2, "Degree programme is required"),
    academicYear: z.string().min(1, "Academic year is required"),
    contact: z.string().min(10, "Valid contact number is required"),
    email: z.string().email("Invalid email address"),
});

const formSchema = z.object({
    teamName: z.string().min(2, "Team name is required"),
    university: z.string().min(2, "University is required"),
    otherUniversity: z.string().optional(),
    member1: memberSchema,
    member2: memberSchema,
    member3: memberSchema,
    agree: z.boolean().refine(val => val === true, "You must agree to the declaration"),
});

type FormValues = z.infer<typeof formSchema>;

// Constants
const UNIVERSITIES = [
    // UGC Public Universities
    "University of Colombo",
    "University of Peradeniya",
    "University of Sri Jayewardenepura",
    "University of Kelaniya",
    "University of Moratuwa",
    "University of Jaffna",
    "University of Ruhuna",
    "Eastern University, Sri Lanka",
    "South Eastern University of Sri Lanka",
    "Rajarata University of Sri Lanka",
    "Sabaragamuwa University of Sri Lanka",
    "Wayamba University of Sri Lanka",
    "Uva Wellassa University",
    "University of the Visual & Performing Arts",
    "University of Vavuniya",
    "University of Vocational Technology (UoVT)",
    "Open University of Sri Lanka (OUSL)",

    // Other Public/Statutory Universities
    "General Sir John Kotelawala Defence University (KDU)",
    "Ocean University of Sri Lanka",
    "Bhiksu University of Sri Lanka",
    "Buddhist and Pali University of Sri Lanka",

    // Private / Non-State Universities
    "Sri Lanka Institute of Information Technology (SLIIT)",
    "NSBM Green University",
    "Sri Lanka Technology Campus (SLTC)",
    "Saegis Campus",
    "Informatics Institute of Technology (IIT)",
    "Horizon Campus",
    "CINEC Campus",
    "ICBT Campus",
    "APIIT Sri Lanka",
    "KIU University",

    "Other",
];

const ACADEMIC_YEARS = ["Year 1", "Year 2", "Year 3", "Year 4 / Final"];

// Extracted MemberForm component
interface MemberFormProps {
    title: string;
    prefix: "member1" | "member2" | "member3";
    form: UseFormReturn<FormValues>;
}

const MemberForm = ({ title, prefix, form }: MemberFormProps) => {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-500/20 rounded-lg">
                    <User className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                    control={form.control}
                    name={`${prefix}.fullName`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} className="bg-neutral-950 border-neutral-800 focus:border-orange-500 h-11" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={`${prefix}.nicPassport`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>NIC / Passport Number</FormLabel>
                            <FormControl>
                                <Input placeholder="123456789V" {...field} className="bg-neutral-950 border-neutral-800 focus:border-orange-500 h-11" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={`${prefix}.uniRegNo`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>University Reg Number</FormLabel>
                            <FormControl>
                                <Input placeholder="UWU/ICT/21/001" {...field} className="bg-neutral-950 border-neutral-800 focus:border-orange-500 h-11" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={`${prefix}.degree`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Degree Programme</FormLabel>
                            <FormControl>
                                <Input placeholder="BSc in Computer Science" {...field} className="bg-neutral-950 border-neutral-800 focus:border-orange-500 h-11" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={`${prefix}.academicYear`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Academic Year</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="bg-neutral-950 border-neutral-800 h-11">
                                        <SelectValue placeholder="Select year" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-neutral-900 border-neutral-800 text-white">
                                    {ACADEMIC_YEARS.map(year => (
                                        <SelectItem key={year} value={year}>{year}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={`${prefix}.contact`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Contact Number</FormLabel>
                            <FormControl>
                                <Input type="tel" placeholder="0712345678" {...field} className="bg-neutral-950 border-neutral-800 focus:border-orange-500 h-11" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={`${prefix}.email`}
                    render={({ field }) => (
                        <FormItem className="md:col-span-2">
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} className="bg-neutral-950 border-neutral-800 focus:border-orange-500 h-11" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </div>
    );
};

export default function RegisterPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const totalSteps = 5;
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            teamName: "",
            university: "",
            otherUniversity: "",
            agree: false,
            member1: {
                fullName: "",
                nicPassport: "",
                uniRegNo: "",
                degree: "",
                academicYear: "",
                contact: "",
                email: "",
            },
            member2: {
                fullName: "",
                nicPassport: "",
                uniRegNo: "",
                degree: "",
                academicYear: "",
                contact: "",
                email: "",
            },
            member3: {
                fullName: "",
                nicPassport: "",
                uniRegNo: "",
                degree: "",
                academicYear: "",
                contact: "",
                email: "",
            },
        },
    });

    const onSubmit = async (values: FormValues) => {
        setIsSubmitting(true);
        try {
            // Prepare Final Data
            const finalData = {
                teamName: values.teamName,
                university: values.university === "Other" ? values.otherUniversity : values.university,
                createdAt: serverTimestamp(),
                member1: values.member1,
                member2: values.member2,
                member3: values.member3,
            };

            // Save to Firestore
            console.log("Submitting Team Data:", finalData);
            await addDoc(collection(db, "registrations"), finalData);

            toast.success("Team registered successfully!");
            router.push("/thank-you");
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("An error occurred during registration. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const nextStep = async () => {
        let fieldsToValidate: (keyof FormValues)[] = [];
        if (step === 1) fieldsToValidate = ["teamName", "university", "otherUniversity"];
        if (step === 2) fieldsToValidate = ["member1"];
        if (step === 3) fieldsToValidate = ["member2"];
        if (step === 4) fieldsToValidate = ["member3"];

        const isValid = await form.trigger(fieldsToValidate);
        if (isValid) {
            setStep(s => Math.min(s + 1, totalSteps));
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const prevStep = () => {
        setStep(s => Math.max(s - 1, 1));
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <main className="min-h-screen bg-[#101010] text-white flex flex-col relative overflow-hidden">
            <Navbar />

            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

            <Wrapper className="pt-32 pb-20 flex-1">
                <div className="max-w-4xl mx-auto">
                    <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-8 group px-2">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <header className="mb-10 px-2 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-100 to-orange-500 leading-tight tracking-tighter">
                            Registrations
                        </h1>
                        <p className="text-orange-500 text-xl font-bold mb-6">
                            Join the Datathon. Push Your Limits. Analyze. Solve. Conquer.
                        </p>
                        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
                            Get ready to be part of Codemania v6.0! Teams from state and non-state universities across Sri Lanka can register to participate in our island-wide datathon. This is your first step toward competing, learning, and gaining exposure.
                        </p>

                        <div className="mt-10 p-6 rounded-2xl bg-orange-600/10 border border-orange-500/20 inline-block text-left">
                            <h4 className="text-orange-500 font-bold uppercase text-xs tracking-widest mb-1">Registration Status</h4>
                            <p className="text-white text-lg font-bold">Open / January 30 – February 10</p>
                        </div>
                    </header>

                    {/* Stepper */}
                    <div className="flex items-center justify-between mb-12 relative px-2 max-w-2xl mx-auto">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-neutral-800 -translate-y-1/2 -z-10" />
                        {[1, 2, 3, 4, 5].map((s) => (
                            <div key={s} className="flex flex-col items-center gap-2 relative">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 ${step >= s ? "bg-orange-600 border-orange-600 text-white shadow-[0_0_15px_rgba(234,88,12,0.4)]" : "bg-[#101010] border-neutral-800 text-gray-500"
                                    }`}>
                                    {s}
                                </div>
                                <span className={`text-[10px] md:text-xs absolute -bottom-6 font-medium whitespace-nowrap transition-colors ${step >= s ? "text-orange-500" : "text-gray-600"}`}>
                                    {s === 1 && "Team Info"}
                                    {s === 2 && "Leader"}
                                    {s === 3 && "Member 2"}
                                    {s === 4 && "Member 3"}
                                    {s === 5 && "Review"}
                                </span>
                            </div>
                        ))}
                    </div>

                    <Card className="bg-neutral-900/40 border-neutral-800 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden mt-8 border">
                        <CardContent className="p-6 md:p-10">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <AnimatePresence mode="wait">
                                        {step === 1 && (
                                            <motion.div
                                                key="step1"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-6"
                                            >
                                                <div className="flex items-center gap-3 mb-6">
                                                    <div className="p-2 bg-orange-500/20 rounded-lg">
                                                        <Users className="w-6 h-6 text-orange-500" />
                                                    </div>
                                                    <h3 className="text-xl font-bold text-white">Team Information</h3>
                                                </div>

                                                <FormField
                                                    control={form.control}
                                                    name="teamName"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Team Name</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Enter your team name" {...field} className="bg-neutral-950 border-neutral-800 h-12 rounded-xl focus:border-orange-500" />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                <FormField
                                                    control={form.control}
                                                    name="university"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>University / Institute</FormLabel>
                                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                <FormControl>
                                                                    <SelectTrigger className="bg-neutral-950 border-neutral-800 h-12 rounded-xl">
                                                                        <SelectValue placeholder="Select your university" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent className="bg-neutral-900 border-neutral-800 text-white">
                                                                    {UNIVERSITIES.map(uni => (
                                                                        <SelectItem key={uni} value={uni}>{uni}</SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                {form.watch("university") === "Other" && (
                                                    <FormField
                                                        control={form.control}
                                                        name="otherUniversity"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Please specify your university</FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="Enter university name" {...field} className="bg-neutral-950 border-neutral-800 h-12 rounded-xl focus:border-orange-500" />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                )}
                                            </motion.div>
                                        )}

                                        {step === 2 && (
                                            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                                <MemberForm title="Team Leader (Member 1)" prefix="member1" form={form} />
                                            </motion.div>
                                        )}

                                        {step === 3 && (
                                            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                                <MemberForm title="Team Member 2" prefix="member2" form={form} />
                                            </motion.div>
                                        )}

                                        {step === 4 && (
                                            <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                                <MemberForm title="Team Member 3" prefix="member3" form={form} />
                                            </motion.div>
                                        )}

                                        {step === 5 && (
                                            <motion.div
                                                key="step5"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-8"
                                            >
                                                <div className="flex items-center gap-3 mb-6">
                                                    <div className="p-2 bg-orange-500/20 rounded-lg">
                                                        <ShieldCheck className="w-6 h-6 text-orange-500" />
                                                    </div>
                                                    <h3 className="text-xl font-bold text-white">Declaration & Consent</h3>
                                                </div>

                                                <div className="bg-neutral-950/50 p-6 rounded-2xl border border-neutral-800 text-gray-300 text-sm leading-relaxed space-y-4 shadow-inner">
                                                    <p><strong>Registration Process:</strong> Teams of 2–3 members register through the official portal. All participants must provide valid information and agree to event rules.</p>
                                                    <p><strong>Eligibility Criteria:</strong> Open to all undergraduate students from Sri Lankan universities. One student cannot be part of more than one team.</p>
                                                    <p><strong>Registration Timeline:</strong> Opens January 30 and closes February 10. Late or incomplete entries will not be accepted.</p>
                                                    <p><strong>Confirmation & Onboarding:</strong> Confirmed teams receive emails with datathon guidelines, resources, and workshop schedules.</p>
                                                </div>

                                                <FormField
                                                    control={form.control}
                                                    name="agree"
                                                    render={({ field }) => (
                                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4">
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={field.value}
                                                                    onCheckedChange={field.onChange}
                                                                    className="border-neutral-700 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                                                                />
                                                            </FormControl>
                                                            <div className="space-y-1 leading-none">
                                                                <FormLabel className="text-sm font-medium text-gray-300">
                                                                    Agree to Declaration & Consent
                                                                </FormLabel>
                                                            </div>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                                    <div className="bg-neutral-950/50 p-5 rounded-2xl border border-neutral-800 border-l-orange-500 border-l-4 shadow-lg">
                                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-medium">Team Name</p>
                                                        <p className="text-white font-bold text-xl">{form.getValues("teamName")}</p>
                                                    </div>
                                                    <div className="bg-neutral-950/50 p-5 rounded-2xl border border-neutral-800 border-l-blue-500 border-l-4 shadow-lg">
                                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-medium">University</p>
                                                        <p className="text-white font-bold text-xl">{form.getValues("university") === "Other" ? form.getValues("otherUniversity") : form.getValues("university")}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <div className="flex justify-between items-center pt-8 border-t border-neutral-800/50">
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            onClick={prevStep}
                                            disabled={step === 1 || isSubmitting}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            Previous
                                        </Button>

                                        {step < totalSteps ? (
                                            <Button
                                                type="button"
                                                onClick={nextStep}
                                                className="bg-orange-600 hover:bg-orange-700 px-8 rounded-xl h-12 font-semibold shadow-lg transition-all"
                                            >
                                                Next Step
                                            </Button>
                                        ) : (
                                            <Button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="bg-gradient-to-r from-orange-600 to-orange-400 hover:from-orange-700 hover:to-orange-500 px-10 shadow-[0_0_20px_rgba(234,88,12,0.3)] transition-all duration-300 rounded-xl h-12 min-w-[200px] font-bold"
                                            >
                                                {isSubmitting ? (
                                                    <span className="flex items-center gap-2">
                                                        <Loader2 className="w-5 h-5 animate-spin" />
                                                        Registering...
                                                    </span>
                                                ) : "Complete Registration"}
                                            </Button>
                                        )}
                                    </div>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </Wrapper>

            <Footer />
        </main>
    );
}
