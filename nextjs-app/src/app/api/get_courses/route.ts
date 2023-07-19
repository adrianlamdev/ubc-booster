import prisma from '../../../../prisma/client'

import { NextResponse } from 'next/server'

//  DELETE LATER BECAUSE NOT NEEDED
export async function POST(request: Request) {
    const courses = await request.json()
    const courseTitles = Object.keys(courses)
    for (const courseTitle of courseTitles) {
        const courseFetch = await fetch(`https://raw.githubusercontent.com/DonneyF/ubc-pair-grade-data/master/tableau-dashboard/UBCV/2017S/UBCV-2017S-${courseTitle}.csv`)
        if (courseFetch.status == 404) {
            console.log(`No data for ${courseTitle}`)
            continue
        }
        else {
            console.log(`Data for ${courseTitle} found`)
        }
    }
        

    return NextResponse.json({ 
        message: "Push to db success",
     })
}
