import { App, Page, createPage } from 'vuepress'

const blogPathRegExp = /\/(?<year>\d{4})\/(?<month>\d{2})\/(?<day>\d{2})\/(?<name>.+)\.html$/;

interface DayContentData {
    date: string,
    count: number,
    page: Page
}

const createYearIndex = (year: string, years: string[], yearData: any): string => {
    let content: string = `# ${year}年\n`

    let yearLinks = ''
    for (const y of years) {
        if (yearLinks) {
            yearLinks += ' |\n'
        }
        if (y === year) {
            yearLinks += `${y}年`
        } else {
            yearLinks += `[${y}年](/blog/${y}/index.html)`
        }
    }
    content += yearLinks + '\n';

    for (const month of Object.keys(yearData).sort().reverse()) {
        const monthData = yearData[month]
        content += `## ${Number(month)}月\n`
        for (const day of Object.keys(monthData).sort().reverse()) {
            const dayData: DayContentData[] = monthData[day]
            for (const dayContent of dayData.sort(d => d.count).reverse()) {
                content += `* ${year}/${month}/${day} [${dayContent.page.title}](${dayContent.page.path})\n`
            }
        }
    }

    return content
}

export async function makeBlog(app: App) {
    const blogPages = {}
    let latestYear = 0

    for (const page of app.pages) {
        if (!page.path.startsWith('/blog/') || !page.path.endsWith('.html')) {
            continue;
        }

        if (page.frontmatter.excludes === true) {
            continue
        }

        const x = page.path.match(blogPathRegExp);
        const year = x?.groups?.year
        const month = x?.groups?.month
        const day = x?.groups?.day
        const name = x?.groups?.name
        if (!year || !month || !day || !name) {
            continue
        }
        const count = parseInt(name.split('-', 2)[0])
        if (!count) {
            continue;
        }

        const yearData = blogPages[year] || {}
        const monthData = yearData[month] || {}
        const dayData: DayContentData[] = monthData[day] || []

        dayData.push({
            date: `${year}/${month}/${day}`,
            count: count,
            page: page,
        })

        blogPages[year] = yearData
        yearData[month] = monthData
        monthData[day] = dayData

        if (latestYear < Number(year)) {
            latestYear = Number(year)
        }
    }

    const years = Object.keys(blogPages).sort().reverse()
    const recentPages: DayContentData[] = []
    for (const year of years) {
        const yearData = blogPages[year]
        const yearIndexPage = await createPage(app, {
            path: `/blog/${year}/index.html`,
            content: createYearIndex(year, years, yearData),
        });
        app.pages.push(yearIndexPage)

        for (const month of Object.keys(yearData)) {
            const monthData = yearData[month]
            for (const day of Object.keys(monthData)) {
                const dayData: DayContentData[] = monthData[day]
                for (const dayContent of dayData) {
                    if (recentPages.length >= 5) {
                        break;
                    }

                    recentPages.push(dayContent)
                }
                if (recentPages.length >= 5) {
                    break;
                }
            }
            if (recentPages.length >= 5) {
                break;
            }
        }
    }

    for (const page of app.pages) {
        (page.data as any).blogLatestYear = latestYear;
        (page.data as any).recentBlogs = recentPages.map(p => ({
            date: p.date,
            path: p.page.path,
            title: p.page.title,
        }))
    }
}