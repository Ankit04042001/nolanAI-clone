import { GoogleGenerativeAI } from '@google/generative-ai';
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    text: string,
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const selectedFeatureType = req.body.selectedFeatureType;
    const featureFilmTitle = req.body.featureFilmTitle;
    const genre = req.body.genre;
    const synopsis = req.body.synopsis;
    const videoScriptTitle = req.body.videoScriptTitle
    const videoScriptAbout = req.body.videoScriptAbout
    const platform = req.body.platform
    
    let prompt;
    if (selectedFeatureType === 'featureFilm') {
        prompt = `Write a feature Script for title: ${featureFilmTitle}, genre: ${genre} with synopsis ${synopsis}`;
    }
    else {
        prompt = `Write a Short Video Script for title: ${videoScriptTitle}, about: ${videoScriptAbout} for platform: ${platform}`;
    }

    const genAI = new GoogleGenerativeAI(process.env.API_KEY!)

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(prompt!);
    const response = result.response.text()
    if (req.method === 'POST') {
        res.status(200).json({ text: response })
    } else {
        res.status(405).json({ text: 'Method not Allowed' })
    }
}