"use client";

import { subtitle, title } from "@/components/primitives"
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/react"
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
        <h1 className={title()}>Contact me</h1>
        <h2 className={subtitle()}>Have a question? Contact me here.</h2>

        <Input variant="bordered" value={firstName} required onChange={(e) => setName(e.target.value)} placeholder="Name" className="my-4" />
        <Input variant="bordered" value={email} required onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="my-4" />
        <Input variant="bordered" value={subject} required onChange={(e) => setSubject(e.target.value)} placeholder="Subject" className="my-4" />
        <Textarea variant="bordered" value={content} required onChange={(e) => setContent(e.target.value)} placeholder="Content" className="my-4" />
        <Button disabled={submitting} onClick={() => submitForm()} color="success">{submitting ? (
            <><Loader2 className="w-4 h-4 animate-spin" />Sending</> 
        ) : (
            <>Send</>
        )}</Button>
        </>
    )
}

export default Page;