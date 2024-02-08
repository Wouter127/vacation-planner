import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export async function PATCH(
    req: Request,
    {params}: {params: {courseId: string}}
) {
    try {
        const {userId} = auth();

        if (!userId) {
            return new NextResponse("unauhtorized", {status:401})
        }

        const ownCourse = await db.course.findUnique({
            where: {
                id: params.courseId,
                userId
            }
        });

        if (!ownCourse) {
            return new NextResponse("unauhtorized", {status:401})
        }

        const course = await db.course.findUnique({
            where: {
                id: params.courseId,
                userId,
            }
        });

        if (!course) {
            return new NextResponse("Not Found", { status: 404 })
        }

        const unpublishedCourse = await db.course.update({
            where: {
                id: params.courseId,
                userId,
            },
            data : {
                isPublished: false,
            }
        });

        return NextResponse.json(unpublishedCourse);
        
    } catch (error) {
        console.log("[COURSE_UNPUBLISH]", error);
        return new NextResponse("Internal error", {status: 500})
    }
}