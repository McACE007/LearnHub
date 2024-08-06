import { Prisma } from "@prisma/client"
import { createCourse } from "./queries"

type Course = Prisma.PromiseReturnType<typeof createCourse>
