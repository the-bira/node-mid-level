import path from 'path'
import fs from 'fs'
import { NextRequest, NextResponse } from 'next/server';

interface ParamsProps {
  params: {
    filename: string
  }
}

export async function GET(request: Request, {params}: ParamsProps){
  const {filename} = params

  const question = path.join(process.cwd(), 'src', 'questions', `${filename}`);
  const fileContent =  fs.readFileSync(question).toString()
  const response = {
    body: fileContent,
 }

  console.log(response)
  return NextResponse.json(response, {status: 200})

}
