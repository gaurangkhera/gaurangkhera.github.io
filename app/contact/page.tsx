"use client";

import { subtitle, title } from "@/components/primitives"
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/react"
import clsx from "clsx";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Toaster, toast } from 'sonner'

const Page = () => {
    const [firstName, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')
    const [submitting, setSubmitting] = useState(false);

    const submitForm = async () => {
        try{
            console.log('tryna send')
            setSubmitting(true);
            const res = await fetch('/api/send', {
                method: 'POST',
                body: JSON.stringify({firstName: firstName, email: email, subject: subject, content: content})
            })
            console.log(res)
            setSubmitting(false);
            toast.success("Message sent successfully.");
        }catch(e){
            setSubmitting(false);
            toast.error("Error sending message.");
        }
    }

    return(
        <>
        <Toaster richColors />
        <h1 className={clsx(title(), 'clash')}>Contact me</h1>
        <h2 className={subtitle()}>Have a question? Contact me here.</h2>

        <form className="flex flex-col space-y-4">
            <Input variant="bordered" value={firstName} type="text" required onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <Input variant="bordered" value={email} type="email" required onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <Input variant="bordered" value={subject} type="text" required onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
            <Textarea variant="bordered" value={content} type="text" required onChange={(e) => setContent(e.target.value)} placeholder="Content" />
            <Button disabled={submitting} onClick={() => submitForm()} color="success">{submitting ? (
                <><Loader2 className="w-4 h-4 animate-spin" />Sending</> 
            ) : (
                <>Send</>
            )}</Button>
        </form>
        </>
    )
}

export default Page;