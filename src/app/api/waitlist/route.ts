import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// Helper function to validate email
const isValidEmail = (email: string) => {
    return email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email } = body;

        if (!isValidEmail(email)) {
            return NextResponse.json(
                { error: 'Invalid email address provided.' },
                { status: 400 }
            );
        }

        // Define the path to the CSV file at the project root
        const filePath = path.join(process.cwd(), 'waitlist.csv');

        // Define the row data: Email, Timestamp
        const timestamp = new Date().toISOString();
        const csvRow = `"${email}","${timestamp}"\n`;

        try {
            // Check if file exists to add headers if it's new
            await fs.access(filePath);
            await fs.appendFile(filePath, csvRow);
        } catch (error) {
            // If the file doesn't exist, create it with headers
            const headers = '"Email","Signup Date"\n';
            await fs.writeFile(filePath, headers + csvRow);
        }

        return NextResponse.json(
            { message: 'Successfully added to waitlist.' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Waitlist Error:', error);
        return NextResponse.json(
            { error: 'An unexpected error occurred.' },
            { status: 500 }
        );
    }
}
