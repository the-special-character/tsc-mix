"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { JobDataType } from "@/utils/types"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"
import { Textarea } from "../ui/textarea"
import { Checkbox } from "../ui/checkbox"

const formSchema = z.object({
    username: z.string().min(2, {

    }),
})

const ApplyForm = ({ data }: JobDataType) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {

        console.log(values)
    }

    return (

        <section className='bg-gray1 text-primary max-sm:py-16 md:px-20 '>
            <div className='md:p-20  p-6 bg-background '>
                <div className='flex flex-wrap justify-between max-lg:pb-5 pb-8'>
                    <div>
                        <div className='text-subtitle3'>
                            {data.title}
                        </div>
                        <div className='text-subtitle2 '>
                            {data.subtitle}
                        </div>

                    </div>

                </div>
                <hr />
                <Form {...form}>

                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8  pt-5">

                        <FormField
                            control={form.control}
                            name="username"

                            render={({ field }) => (
                                <>
                                    <div>

                                        <div className="py-2">
                                            <div className="text-blue text-subtitle2 ">Resume <span className="text-md font-light" >(Attach the CV to auto-populate the form!)</span></div>
                                            <FormItem className="w-[50%]">
                                                <FormLabel>Attach CV (doc/docx/pdf/rtf only)</FormLabel>
                                                <FormControl >
                                                    <Input type="file" />
                                                </FormControl>
                                                <FormDescription>
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        </div>
                                        <div className="text-blue text-subtitle2 py-3">CANDIDATES PERSONAL DETAILS</div>
                                        <div className="flex max-lg:flex-wrap lg:gap-24  w-full">

                                            <FormItem className="w-full">
                                                <FormLabel>FirstName</FormLabel>
                                                <FormControl >
                                                    <Input placeholder="" />
                                                </FormControl>
                                                <FormDescription>
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                            <FormItem className="w-full">
                                                <FormLabel>LastName</FormLabel>
                                                <FormControl >
                                                    <Input placeholder="" />
                                                </FormControl>
                                                <FormDescription>
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        </div>
                                        <div className="flex max-lg:flex-wrap lg:gap-24 w-full">
                                            <FormItem className="w-full">
                                                <FormLabel>Email</FormLabel>
                                                <FormControl >
                                                    <Input placeholder="" />
                                                </FormControl>
                                                <FormDescription>
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                            <FormItem className="w-full">
                                                <FormLabel>Phone Number</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="" type="number" />
                                                </FormControl>
                                                <FormDescription>
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        </div>
                                        <div className="flex max-lg:flex-wrap lg:gap-24 w-full">
                                            <FormItem className="w-full">
                                                <FormLabel>Zip</FormLabel>
                                                <FormControl >
                                                    <Input placeholder="" />
                                                </FormControl>
                                                <FormDescription>
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                            <FormItem className="w-full">
                                                <FormLabel>Address</FormLabel>
                                                <FormControl >
                                                    <Input placeholder="" />
                                                </FormControl>
                                                <FormDescription>
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        </div>
                                        <FormItem >
                                            <FormLabel>Full Address</FormLabel>
                                            <FormControl >
                                                <Input placeholder="" />
                                            </FormControl>
                                            <FormDescription>
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                        <div className="flex max-lg:flex-wrap lg:gap-24 w-full">
                                            <FormItem className="w-full">
                                                <FormLabel>Date of Birth (18 yrs min)</FormLabel>
                                                <FormControl >
                                                    <Input placeholder="" type="date" />
                                                </FormControl>
                                                <FormDescription>
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                            <FormItem className="w-full">
                                                <FormLabel>Gender</FormLabel>
                                                <FormControl >
                                                    <Select>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Select Gender" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                <SelectLabel>gender</SelectLabel>
                                                                <SelectItem value="male">Male</SelectItem>
                                                                <SelectItem value="female">Female</SelectItem>
                                                            </SelectGroup>
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormDescription>
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-blue text-subtitle2 py-3">IDENTITY</div>
                                        <FormItem className="w-[50%]">
                                            <FormLabel>Passport Number</FormLabel>
                                            <FormControl >
                                                <Input placeholder="e.g F99999999" type="number" />
                                            </FormControl>
                                            <FormDescription>
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    </div>
                                    <div>
                                        <div className="text-blue text-subtitle2 py-3">EMPLOYMENT DETAILS</div>
                                        <div className="flex max-lg:flex-wrap lg:gap-24 w-full">
                                            <FormItem className="w-full">
                                                <FormLabel>Total Experience (yrs)</FormLabel>
                                                <FormControl >
                                                    <Input placeholder="" type="number" />
                                                </FormControl>
                                                <FormDescription>
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                            <FormItem className="w-full">
                                                <FormLabel>Relevant Experience (yrs)</FormLabel>
                                                <FormControl >
                                                    <Input placeholder="" type="number" />
                                                </FormControl>
                                                <FormDescription>
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        </div>
                                        <div className="flex max-lg:flex-wrap lg:gap-24 w-full">
                                            <FormItem className="w-full">
                                                <FormLabel>Current Company</FormLabel>
                                                <FormControl >
                                                    <Input placeholder="" />
                                                </FormControl>
                                                <FormDescription>
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                            <FormItem className="w-full">
                                                <FormLabel>Notice Period (days)</FormLabel>
                                                <FormControl >
                                                    <Input placeholder="" type="number" />
                                                </FormControl>
                                                <FormDescription>
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        </div>
                                        <div className="flex max-lg:flex-wrap lg:gap-24 w-full">
                                            <FormItem className="w-full">
                                                <FormLabel>Current Salary</FormLabel>
                                                <FormControl >
                                                    <Input typeof="Number" placeholder="" type="number" />
                                                </FormControl>
                                                <FormDescription>
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                            <FormItem className="w-full">
                                                <FormLabel>Expected Salary</FormLabel>
                                                <FormControl >
                                                    <Input typeof="Number" placeholder="" type="number" />
                                                </FormControl>
                                                <FormDescription>
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-blue text-subtitle2 py-3">MESSAGE FROM APPLICANT</div>
                                        <FormItem className="w-full">
                                            <FormLabel>Cover Notes</FormLabel>
                                            <FormControl >
                                                <Textarea placeholder="" />
                                            </FormControl>
                                            <FormDescription>
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    </div>
                                    <div>
                                        <div className="text-subtitle2 py-3">Consent</div>
                                        <p className="italic py-3">
                                            We process this data for recruitment purposes (e.g. screening, evaluations, employment letter generations, background verification) only. We also store this data in our applicant tracking system and are fully compliant with the local laws.If you have any questions or concerns, please do not hesitate to contact the recruiter or our reception
                                        </p>
                                        <span className="mt-4"><Checkbox /> I Agree</span>
                                    </div>
                                </>
                            )}
                        />

                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </section>
    )
}

export default ApplyForm;

