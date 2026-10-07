import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
const express = require('express');

dotenv.config();
const app = express();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run() {
    const model = genAI.getGenerativeModel({
        model: 'gemini-2.5-flash',
    });

    const result = await model.generateContent(
        'Explain Node.js in simple terms'
    );

    const text = result.response.text();
    console.log(text);
}

// this is a comment

run();
