/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line import/no-anonymous-default-export
import type { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from "puppeteer";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query

  try {  
  
    const artistId  = slug
    
    const browser = await puppeteer.launch( 
      {
          headless: "new",
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });
    
    const page = await browser.newPage();

    await page.goto('https://open.spotify.com/artist/'+artistId);
    await page.waitForSelector('.wi2HeHXOI471ZOh8ncCG');
    await page.click('.wi2HeHXOI471ZOh8ncCG');
    await page.waitForSelector('.h4HgbO_Uu1JYg5UGANeQ'); 

    const trackListData = await page.$$eval('.h4HgbO_Uu1JYg5UGANeQ', (elements) =>
    elements.map((element) => {
      const name = element?.querySelector('.t_yrXoUO3qGsJS4Y6iXX')?.textContent?.trim() ?? 'N/A';
      const image = element.querySelector('img')?.getAttribute('src') || 'N/A';
      const duration = element.querySelector('.Btg2qHSuepFGBG6X0yEN')?.textContent?.trim() ?? 'N/A';
      const streams = element.querySelector('.ieTwfQ')?.textContent?.trim() ?? 'N/A';
   
      return { name, image, duration, streams }; 
    })
  );
 
    await browser.close(); 

    res.status(200).json({ message: 'Success', trackListData });

  } catch (error) { 
    console.error('Error in Puppeteer:', error);
    res.status(500).json({ error });
  }
}

