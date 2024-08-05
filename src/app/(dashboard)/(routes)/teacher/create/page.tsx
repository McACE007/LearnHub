'use client'
import { Button } from "@/components/ui/button"
import { Form, FormItem, FormField, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import * as z from "zod"

type Props = {}

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
})

export default function CreatePage({ }: Props) {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/course", values);
      router.push(`/teacher/courses/${response.data.id}`)
    } catch (error) {
      toast.error("Something went wrong!!")
    }
  }

  return (
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
      <div>
        <h1 className="text-2xl">Name your course</h1>
        <p className="text-sm text-slate-600">What would you like to name your course? Don't worry, you can chage this later.</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
            <FormField control={form.control} name="title" render={({ field }) => (
              <FormItem>
                <FormLabel>Course Title</FormLabel>
                <FormControl>
                  <Input disabled={isSubmitting} placeholder="e.g. 'Advance Web Development'" {...field} />
                </FormControl>
                <FormDescription>What will you teach in this class?</FormDescription>
                <FormMessage />
              </FormItem>
            )} />

            <div className="flex items-center gap-x-2">
              <Link href={'/'}>
                <Button variant={'ghost'} type="button">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" disabled={!isValid || isSubmitting}>
                Submit
              </Button>
            </div>

          </form>
        </Form>
      </div>
    </div>
  )
}