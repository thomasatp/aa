"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import Arrow from "../ui/navigation/arrow";
import Load from "../ui/navigation/load";
import { Toaster, toast } from "sonner";
import { Form } from "react-hook-form";

export type FormData = {
  company: string;
  jobposition: string;
  firstname: string;
  lastname: string;
  email: string;
  telephone: string;
  message: string;
};

const Contact: FC = () => {
  const { register, control } = useForm<FormData>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fieldClassName = "relative col-span-2 md:col-span-1 mb-5";
  const textAreaFieldClassName = "relative group col-span-2 mb-5";

  const labelClassName =
    "absolute block mb-1 transition-all duration-300 pointer-events-none font-medium ";
  const inputClassName =
    "field py-3 w-full text-base font-medium rounded-none text-neutral-700 bg-transparent border-b border-neutral-300 dark:border-neutral-700 outline-none focus:border-neutral-950 dark:focus:border-white text-neutral-950 dark:text-white";

  return (
    <Form
      action="/api/send" // Send post request with the FormData
      encType={"application/json"}
      onSuccess={() => {
        setIsLoading(false);
        toast.success("Votre email a bien été envoyé");
      }}
      onError={() => {
        setIsLoading(false);
        toast.error("Votre email n'a pas pu être envoyé");
      }}
      onSubmit={() => {
        setIsLoading(true);
      }}
      control={control}
      className="container grid grid-cols-2 gap-12 max-w-screen-md lg:grid-cols-2 max-lg:px-6"
    >
      <div className={fieldClassName}>
        <input
          type="text"
          placeholder=" "
          className={inputClassName}
          {...register("company", { required: true })}
        />
        <label htmlFor="company" className={labelClassName}>
          Société
        </label>
      </div>
      <div className={fieldClassName}>
        <input
          type="text"
          placeholder=" "
          className={inputClassName}
          {...register("jobposition", { required: true })}
        />
        <label htmlFor="jobposition" className={labelClassName}>
          Fonction
        </label>
      </div>
      <div className={fieldClassName}>
        <input
          type="text"
          placeholder=" "
          className={inputClassName}
          {...register("firstname", { required: true })}
        />
        <label htmlFor="fisrtname" className={labelClassName}>
          Prénom
        </label>
      </div>
      <div className={fieldClassName}>
        <input
          type="text"
          placeholder=" "
          className={inputClassName}
          {...register("lastname", { required: true })}
        />
        <label htmlFor="lastname" className={labelClassName}>
          Nom
        </label>
      </div>
      <div className={fieldClassName}>
        <input
          type="email"
          placeholder=" "
          className={inputClassName}
          {...register("email", { required: true })}
        />
        <label htmlFor="email" className={labelClassName}>
          Adresse email
        </label>
      </div>
      <div className={fieldClassName}>
        <input
          type="tel"
          placeholder=" "
          className={inputClassName}
          {...register("telephone", { required: true })}
        />
        <label htmlFor="telephone" className={labelClassName}>
          Téléphone
        </label>
      </div>
      <div className={textAreaFieldClassName}>
        <textarea
          rows={4}
          placeholder=" "
          className={`resize-none ${inputClassName}`}
          {...register("message", { required: true })}
        ></textarea>
        <label htmlFor="message" className={labelClassName}>
          Message
        </label>
      </div>
      <div className="flex col-span-2 justify-center">
        <button className="flex gap-x-0 justify-center items-center px-6 py-2 h-12 text-base font-medium text-white whitespace-nowrap rounded-full transition-all duration-300 translate-y-2 bg-neutral-950 dark:bg-white group/button group-hover:translate-y-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-950">
          Envoyer
          {isLoading ? (
            <div className="w-4 ml-2 transition-all duration-300">
              <Load className="animate-spin transition-all duration-1000 group-hover/button:opacity-100 stroke-white dark:stroke-neutral-950" />
            </div>
          ) : (
            <div className="w-0 ml-0 group-hover/button:ml-2 transition-all duration-300 group-hover/button:w-4">
              <Arrow className="opacity-0 transition-all duration-300 group-hover/button:opacity-100 stroke-white dark:stroke-neutral-950" />
            </div>
          )}
        </button>
      </div>
      <Toaster richColors />
    </Form>
  );
};

export default Contact;
