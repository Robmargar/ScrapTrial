const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ---------------------------------------OCC Hireline---------------------------------------
app.post("/hireline", async (req, res) => {
  const { query } = req.body;
  console.log(query);
  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  try {
    // Launch Puppeteer browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the search results page
    await page.goto("https://hireline.io/remoto/empleos?l=latam");
    await page.type('input[class="w-1/2 search-input"]', query);
    await page.click("button.search-submit ");
    await page.waitForSelector(
      'div[class="flex items-center justify-center space-x-0 md:space-x-12 flex-col md:flex-row"]'
    );
    // Extract search results
    const results = await page.evaluate(() => {
      const jobs = document.querySelectorAll(
        'a[class="hl-vacancy-card vacancy-container"]'
      );
      const data = [...jobs].map((j) => {
        const jTitle = j.querySelector(".vacancy-title").innerText;
        const jSalary = j.querySelector(".vacancy-subtitle").innerText;
        const jText = j.querySelector(".vacancy-summary").innerText;
        const jURL = j.href;
        const jFooter = [...j.querySelectorAll(".footer-item")].map(
          (tag) => tag.innerText
        );
        return {
          jTitle,
          jSalary,
          jText,
          jFooter,
          jURL,
        };
      });
      return data;
    });
    await browser.close();

    // Send the scraped data back to the front-end
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while scraping" });
  }
});
// ---------------------------------------OCC Mundial---------------------------------------
app.post("/occmundial", async (req, res) => {
  const { role } = req.body;
  const { city } = req.body;
  console.log(role);
  if (!role) {
    return res.status(400).json({ error: "Role is required" });
  }

  try {
    // Launch Puppeteer browser
    const browser = await puppeteer.launch({ headless: false, slowMo: 400 });
    const page = await browser.newPage();

    // Navigate to the search results page
    await page.goto(`https://www.occ.com.mx/empleos/de-${role}/en-${city}`);
    // // Extract search results
    const results = await page.evaluate(() => {
      const jobs = document.querySelectorAll(
        'div[class="bg-bg-surface-default rounded-xs border border-border-default-subtle transition duration-300 ease-in-out relative mb-2 py-4 px-6 sm:py-6 sm:px-8 hover:shadow-elevation-5 hover:-translate-y-1 md:hover:shadow-lg cursor-pointer md:!bg-bg-action-secondary-hover"]'
      );
      const data = [...jobs].map((j) => {
        const jTitle = j.querySelector(
          ".text-grey-900 text-lg break-words inline-block mt-0 mr-2 mb-0"
        ).innerText;
        const jSalary = j.querySelector(
          ".mr-2 text-grey-900 font-base font-light mb-1 sm:mb-4"
        ).innerText;
        //     const jText = j.querySelector(".vacancy-summary").innerText;
        //     const jURL = j.href;
        //     const jFooter = [...j.querySelectorAll(".footer-item")].map(
        //       (tag) => tag.innerText
        // );
        return {
          jTitle,
          jSalary,
          // jText,
          // jFooter,
          // jURL,
        };
      });
      return jobs;
    });
    await browser.close();

    // Send the scraped data back to the front-end
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while scraping" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
