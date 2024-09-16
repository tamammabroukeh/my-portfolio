import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { IFormData, ITemplateForm } from "@/interfaces/interfaces";
import { toast } from "sonner";

const useContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const sendEmail = async (params: ITemplateForm) => {
    const toastId = toast.loading("Sending your message, please wait...");
    toast.info(
      "Form submissions are demo-only here. Please checkout the final code repo to enable it. If you want to connect you can reach out to me via tamammb367@gmail.com.",
      {
        id: toastId,
      }
    );
    await emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
          limitRate: {
            throttle: 5000, // you can not send more then 1 email per 5 seconds
          },
        }
      )
      .then(
        () => {
          toast.success(
            "I have received your message, I will get back to you soon!",
            {
              id: toastId,
            }
          );
        },
        (error) => {
          // console.log("FAILED...", error.text);
          toast.error(
            "There was an error sending your message, please try again later!",
            {
              id: toastId,
            }
          );
        }
      );
  };

  const onSubmit = (data: IFormData) => {
    const templateParams: ITemplateForm = {
      to_name: "Tammam",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    sendEmail(templateParams);
  };
  return { onSubmit, register, handleSubmit, errors };
};

export default useContactForm;
