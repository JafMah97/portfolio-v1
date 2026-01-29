"use client";

import { z } from "zod";
import { useForm, Controller } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldError,
} from "@/components/ui/field";

import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { useTranslation } from "@/providers/translation-provider";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa6";
import confetti from "canvas-confetti";


export default function ContactFormSection() {
  const [contactState, setContactState] = useState({
    isPending: false,
    isSuccess: false,
    isError: false,
  });

  const dict = useTranslation().contactPage.formSection;

  useEffect(() => {
    if (contactState.isSuccess) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  }, [contactState.isSuccess]);


  type ContactFormValues = z.infer<typeof ContactSchema>;
  const ContactSchema = z.object({
    name: z.string().min(2, dict.validation.invalidName),
    email: z.email(dict.validation.invalidEmail),
    message: z.string().min(10, dict.validation.invalidMessage),
  });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setContactState({
      isPending: true,
      isSuccess: false,
      isError: false,
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setContactState({
          isPending: false,
          isSuccess: false,
          isError: true,
        });
        console.error(result);
        return;
      }

      setContactState({
        isPending: false,
        isSuccess: true,
        isError: false,
      });

      form.reset();
    } catch (err) {
      setContactState({
        isPending: false,
        isSuccess: false,
        isError: true,
      });
      console.error("Request failed:", err);
    } finally {
    
      setContactState((prev) => ({
        ...prev,
        isPending: false,
      }));
    }
  }

  return (
    <section className="w-full py-16 bg-primary/10">
      <div className="container max-w-3xl mx-auto px-4">
        {/* Form Card */}
        <MotionWrapper fadeUp delay={0.2}>
          <Card className="shadow-lg border-border/50 p-5 gap-0">
            <CardHeader className="p-5">
              <CardTitle className="text-2xl">{dict.formTitle}</CardTitle>
              <CardDescription className="text-base">
                {dict.formDescription}
              </CardDescription>
            </CardHeader>

            <CardContent className="p-5">
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-10"
              >
                <FieldSet>
                  {/* 2-column layout on large screens */}
                  <FieldGroup className="mt-6 grid grid-cols-1 lg:grid-cols-2">
                    {/* Name */}
                    <Controller
                      name="name"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor={field.name}>
                            {dict.nameLabel}
                          </FieldLabel>
                          <Input
                            {...field}
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            placeholder={dict.namePlaceholder}
                            className="h-12"
                          />
                          <FieldDescription>
                            {dict.nameDescription}
                          </FieldDescription>
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />

                    {/* Email */}
                    <Controller
                      name="email"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor={field.name}>
                            {dict.emailLabel}
                          </FieldLabel>
                          <Input
                            {...field}
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            placeholder={dict.emailPlaceholder}
                            className="h-12"
                          />
                          <FieldDescription>
                            {dict.emailDescription}
                          </FieldDescription>
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                  </FieldGroup>

                  {/* Message (full width) */}
                  <FieldGroup>
                    <Controller
                      name="message"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor={field.name}>
                            {dict.messageLabel}
                          </FieldLabel>
                          <Textarea
                            {...field}
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            placeholder={dict.messagePlaceholder}
                            className="min-h-35 resize-none"
                          />
                          <FieldDescription>
                            {dict.messageDescription}
                          </FieldDescription>

                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                  </FieldGroup>
                </FieldSet>
                {contactState.isSuccess && (
                  <p className="text-center text-green-600 font-medium flex items-center justify-center gap-2">
                    {/* success icon */}
                    <span>✓</span>
                    {dict.feedback.success}
                  </p>
                )}

                {contactState.isError && (
                  <p className="text-center text-red-600 font-medium flex items-center justify-center gap-2">
                    {/* error icon */}
                    <span>⚠️</span>
                    {dict.feedback.error}
                  </p>
                )}

                {/* Submit Button */}
                <MotionWrapper fadeUp delay={0.3}>
                  <Button
                    disabled={contactState.isPending}
                    type="submit"
                    size="lg"
                    className="w-full h-12 text-base font-medium"
                  >
                    {contactState.isPending ? (
                      <FaSpinner className="animate-spin" />
                    ) : (
                      dict.submit
                    )}
                  </Button>
                </MotionWrapper>
              </form>
            </CardContent>
          </Card>
        </MotionWrapper>
      </div>
    </section>
  );
}
