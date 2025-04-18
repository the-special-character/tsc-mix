"use client";
import React, { useId } from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import ErrorMessage from "../Common/ErrorMessage";
import CustomUpload from "../CustomFileUpload";

type FormData = {
  name: string;
  phone: string;
  email: string;
  projectInfo: string;
  attachment: File[];
};

const ContactFormTech = () => {
  const id = useId();

  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectInfo: "",
      // attachment: [],
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: FormData) => {
    console.log(data);
    // const formData = new FormData();

    // formData.append("name", data.name);
    // formData.append("email", data.email);
    // formData.append("phone", data.phone);
    // formData.append("projectInfo", data.projectInfo);
    // data.attachment.forEach((file) => {
    //   formData.append("attachment", file);
    // });

    // Object.entries(formData).forEach(([key, value]) => {
    //   console.log(key, value);
    // });

    // const fileInput = event.currentTarget.querySelector("[name=attachment]");
    // const phoneInput = document.querySelector('input[type="number"]');
    // const phoneValue = phoneInput?.value.trim();

    // if (fileInput && fileInput.files.length > 0) {
    //   Array.from(fileInput.files).forEach((file, index) => {
    //     formData.append(`attachment[${index}]`, file);
    //   });
    // }
    // console.log({ phoneInput });
    // console.log({ phoneValue });

    if (data?.phone.length === 10) {
      try {
        fetch("/api/contact_api", {
          mode: "no-cors",
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: JSON.stringify(data),
        })
          .then(async (response) => {
            if (response.ok) {
              const responseData = await response.json();
              return responseData;
            }
            throw new Error("Network response was not ok");
          })
          .then((data) => {
            console.log({ data });
            // alert("Message sent successfully!");
            reset();
          });
      } catch (error) {
        console.error("Error:", error);
        console.log("An error occurred. Please try again later.");
      }
    } else {
      console.log("Invalid phone number.");
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Controller
            name="name"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Full name is required",
              },
            }}
            render={({ field }) => (
              <>
                <Label htmlFor={`${id}-name`}>Name</Label>
                <Input
                  id={`${id}-name`}
                  {...field}
                  type="text"
                  placeholder="Enter your Name"
                  tabIndex={-1}
                />
                <ErrorMessage error={errors?.name?.message} />
              </>
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Controller
            name="phone"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Phone number is required",
              },
            }}
            render={({ field }) => (
              <>
                <Label htmlFor={`${id}-name`}>Phone</Label>
                <Input
                  id={`${id}-name`}
                  {...field}
                  type="tel"
                  placeholder="Enter your Phone Number"
                  tabIndex={-1}
                />
                <ErrorMessage error={errors?.phone?.message} />
              </>
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Controller
            name="email"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Enter a Valid Email Address",
              },
            }}
            render={({ field }) => (
              <>
                <Label htmlFor={`${id}-email`}>Email</Label>
                <Input
                  id={`${id}-email`}
                  {...field}
                  type="text"
                  placeholder="Enter your Email"
                  tabIndex={-1}
                  value={field.value}
                />
                <ErrorMessage error={errors?.email?.message} />
              </>
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Controller
            name="projectInfo"
            control={control}
            render={({ field }) => (
              <>
                <Label htmlFor={`${id}-projectInfo`}>
                  Project Info (Budget in avail.)
                </Label>
                <Textarea
                  id={`${id}-projectInfo`}
                  {...field}
                  placeholder="Enter your Message"
                  tabIndex={-1}
                />
                <ErrorMessage error={errors?.projectInfo?.message} />
              </>
            )}
          />
        </div>

        {/* <CustomUpload
          name="attachment"
          fileText="Attach your file"
          fileSize={5}
          varient={"header"}
          control={control}
        /> */}

        <Button type="submit" className="text-white my-4">
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default ContactFormTech;
