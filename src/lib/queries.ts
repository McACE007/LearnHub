'use server'

import { db } from "./db"
import { currentUser } from "@clerk/nextjs/server";

export const createCourse = async (title: string) => {
  try {
    const user = await currentUser();

    if (!user) return;

    const course = await db.course.create({
      data: {
        userId: user.id,
        title,
      }
    })
    return course;
  } catch (e) {
    console.log("[COURSES]", e)
  }
}


